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
