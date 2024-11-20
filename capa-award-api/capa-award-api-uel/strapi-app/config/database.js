module.exports = ({ env }) => {
  // Logando as variáveis de ambiente
  console.log("DATABASE_HOST_UEL:", env("DATABASE_HOST_UEL"));
  console.log("DATABASE_PORT_UEL:", env("DATABASE_PORT_UEL"));
  console.log("DATABASE_DB_UEL:", env("DATABASE_DB_UEL"));
  console.log("DATABASE_USERNAME_UEL:", env("DATABASE_USERNAME_UEL"));
  console.log("DATABASE_PASSWORD_UEL:", env("DATABASE_PASSWORD_UEL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UEL"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UEL")),
          database: env("DATABASE_DB_UEL"),
          username: env("DATABASE_USERNAME_UEL"),
          password: env("DATABASE_PASSWORD_UEL"),
        },
        options: {
          ssl: true,
          insecureAuth: true,
          pool: {
            min: 2,
            max: 20,
            idleTimeoutMillis: 60000,
            createTimeoutMillis: 60000,
            acquireTimeoutMillis: 60000,
          },
        },
      },
    },
  };
};
