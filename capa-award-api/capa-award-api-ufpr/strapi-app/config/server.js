module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  cron: {
    enabled: true,
  },

});
