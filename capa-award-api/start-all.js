const concurrently = require("concurrently");
const { exec } = require("child_process");

(async () => {
  try {
    await new Promise((resolve, reject) => {
      exec("nvm use node", (err, stdout, stderr) => {
        if (err) {
          console.error(`Error switching to latest Node.js version: ${stderr}`);
          return reject(err);
        }
        console.log(`Switched to latest Node.js version: ${stdout}`);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      exec("npm run dev", { cwd: "middleware" }, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error running middleware: ${stderr}`);
          return reject(err);
        }
        console.log(`Middleware output: ${stdout}`);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      exec("nvm use 14", (err, stdout, stderr) => {
        if (err) {
          console.error(`Error switching to Node.js version 14: ${stderr}`);
          return reject(err);
        }
        console.log(`Switched to Node.js version 14: ${stdout}`);
        resolve();
      });
    });

    await concurrently(
      [
        {
          command: "npm run develop",
          cwd: "capa-award-api-master/strapi-app",
          name: "master",
          prefixColor: "blue",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-uel/strapi-app",
          name: "uel",
          prefixColor: "green",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-uem/strapi-app",
          name: "uem",
          prefixColor: "yellow",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-ufpr/strapi-app",
          name: "ufpr",
          prefixColor: "cyan",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-unespar/strapi-app",
          name: "unespar",
          prefixColor: "red",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-uenp/strapi-app",
          name: "uenp",
          prefixColor: "orange",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-uepg/strapi-app",
          name: "uepg",
          prefixColor: "purple",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-unicentro/strapi-app",
          name: "unicentro",
          prefixColor: "brown",
        },
        {
          command: "npm run develop",
          cwd: "capa-award-api-unioeste/strapi-app",
          name: "unioeste",
          prefixColor: "pink",
        },
      ],
      {
        killOthers: ["failure", "success"],
        prefix: "name",
        restartTries: 3,
      }
    );
  } catch (err) {
    console.error("Erro ao executar os servidores:", err.message);
    process.exit(1);
  }
})();