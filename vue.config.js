const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 生产环境配置
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   // 代码分割优化
    //   config.optimization = {
    //     ...config.optimization,
    //     splitChunks: {
    //       chunks: 'all',
    //       cacheGroups: {
    //         // 第三方库单独打包
    //         vendor: {
    //           test: /[\\/]node_modules[\\/]/,
    //           name: 'vendors',
    //           chunks: 'all',
    //           priority: 10
    //         },
    //         // Element Plus 单独打包
    //         elementPlus: {
    //           test: /[\\/]node_modules[\\/]element-plus[\\/]/,
    //           name: 'element-plus',
    //           chunks: 'all',
    //           priority: 20
    //         },
    //         // Vue 相关库单独打包
    //         vue: {
    //           test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
    //           name: 'vue-libs',
    //           chunks: 'all',
    //           priority: 15
    //         }
    //       }
    //     }
    //   }
    // }
  },

  // CSS 优化
  css: {
    extract: process.env.NODE_ENV === 'production' ? {
      ignoreOrder: true
    } : false
  },

  // 开发服务器配置
  devServer: {
    port: 8082,
    open: true,
    host: '0.0.0.0'
  },

  // 构建输出目录
  outputDir: 'dist',
  
  // 静态资源目录
  assetsDir: 'static',
  
  // 生产环境不生成 source map
  productionSourceMap: false,
  
  // 公共路径
  publicPath: './'
})
