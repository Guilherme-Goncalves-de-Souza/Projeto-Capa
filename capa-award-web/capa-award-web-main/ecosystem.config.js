module.exports = {
  apps: [
    {
      name: "capaawards",
      script: "npm",
      args: "start",
      cwd: "/var/www/Projeto-Capa/capa-award-web/capa-award-web-main",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
