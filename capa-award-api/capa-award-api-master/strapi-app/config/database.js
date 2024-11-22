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
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
