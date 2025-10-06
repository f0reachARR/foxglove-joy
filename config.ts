module.exports = {
  webpack: (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes("css")),
    );
    config.module.rules.push({
      test: /\.css$/i,
      use: ["css-loader?modules=local"],
    });
    return config;
  },
};
