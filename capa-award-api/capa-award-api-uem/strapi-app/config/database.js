module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        host: env("DATABASE_HOST_UEM"),
        client: "mysql",
        port: parseInt(env("DATABASE_PORT_UEM")),
        database: env("DATABASE_DB_UEM"),
        username: env("DATABASE_USERNAME_UEM"),
        password: env("DATABASE_PASSWORD_UEM"),
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

