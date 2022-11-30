import {Message} from "element-ui";
import {verifyToken} from "@/api";
import store from "@/store";

export function hintLogin() {
    Message({
        message: '请先登录！！！',
        type: 'warning'
    });
}

export function verify(data) {
    return verifyToken(data).then(
        req => {
            if (!req.data.state) {
                store.dispatch("loginAbout/aIfLogin", false).then()// 设置登录状态为未登录
                localStorage.setItem("token", "")
                hintLogin() // 提示登录信息
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
