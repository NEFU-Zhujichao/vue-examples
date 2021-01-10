module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      "/api/": {
        // 目标 API 地址
        target: "http://localhost:8080",
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  },
  publicPath: "./",
  productionSourceMap: false
};
