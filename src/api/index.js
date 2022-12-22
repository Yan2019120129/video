import Axios from "./axios"

// 生成二维码
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


// 用户注册
export function addUser(datas) {
    return Axios({
        method: "post",
        url: "/nacos-video-admin/admin/registerUser",
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

// 通过id查找指定用户信息
export function getUserMessage(datas) {
    console.log("发送的数据", datas)
    return Axios({
        url: "/nacos-video-admin/admin/findUserMessageById",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
        },
        data: datas
    })
}

// 上传用户的头像
export function setUserHeadImg(datas) {
    console.log("发送的数据", datas)
    return Axios({
        url: "/nacos-video-admin/admin/saveUserHeadImg",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
        },
        data: datas
    })
}

// 保存和修改用户信息
export function saveUserMessage(datas) {
    console.log("发送的数据", datas)
    return Axios({
        url: "/nacos-video-admin/admin/saveUserMessage",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            // 'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
            'Content-Type': 'application/json', //设置请求头请求格式为json
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

// 用户上传视频文件
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

