module.exports = {
  async getHomepageData(ctx) {
    try {
      const articleCount = await strapi.query("articles").count();

      const edictCount = await strapi.query("edicts").count();

      const users = await strapi.query("user", "users-permissions").find();
      const userCounts = users.reduce((acc, user) => {
        const role = user.role.name;
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, {});

      ctx.send({
        articleCount,
        edictCount,
        userCounts,
      });
    } catch (error) {
      ctx.send({ error: "Erro ao buscar dados internos" }, 500);
    }
  },
};
