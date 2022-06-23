/**
 * antd主题色
 * 安装@craco/craco、craco-less
 * 新建craco.config.js写入配置
 * index.js中 import 'antd/dist/antd.less'
 */

/**
 * 配置路径别名
 * @type {{overrideWebpackConfig: function({context?: *, webpackConfig: *, pluginOptions?: *}): *, pathSep: string}|{overrideWebpackConfig?: function({context?: *, webpackConfig: *, pluginOptions?: *}): *, pathSep?: string}}
 */
const path = require("path")
const CracoLessPlugin = require('craco-less');

module.exports = {
  // plugins: [
  //   {
  //     plugin: CracoLessPlugin,
  //     options: {
  //       lessLoaderOptions: {
  //         lessOptions: {
  //           //修改主题色
  //           modifyVars: { '@primary-color': '#1DA57A' },
  //           javascriptEnabled: true,
  //         },
  //       },
  //     },
  //   },
  // ],
  webpack:{
    alias:{
      "@": path.resolve(__dirname,"src"),
    }
  }
};