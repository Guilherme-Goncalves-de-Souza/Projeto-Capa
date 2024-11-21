const concurrently = require("concurrently");

(async () => {
  try {
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
        { command: "npm run dev", cwd: "middleware", name: "middleware", prefixColor: "magenta" },
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