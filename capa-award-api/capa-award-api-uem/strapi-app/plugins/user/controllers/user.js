'use strict';

/**
 * user.js controller
 *
 * @description: A set of functions called "actions" of the `user` plugin.
 */

const bcrypt = require('bcryptjs');
// const { sanitizeEntity } = require('strapi-utils');
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const _ = require('lodash');



const sanitizeUser = user =>
    sanitizeEntity(user, {
        model: strapi.query('user', 'users-permissions').model,
    });

const IsExistColumn = async (data) => {
    let user =  await strapi.query('user', 'users-permissions')
        .findOne(data);      

    if(user !== null) {
        return {"result": true, value: `${data.name} duplicate`}
    }
    return {"result": false, value: `${data.name} not exist`}
}

const AddFiles = async (data) => {
    try {
        let resultData = await strapi.plugins.upload.services.upload.upload({
            data:{},
            files: {
                path: data.path, 
                name: data.name,
                type: data.type,
                size: data.size,
            },
        });

        return resultData[0].id;

    } catch (error) {
        console.log(error);
        return false;
    }
}


module.exports = {

    /**
     * Default action.
     *
     * @return {Object}
     */

    update: async (ctx) => {
        try{
            let body = ctx.request.body;
            const user = ctx.state.user;

            if (!user) {
                return ctx.badRequest({ error: 'No authorization header was found' });
            }

            const validadeDuplicate = [
                "username",
                "email"
            ];

            for (let index in body) {
                if(validadeDuplicate.find(e => e === index )) {
                    let test = {};
                    test[index] = body[index];
                    test["id_ne"] = user.id;

                    if((await IsExistColumn(test)).result) {
                        return ctx.badRequest(`${index} duplicate`)
                    }
                }
            }

            var response = null;

            if (ctx.is('multipart')) {
                const { data, files } = parseMultipartData(ctx);

                if (!_.isEmpty(files)) {

                    var images = {};

                    if(files.avatarImage) {
                        let isValid = await AddFiles(files.avatarImage);

                        if(isValid === false) {
                            return ctx.notFound("error in avatarImage");
                        }

                        images["avatarImage"] = isValid;
                    }

                    response = await strapi.query('user', 'users-permissions').update({ id: user.id }, Object.assign(data, images));

                } 

            } else {

                response = await strapi.query('user', 'users-permissions').update({ id: user.id }, body);

            }

            return ctx.send(sanitizeUser(response));      

        } catch (error) {
            console.log(`${error.message}`)
            return ctx.badRequest("not found");

        }
    },
    updatePassword: async (ctx) => {
        try {
            const user = ctx.state.user;

            if (!user) {
                return ctx.badRequest({ error: 'No authorization header was found' });
            }

            const data = ctx.request.body 

            if(data.currentPassword && data.newPassword  && data.currentPassword !== data.newPassword) {
                const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(data.currentPassword, user.password);

                if (!user) {
                    return ctx.badRequest('User does not exist');
                }

                if (!validPassword) {
                    return ctx.badRequest('Old password does not match.')
                }

                let updateData = { password: data.newPassword };
                const response = await strapi.plugins['users-permissions'].services.user.edit({ id: user.id }, updateData);

                return ctx.send(sanitizeUser(response));

            } else {
                return ctx.badRequest('New passwords do not match.');
            }
        } catch (error) {
            return ctx.badRequest(error)

        }
    },
    me: async (ctx) => {
        try{
            const user = ctx.state.user;

            if (!user) {
                return ctx.badRequest({ error: 'No authorization header was found' });
            }

            const response =  await strapi.query('user', 'users-permissions').findOne({"id": user.id});

            return ctx.send(sanitizeUser(response));

        } catch (error) {
            console.log(`${error.message}`)
            return ctx.badRequest("not found");

        }
    },
    register: async (ctx) => {
        try{
            let body = ctx.request.body;

            const validadeDuplicate = [
                "username",
                "email"
            ];

            for (let index in body) {
                if(validadeDuplicate.find(e => e === index )) {
                    let test = {};
                    test[index] = body[index];

                    if((await IsExistColumn(test)).result) {
                        return ctx.badRequest(`${index} duplicate`)
                    }
                }
            }

            var response = null;

            if (ctx.is('multipart')) {
                const { data, files } = parseMultipartData(ctx);

                for (let index in data) {
                    if(validadeDuplicate.find(e => e === index )) {
                        let test = {};
                        test[index] = data[index];

                        if((await IsExistColumn(test)).result) {
                            return ctx.badRequest(`${index} duplicate`)
                        }
                    }
                }

                if (!_.isEmpty(files)) {
                    var images = {};

                    if(files.avatar) {
                        let isValid = await AddFiles(files.avatarImage);

                        if(isValid === false) {
                            return ctx.notFound("error in avatar");
                        }

                        images["avatarImage"] = isValid;
                    }
                } 

                const role = await strapi.query("role", "users-permissions").findOne({type: "athlete"});

                let payload = Object.assign(data, images);
                payload["role"] = role.id;
                payload["blocked"] = false;
                payload["confirmed"] = true;
                payload["password"] = await bcrypt.hash(data.password, 10);

                let user = await strapi.query('user', 'users-permissions').create(payload);
                const jwtToken = strapi.plugins["users-permissions"].services.jwt.issue({ id: user.id }); 

                response = {
                    "jwt": jwtToken,
                    "user": sanitizeUser(user)
                }


            } else {
                const role = await strapi.query("role", "users-permissions").findOne({type: "athlete"});

                body["role"] = role.id;
                body["blocked"] = false;
                body["confirmed"] = true;
                body["password"] = await bcrypt.hash(body.password, 10);

                let user = await strapi.query('user', 'users-permissions').create(body);
                const jwtToken = strapi.plugins["users-permissions"].services.jwt.issue({ id: user.id }); 

                response = {
                    "jwt": jwtToken,
                    "user": sanitizeUser(user)
                }

            }

            return ctx.send(response);      

        } catch (error) {
            console.log(`${error.message}`)
            return ctx.badRequest("not found");

        }
    },
    login: async (ctx) => {
        try{
            let {username, email, password} = ctx.request.body;

            if(!password) {
                return ctx.badRequest(`password is empty`);
            }

            var user = null;

            if(username) {
                user =  await strapi.query('user', 'users-permissions').findOne({"username": username});
            }

            if(email) {
                user =  await strapi.query('user', 'users-permissions').findOne({"email": email});
            }

            if(!user) {
                return ctx.badRequest(`username or password are invalid`);
            }

            if(!await bcrypt.compare(password, user.password)) {
                return ctx.badRequest(`invalid credentials`);
            }

            const jwtToken = strapi.plugins["users-permissions"].services.jwt.issue({ id: user.id }); 

            return ctx.send({
                "jwt": jwtToken,
                "user": sanitizeUser(user)
            })

        } catch (error) {
            console.log(`${error.message}`)
            return ctx.badRequest("not found");

        }
    },
    redirectDeepLink: async (ctx) => {
        try{
            let code = ctx.query.code;
            let url = `itson://reset-password/${code}`;
           
            return ctx.redirect(url);

        } catch (error) {
            console.log(`${error.message}`)
            return ctx.badRequest("not found");

        }
    },
};
