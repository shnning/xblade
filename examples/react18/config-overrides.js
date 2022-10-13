module.exports = {
  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      return {
        ...config,
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      };
    };
  },
};
