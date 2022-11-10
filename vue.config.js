module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, //关闭语法检查
    devServer: {
        proxy: {
            '/api': { // 这个api要与 axios1.js 文件中的 baseURL 值对应
                target: 'http://localhost:2090', // 你第二个接口的域名
                ChangeOrRight: true,
                pathRewrite: {
                    '^/api': ''
                },
                ws: true, //用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
        }
    }
}