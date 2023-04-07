module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, //关闭语法检查
    devServer: {
        port: 8081,
        proxy: {
            '/api': { // 这个api要与 axios1.js 文件中的 baseURL 值对应
                target: 'http://localhost:9527', // 你第二个接口的域名
                ChangeOrRight: true,
                pathRewrite: {
                    '^/api': ''
                },
                ws: false, //用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
            //图片的代理地址
            '/pav': { // 这个api要与 axios1.js 文件中的 baseURL 值对应
                target: 'http://localhost:2091', // 你第二个接口的域名
                ChangeOrRight: true,
                pathRewrite: {
                    '^/pav': ''
                },
                changeOrigin: true, //用于控制请求头中的host值
                ws: false, //用于支持websocket
            },
            // 图片的代理地址
            // '/pav': { // 这个api要与 axios1.js 文件中的 baseURL 值对应
            //     target: 'http://47.115.223.62:8080/pav', // 你第二个接口的域名
            //     ChangeOrRight: true,
            //     pathRewrite: {
            //         '^/pav': ''
            //     },
            //     changeOrigin: true, //用于控制请求头中的host值
            //     ws: false, //用于支持websocket
            // },
        }
    }
}