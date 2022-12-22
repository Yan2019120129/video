import {Message} from "element-ui";
import {verifyToken} from "@/api";
import store from "@/store";

export function hintLogin() {
    Message({
        message: '请先登录！！！',
        type: 'warning'
    });
}
export function hintUploadUploading() {
    Message({
        message: '开始上传！！！',
        type: 'success'
    });
}
export function hintUploadSucceed() {
    Message({
        message: '上传成功！！！',
        type: 'success'
    });
}
export function hintUploadFail() {
    Message.error('上传失败！！！');
}

export function verify(data) {
    if (!data) {
        console.log("isData",data);
        hintLogin() // 提示登录信息
        return false;
    }
    return verifyToken(data).then(
        req => {
            if (!req.data.state) {
                store.dispatch("loginAbout/aIfLogin", false).then()// 设置登录状态为未登录
                localStorage.setItem("token", "")
                hintLogin() // 提示登录信息
                return false;
            }
            console.log("返回信息", req.data);
            return true;

        },
        error => {
            store.dispatch("loginAbout/aIfLogin", false).then(); // 设置登录状态为未登录
            console.log("返回信息", error.response.data);
            console.log("没有权限");
            localStorage.setItem("token", "")
            hintLogin()
            return false;
        }
    );

}
