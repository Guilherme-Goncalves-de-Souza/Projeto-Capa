module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          host: env("DATABASE_HOST_UNICENTRO"),
          client: "mysql",
          port: parseInt(env("DATABASE_PORT_UNICENTRO")),
          database: env("DATABASE_DB_UNICENTRO"),
          username: env("DATABASE_USERNAME_UNICENTRO"),
          password: env("DATABASE_PASSWORD_UNICENTRO"),
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
  };
};
