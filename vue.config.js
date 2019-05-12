const path = require('path')
const resolve = dir => path.join(__dirname,dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin':'/'

module.exports = {
    lintOnSave: false,
    baseUrl: BASE_URL,
    chainWebpack:config =>{
        config.resolve.alias
        .set('@',resolve('src'))    // 用 @ 符号来替代 src 这个路径
        .set('_c',resolve('src/components'))        // 用 _c 来替代 src/components这个目录
    },
    productionSourceMap:false,       // 打包时不生成 .map文件，减少打包的体积同时加快打包速度
    devServer:{         // 跨域配置，告诉开发服务器将任何没有匹配到静态文件的请求都代理到proxy指定的URL
        proxy:'http://localhost:8000'
    }
}
