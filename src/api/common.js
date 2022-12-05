import Axios from "./axios"

//获取大小分类
export function getClassification(datas) {
    return Axios({
        url: "/nacos-video-system/system/findSubareaAll",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取大分类
export function getSubarea(datas) {
    return Axios({
        url: "/nacos-video-system/system/findSubarea",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

//点赞数量
export function getLike(datas, state) {
    let path = null
    if (state) {
        path = "insertUserPraise"
    } else {
        path = "deleteUserPraise"
    }
    return Axios({
        url: `/nacos-video-system/system/${path}`,
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 投币数量数据
export function getCoins(datas, state) {
    let path = null
    if (state) {
        path = "insertUserCoin"
    } else {
        path = "deleteUserCoin"
    }
    return Axios({
        url: `/nacos-video-system/system/${path}`,
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取收藏数据
export function getCollect(datas, state) {
    let path = null
    if (state) {
        path = "insertUserLike"
    } else {
        path = "deleteUserLike"
    }
    return Axios({
        url: `/nacos-video-system/system/${path}`,
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取分享数据
export function getShare(datas, state) {
    let path = null
    if (state) {
        path = "insertUserShare"
    } else {
        path = "deleteUserShare"
    }
    return Axios({
        url: `/nacos-video-system/system/${path}`,
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}


// 获取ToPromoteHead模块数据
export function getVideoMain(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/resource",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取扩展模块数据
export function getVideoExtension(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/resource1",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取国创模块数据
export function getVideoAimtron(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/resource2",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取竞赛模块数据
export function getVideoCompetition(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/resource3",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

// 获取直播模块数据
export function getVideoLiveStreaming(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/resource4",
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

export function getVideoCorrelation(datas){
    console.log("数据",datas)
    return Axios({
        url: "/nacos-video-system/system/videoCorrelation",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}