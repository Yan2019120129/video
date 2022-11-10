import Axios from "./axios" // 导入配置好的axios文件
// 封装axios请求函数，并用export导出
export function getQRCode(datas) {
    return Axios({
        url: "/user/create",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function getIDate(datas) {
    return Axios({
        url: "/api/getIDate",
        method: "post",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function getDateInfo(datas) {
    return Axios({
        url: "/api/getDateInfo" + datas,
        method: "get",
    })
}