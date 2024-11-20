'use strict';

/**
 * Jobs services
 */

module.exports = {
    // '0/1 * * *': async () => {
    //     try {

    //         let users = await strapi.query('user', 'users-permissions').find({ deleteAccount: true });

    //         for(var i in users) {
    //             await strapi.services.academy.delete({ users: [users[i].id] });
    //             await strapi.services.cards.delete({ user: users[i].id });
    //             await strapi.services.challenge.delete({ user: users[i].id });
    //             await strapi.services.guess.delete({ user: users[i].id });
    //             await strapi.services.orders.delete({ user: users[i].id });
    //             await strapi.services.ranking.delete({ user: users[i].id });
    //             await strapi.services.wallet.delete({ user: users[i].id });
    //             await strapi.query('user', 'users-permissions').delete({ id: users[i].id });
    //         }


    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
};
