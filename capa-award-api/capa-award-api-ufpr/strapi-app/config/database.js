module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        host: env("DATABASE_HOST"),
        client: "mysql",
        port: parseInt(env("DATABASE_PORT")),
        database: env("DATABASE_DB"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      options: {
        ssl: true,
        insecureAuth: true,
        pool: {
          min: 2,
          max: 20,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
    unicamp: {
      connector: "bookshelf",
      settings: {
        host: env("DATABASE_HOST_UNICAMP"),
        client: "mysql",
        port: parseInt(env("DATABASE_PORT_UNICAMP")),
        database: env("DATABASE_DB_UNICAMP"),
        username: env("DATABASE_USERNAME_UNICAMP"),
        password: env("DATABASE_PASSWORD_UNICAMP"),
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
});

