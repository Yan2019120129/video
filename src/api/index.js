import Axios from "./axios"

// 封装axios请求函数，并用export导出
export function getQRCode(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/createQrCode",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function addUser(datas) {
    return Axios({
        method: "post",
        url: "/nacos-video-admin/admin/save",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas,
        // data: {
        //     userPhone: this.userPhone,
        //     userPassword: this.userPassword
        // }
    })
}

// 用户登录
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

// 用户登录
export function getUser(datas) {
    return Axios({
        url: "/nacos-video-admin/admin/findOneById",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
        },
        data: datas
    })
}

export function verifyToken(datas) {
    return Axios({
        url: "/nacos-video-gateway/verifyToken", method: "post",
        headers: {
            'Content-Type': 'application/json', //设置请求头请求格式为json
            "token": datas
        },
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
