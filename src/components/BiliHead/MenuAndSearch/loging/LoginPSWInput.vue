<template>
    <div class="LoginPSWInput">
        <form action="" class="login_form">
            <div class="login_form_id">
                账号<input type="text" v-model="userPhoneOrId" maxlength="">
            </div>
            <div class="login_form_hr"></div>
            <div class="login_form_psw">
                密码<input type="password" v-model="userMessage.userPassword" placeholder="请输入密码">
                <transition name="fade">
                    <p class="errorMessage" v-show="ifErrorMessage">{{ errorMessageStyle }}</p>
                </transition>
                <a href="">忘记密码</a>
            </div>
        </form>

        <div class="login_form_button">
            <el-button plain @click="register">注册</el-button>
            <el-button type="primary"
                       @click="login">登录
            </el-button>
        </div>
    </div>

</template>
<script>

import {mapActions, mapMutations, mapState} from "vuex";
import {userLogin} from "@/api";
import {getTokenValue} from "@/utility/manageDate";
import {hintLoginE, hintLoginS} from "@/utility/messageHint";

export default {
    name: 'LoginPSWInput',
    data() {
        return {
            isShowPwd:true,
            activeName: 'second',
            errorMessageStyle: "",
            ifErrorMessage: false,
            userPhoneOrId: "yan_goodBoy",
            userMessage: {
                userName: '',
                userPhone: '',
                userPassword: "unlock"
            },
        };
    },
    // 监视属性
    watch: {},
    // 方法
    methods: {
        ...mapMutations("layoutAbout", {ifLoginInterface: "ifLoginInterface"}),
        ...mapMutations("loginAbout", {ifLogin: "ifLogin"}),
        ...mapActions("loginAbout", {aPlaceToken: "aPlaceToken", aAnalysisToke: "aAnalysisToke"}),
        ...mapState("loginAbout", ["analysisToken"]),
        register() {
            console.log(2222)
            this.$emit("register")
        },

        ifPhoneOrId(value) {
            const regex = new RegExp(/^[0-9]*$/);
            /**
             :代表正则表达式的开始。
             $代表正则表达式的结尾。
             *表示匹配0-无穷大。/^[0-9]{11}$/
             []代表or。以上是vue.js如何判断输入是否为数字的细节。更多。
             * */
            // 如果满足是数值进入
            if (regex.test(value)) {
                // 如果手机手机号是11位则进入
                if (value.length == 11) {
                    // 说明是手机号码将值赋值给手机号码
                    this.userMessage.userPhone = value
                    console.log("是11位手机号码")
                    return true;
                } else {
                    // 不符合11位的手机号码则提示用户
                    // this.$alert("请输入11为号码")
                    this.errorMessageStyle = "请输入11为号码"
                    this.ifErrorMessage = true
                    setTimeout(() => {
                        this.ifErrorMessage = false
                    }, 1500)
                    return false;
                }
            } else {
                // 非数值则赋值为id
                this.userMessage.userName = value
                console.log("是id")
                return true;
            }
        },
        login() {
            console.log("进入登录,开始判断输入是否符合规范")
            if (this.ifPhoneOrId(this.userPhoneOrId)) {
                console.log("输入符合规范，开始发送请求", this.userPhoneOrId)
                userLogin(this.userMessage).then(
                    response => {
                        if (response.data.state) {
                            hintLoginS()
                            console.log("关闭登录界面")
                            this.ifLoginInterface(false)
                            console.log("返回的数据", response.data)
                            console.log("将token放入浏览器本地缓存")
                            localStorage.setItem("token", response.data.token)
                            console.log("将token放入vuex")
                            this.aPlaceToken(response.data.token)
                            console.log("将token放入vuex中解析")
                            this.aAnalysisToke(response.data.token)
                            console.log("将登录成功的状态放入vuex里")
                            this.ifLogin(true)
                            location.reload() // 重新加载页面 否则会出现token不能实时更新，不能准确的判断登录状态的问题
                        } else {
                            // this.$message.error(response.data.msg);
                            hintLoginE()
                        }
                    }, error => {
                        console.log("请求失败", error.message)
                        hintLoginE()
                    }
                )
                const fromData = new FormData()
                let userId = getTokenValue("userId")
                console.log("token", userId)
                fromData.append("userId", userId)
            } else {
                console.log("输入不符合规范，未发送请求")
                return
            }
        },
    }
};
</script>
<style scoped>
.login_right p {
    text-align: center;
}

.login_right p span {
    margin: 0 10px 0 10px;
}

.login_form {
    display: flex;
    flex-direction: column;
    margin: 0 50px 0 50px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    font-size: 13px;
}


.login_form_id {
    margin: 0 0 0 20px;
}


.login_form_id input {
    border-width: 0;
    outline: none;
    background: none;
    height: 45px;
    width: 200px;
    margin-left: 20px;
}

.login_form_psw {
    margin: 0 0 0 20px;
}

.icon {
    vertical-align: middle;
    margin-right: 10px;
}

.icon:hover path {
    fill: #66b1ff;
}

.login_form_psw input {
    border-width: 0;
    outline: none;
    background: none;
    border-radius: 5px;
    height: 30px;
    width: 200px;
    margin: 5px 10px 5px 20px;
}

.login_form_hr {
    border-top: 1px solid #bdbdbd;
}

.login_form_button {
    margin-top: 20px;
    text-align: center;
}

.login_form_button button {
    width: 150px;
    border-radius: 5px;
}

.login_other_login p:first-child {
    color: #a4a4a4;
}

.login_bottom p {
    text-align: center;
    font-size: 13px;
}

.fade-enter-active {
    transition: all .3s ease;
}

.fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */
{
    transform: translateY(-11px);
    opacity: 0
}

.errorMessage {
    position: absolute;
    margin-top: 10px;
    background: rgba(0, 0, 0, 90%);
    color: white;
    padding: 11px;
    border-radius: 5px;
    vertical-align: middle;
}

</style>