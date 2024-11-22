module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UNIOESTE"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UNIOESTE")),
          database: env("DATABASE_DB_UNIOESTE"),
          username: env("DATABASE_USERNAME_UNIOESTE"),
          password: env("DATABASE_PASSWORD_UNIOESTE"),
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
