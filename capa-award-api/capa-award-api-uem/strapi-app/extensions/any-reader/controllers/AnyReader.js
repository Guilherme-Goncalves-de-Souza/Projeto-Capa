'use strict'; 

const config = () => { return strapi.plugins.deeplink.config }
const { sanitizeEntity } = require('strapi-utils'); 
const reader = require('any-text');

const fs = require('fs');
const http = require('http');
const https = require('https');

const downloadFile = (url) => {
  return new Promise((resolve) => {
    console.log('start download')
    const driver = url?.indexOf("https://") !== -1 ? https : http
    driver.get(url,(res) => {
        const path = `${__dirname}/uploaded-${ (new Date()).getTime() }.pdf`; 
        const filePath = fs.createWriteStream(path);
        res.pipe(filePath);
        filePath.on('finish',() => {
            filePath.close();
            console.log('Download Completed'); 
            resolve(path)
        })
    })
  })
} 


const anyText = url => {
    return new Promise(async resolve => {
        const path = await downloadFile(url)
        reader.getText(path).then((data) => {
            resolve(data);
        });
    })
}

module.exports = { 
    read: async (ctx) => {
        const { params: params, state: { user: user }, request: { body: body, query: query, header} } = ctx;

        // const register = await strapi.query('user', 'users-permissions').findOne({ id: user.id });
        // track ?
        
        const result = body.url ? await anyText(body.url) : null
        const register = await strapi.query("article").update({ id: body.id },{ text: result });

        return ctx.send({ 
            ...register
        });
    }
};
