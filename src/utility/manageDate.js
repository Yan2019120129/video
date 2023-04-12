import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token")


// 获取本地缓存数据
export function getLocal(key) {
    let video = localStorage.getItem(key)
    video = JSON.parse(video)
    return video;
}

// 放置数据到本地缓存
export function setLocal(key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

// 清除本地缓存指定的键
export function clearLocal(key) {
    localStorage.removeItem(key)
}

// 获取本地缓存数据
export function getVideo(key) {
    let video = localStorage.getItem(key)
    video = JSON.parse(video)
    return video;
}

// 放置数据到本地缓存
export function setVideo(key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

// 清除本地缓存指定的键
export function clearVideo(key) {
    localStorage.removeItem(key)
}



// 获取token
export function getToken() {
    return token;
}

// 放置token
export function setToken(value) {
    localStorage.setItem("token", value)
}

// 清除token
export function clearToken() {
    localStorage.removeItem("token")
}

// 获取解析token其中一个信息
export function getTokenValue(key) {
    if (getToken()) { // 如果token不为空则进入
        let tokenArray = jwtDecode(token)["userIdOrPhone"][0]  // 解析token
        for (let i in tokenArray) {
            if (i === key) {
                return tokenArray[i]
            }
        }
    }
}

// 获取全部的解析信息
export function getTokenAll() {
    return jwtDecode(token)['userIdOrPhone'][0]  // 解析token

}