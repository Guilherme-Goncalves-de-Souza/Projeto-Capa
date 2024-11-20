module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        host: env("DATABASE_HOST_UFPR"),
        client: "mysql",
        port: parseInt(env("DATABASE_PORT_UFPR")),
        database: env("DATABASE_DB_UFPR"),
        username: env("DATABASE_USERNAME_UFPR"),
        password: env("DATABASE_PASSWORD_UFPR"),
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
  },
});

