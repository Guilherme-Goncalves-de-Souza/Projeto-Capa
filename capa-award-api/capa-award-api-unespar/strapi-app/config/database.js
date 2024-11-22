module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UNESPAR"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UNESPAR")),
          database: env("DATABASE_DB_UNESPAR"),
          username: env("DATABASE_USERNAME_UNESPAR"),
          password: env("DATABASE_PASSWORD_UNESPAR"),
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
