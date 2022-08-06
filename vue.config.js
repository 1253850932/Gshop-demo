const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
	  AutoImport({
		resolvers: [ElementPlusResolver()],
	  }),
	  Components({
		resolvers: [ElementPlusResolver()],
	  }),
    ],
  },

  
	devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/api': ''//重写,
                }
            }
        }
    }
  
})
