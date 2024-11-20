module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6b715318bf721885cbea74047882c5a7'),
    },
  },
  cron: {
    enabled: true,
  },

});
