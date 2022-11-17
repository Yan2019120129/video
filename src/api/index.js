import Axios from "./axios" // 导入配置好的axios文件

// 封装axios请求函数，并用export导出
export function getQRCode(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/createQrCode", method: "post", headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        }, data: datas
    })
}

export function userLogin(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/login", method: "post", headers: {
            'Content-Type': 'application/json', //设置请求头请求格式为json
        }, data: datas
    })
}

export function javaUpload(data) {
    // 'Content-Type': 'multipart/form-data'
    console.log("发送的数据", data)
    return Axios({
        url: "/nacos-video-upload/upload/testUploading",
        method: "post",
        transformRequest: [function(data, headers) {
            // 去除post请求默认的Content-Type
            delete headers.post['Content-Type']
            return data
        }],
        data: data
    },)
}