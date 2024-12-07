module.exports = {
  apps: [
    {
      name: "middleware",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/middleware",
      env: {
        NODE_ENV: "production",
        PORT: 5173
      },
    },
    {
      name: "capa-award-api-master",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-master/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1337,
      },
    },
    {
      name: "capa-award-api-uel",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-uel/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1338,
      },
    },
    {
      name: "capa-award-api-uem",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-uem/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1339,
      },
    },
    {
      name: "capa-award-api-uenp",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-uenp/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1344,
      },
    },
    {
      name: "capa-award-api-uepg",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-uepg/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1341,
      },
    },
    {
      name: "capa-award-api-ufpr",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-ufpr/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1340,
      },
    },
    {
      name: "capa-award-api-unespar",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-unespar/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1345,
      },
    },
    {
        name: "capa-award-api-unicentro",
        script: "npm",
        args: "start",
        cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-unicentro/strapi-app",
        env: {
            NODE_ENV: "production",
            HOST: "0.0.0.0",
            PORT: 1343,
        },
    },
    {
      name: "capa-award-api-unioeste",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-api/capa-award-api-unioeste/strapi-app",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1342,
      },
    },
  ],
};
