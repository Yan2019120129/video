import {Message} from "element-ui";

export function hintLogin(){
    Message({
        message: '请先登录！！！',
        type: 'warning'
    });
}