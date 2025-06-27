module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        http: require.resolve("stream-http"), // Use false if not needed
      };
      return config;
    },
  };
  