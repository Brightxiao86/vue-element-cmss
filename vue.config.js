// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
    devServer: {
      port: 8890,
      proxy: {
        // 代理，转发
        '/api': {
          target: 'http://localhost:9999',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
  