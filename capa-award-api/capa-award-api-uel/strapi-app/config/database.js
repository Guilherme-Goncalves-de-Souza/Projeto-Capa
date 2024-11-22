module.exports = ({ env }) => {
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
            max: 5,
            idleTimeoutMillis: 30000,
            createTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000,
          },
        },
      },
    },
  };
};
