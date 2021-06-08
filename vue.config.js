module.exports = {
  productionSourceMap: false, // 设置上线后是否加载webpack文件，不需要生产环境的 source map
  outputDir: './output/client',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
