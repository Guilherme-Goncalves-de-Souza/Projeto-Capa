module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UEPG"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UEPG")),
          database: env("DATABASE_DB_UEPG"),
          username: env("DATABASE_USERNAME_UEPG"),
          password: env("DATABASE_PASSWORD_UEPG"),
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
