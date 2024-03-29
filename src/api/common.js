import Axios from "./axios"
import qs from "qs";

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
        url: "/nacos-video-system/system/findSubareaAll",
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


// 获取用户评论数据
export function getUserRemark(datas) {
    return Axios({
        url: "/nacos-video-system/system/findAllRemarkByVideoId",
        method: "get",
        params: datas
    })
}

// 添加用户评论数据
export function addRemark(datas) {
    return Axios({
        url: "/nacos-video-system/system/insertUserRemark",
        method: "post",
        data: datas
    })
}

// 根据关键字查找类似的视频资源。
export function getLikeVideo(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/findLikeVideoByName",
        method: "get",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        params: datas
    })
}

// 获取视频分页数据
export function getVideoPage(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/findVideoPage",
        method: "get",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        params: datas
    })
}
// 获取随机分类视频分页数据
export function getRandomFindVideoPage(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/randomFindVideoPage",
        method: "get",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        params: datas
    })
}

// 获取推广内容
export function getPopularizeVideoPage(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/randomFindPopularizeVideoPage",
        method: "get",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        params: datas
    })
}
// 获取主分区推荐内容
export function getRandomMainFindVideoPage(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/randomMainFindVideoPage",
        method: "get",
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        params: datas
    })
}

// 获取视频相关信息
export function getVideoCorrelation(datas) {
    return Axios({
        url: "/nacos-video-system/system/videoCorrelation",
        method: "get",
        params: datas
    })
}

// 获取用户收藏的视频信息
export function getVideoLike(datas) {
    return Axios({
        url: "/nacos-video-system/system/findUserLikeById",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            // 'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'application/json' //设置请求头请求格式为json
            'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
        },
        data: datas
    })
}

// 获取用户上传的所有视频
export function getVideoMy(datas) {
    return Axios({
        url: "/nacos-video-upload/upload/findUserVideosById",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            // 'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'application/json' //设置请求头请求格式为json
            'Content-Type': 'multipart/form-data' // 修改发送的类型一定要是form-data类型否则后端接收不成功
        },
        data: datas
    })
}

// 获取互动信息，对点赞，收藏，分享，投币做添加修改处理
export function videoInteraction(datas, interactPath) {

    return Axios({
        url: `/nacos-video-system/system/${interactPath}`,
        method: "get",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}

//  获取互动信息，对点赞，收藏，分享，投币做添加修改处理
export function findAllInteract(datas) {
    console.log("findAllInteract数据", datas)
    return Axios({
        url: "/nacos-video-system/system/findAllInteract",
        method: "post",
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data: datas
    })
}





