module.exports = {
  routes: [
    {
      method: "GET",
      path: "/homepage-data",
      handler: "customController.getHomepageData",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
