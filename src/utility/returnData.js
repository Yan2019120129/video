import moment from "moment/moment";

export function jsonTransformForm(data) {
    let formData = new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key])
    })
    return formData;
}

export function getDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss')
}

export function getDateFormat(fromat) {
    return moment().format(fromat)
}

export function getDateTransitionMinutesSeconds(data) {
// 将时间戳转换为秒
    let seconds = Math.floor(data / 1000);

// 分钟数
    let minutes = Math.floor(seconds / 60);

// 秒数
    let remainingSeconds = seconds % 60;

// 格式化分钟数和秒数，不够两位数的在左侧补零
    return minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0')
}