module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UENP"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UENP")),
          database: env("DATABASE_DB_UENP"),
          username: env("DATABASE_USERNAME_UENP"),
          password: env("DATABASE_PASSWORD_UENP"),
        },
        options: {
          ssl: true,
          insecureAuth: true,
          pool: {
            min: 2,
            max: 10,
            idleTimeoutMillis: 30000,
            createTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000,
          },
        },
      },
    },
  };
};
