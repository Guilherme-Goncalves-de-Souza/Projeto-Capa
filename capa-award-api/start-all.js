const concurrently = require("concurrently");
const { spawn } = require("child_process");

const runCommand = (command, args = [], options = {}, waitForExit = true) => {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, options);

    process.stdout.on("data", (data) => {
      console.log(`[${command}] ${data}`);
    });

    process.stderr.on("data", (data) => {
      console.error(`[${command} ERROR] ${data}`);
    });

    // Se `waitForExit` for falso, resolve imediatamente e deixa o processo rodando em segundo plano
    if (!waitForExit) {
      resolve();
      return;
    }

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
};

(async () => {
  try {
    console.log("Switching to the latest Node.js version...");
    await runCommand("bash", ["-c", "source ~/.nvm/nvm.sh && nvm use node"]);

    console.log("Starting middleware...");
    await runCommand("npm", ["run", "dev"], { cwd: "middleware" }, false); // Não espera o middleware terminar

    console.log("Switching to Node.js version 14...");
    await runCommand("bash", ["-c", "source ~/.nvm/nvm.sh && nvm use 14"]);

    console.log("Starting Strapi apps...");
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
