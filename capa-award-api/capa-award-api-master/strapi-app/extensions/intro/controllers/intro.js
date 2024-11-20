module.exports = {
  async index(ctx) {
    const institutions = [
      {
        name: "UFPR - Universidade Federal do Paraná",
        url: "http://localhost:1340/admin/auth/login",
      },
      {
        name: "UEM - Universidade Estadual de Maringá",
        url: "http://localhost:1339/admin/auth/login",
      },
      {
        name: "UEL  - Universidade Estadual de Londrina",
        url: "http://localhost:1338/admin/auth/login",
      },
      { name: "Painel Padrão", url: "http://localhost:1337/admin/auth/login" },
    ];

    ctx.send({
      message: "Selecione a instituição para acessar o painel:",
      institutions,
    });
  },
};
