import Axios from "./axios" // 导入配置好的axios文件

// 封装axios请求函数，并用export导出
export function getQRCode(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/createQrCode",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function getVideo(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/findAllVideo",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function userLogin(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/login",
        method: "post",
        headers: {
            'Content-Type': 'application/json', //设置请求头请求格式为json
        },
        data: datas
    })
}

export function verifyToken(datas) {
    return Axios({
        url: "/nacos-video-gateway/verifyToken", method: "post", headers: {
            'Content-Type': 'application/json', //设置请求头请求格式为json
        },
        data: datas
    })
}

export function javaUpload(data) {
    return Axios({
        url: "/nacos-video-upload/upload/uploading",
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
        },
        data: data,
        // onUploadProgress: (progressEvent) => { // 获取上传的进度
        //     let processState = (((progressEvent.loaded / progressEvent.total) * 100) | 0)
        //     console.log(processState)
        // }
    },)
}
