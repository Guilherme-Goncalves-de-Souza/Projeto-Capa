'use strict';

const config = () => { return strapi.plugins.deeplink.config }
const { sanitizeEntity } = require('strapi-utils');
const reader = require('any-text');

const fs = require('fs');
const http = require('http');
const https = require('https');
const os = require('os');
const path = require('path');

const downloadFile = (url) => {
  return new Promise((resolve, reject) => {
    console.log('start download');
    const driver = url?.indexOf("https://") !== -1 ? https : http;
    const tempFilePath = path.join(os.tmpdir(), `uploaded-${(new Date()).getTime()}.pdf`);

    driver.get(url, (res) => {
      const filePath = fs.createWriteStream(tempFilePath);
      res.pipe(filePath);
      filePath.on('finish', () => {
        filePath.close();
        console.log('Download Completed');
        resolve(tempFilePath);
      });
      filePath.on('error', (err) => {
        fs.unlink(tempFilePath, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const anyText = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = await downloadFile(url);
      reader.getText(path).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  read: async (ctx) => {
    const { params: params, state: { user: user }, request: { body: body, query: query, header} } = ctx;

    const result = body.url ? await anyText(body.url) : null;
    const register = await strapi.query("article").update({ id: body.id }, { text: result });

    return ctx.send({
      ...register
    });
  }
};
