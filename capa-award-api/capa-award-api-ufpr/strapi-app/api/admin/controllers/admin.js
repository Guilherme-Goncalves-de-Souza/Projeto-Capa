module.exports = {
  async homepageData(ctx) {
    try {
      const users = await strapi
        .query("plugin::users-permissions.user")
        .findMany();
      const userCounts = users.reduce((acc, user) => {
        const accessLevel = user.access_level || "Desconhecido";
        acc[accessLevel] = (acc[accessLevel] || 0) + 1;
        return acc;
      }, {});

      const articleCount = await strapi.query("api::article.article").count();

      const edictCount = await strapi.query("api::edict.edict").count();

      ctx.send({ userCounts, articleCount, edictCount });
    } catch (error) {
      console.error("Erro ao carregar dados do painel:", error);
      ctx.throw(500, "Erro interno do servidor");
    }
  },
};
