<template>
  <div class="Login_background">
    <div class="Login">
      <!--      关闭按钮-->
      <svg @click="closeLogin" t="1667148163455" class="icon" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="3271" width="15" height="15">
        <path
            d="M952.311261 921.328619 542.892591 510.919389 950.154131 102.671381c8.53028-8.55177 8.53028-22.416546 0-30.967292-8.532327-8.55177-22.360264-8.55177-30.892591 0l-407.262564 408.248008L104.737436 71.704089c-8.53028-8.55177-22.36231-8.55177-30.892591 0-8.529257 8.55177-8.529257 22.416546 0 30.967292l407.262564 408.248008L71.687716 921.328619c-8.529257 8.55177-8.529257 22.416546 0 30.967292 4.26514 4.27435 9.856485 6.41306 15.446807 6.41306 5.590322 0 11.181667-2.13871 15.446807-6.41306l409.41867-410.409231 409.41867 410.409231c4.266164 4.27435 9.855462 6.41306 15.446807 6.41306 5.591345 0 11.17962-2.13871 15.446807-6.41306C960.841541 943.745165 960.841541 929.879366 952.311261 921.328619z"
            p-id="3272"></path>
      </svg>
      <div class="login_popout">
        <div class="login_left">
          <p>扫描二维码登录</p>
          <img :src="QRCode.url" alt="二维码">
        </div>
        <div class="login_middle_hr"></div>
        <div class="login_right">
          <p>
            <span style="color:#409eff" ref="login_right_psw_login" @click="toShow(true)">密码登录</span>
            <el-divider direction="vertical"></el-divider>
            <span ref="login_right_note_login" @click="toShow(false)">短信登录</span>
          </p>
          <!--          短信登录和密码登录切换区域-->
          <loginPSWInput @register="register" v-if="ifShow"></loginPSWInput>
          <loginNoteInput v-if="!ifShow"></loginNoteInput>

          <div class="login_other_login">
            <p>其他登录方式</p>
            <p class="login_other_login_p">
              <img src="@/assets/img/login/weixin.png" alt="">
              <span>微信登录</span>
              <img src="@/assets/img/login/weibo.png" alt="">
              <span>微博登录</span>
              <img src="@/assets/img/login/qq.png" alt="">
              <span>qq登录</span>
            </p>
          </div>
        </div>
      </div>

      <div class="login_bottom">
        <p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
        <p>登录或完成注册即代表你同意 <a href=""> 用户协议 </a>和 <a href=""> 隐私政策 </a></p>
      </div>

    </div>
  </div>

</template>
<script>
import loginPSWInput from "@/components/BiliHead/MenuAndSearch/loging/LoginPSWInput";
import loginNoteInput from "@/components/BiliHead/MenuAndSearch/loging/LoginNoteInput";
import {mapMutations, mapState} from "vuex";
import {getQRCode} from "@/api";

export default {
  name: 'Login',
  components: {
    loginPSWInput,
    loginNoteInput
  },
  data() {
    return {
      activeName: 'second',
      id: "",
      psw: "",
      ifShow: true, //判断显示使用哪个方式登录
      QRCode: {
        // text: "https://www.bilibili.com/",
        text: "账号：19907751429,密码：unlock",
        url: "",
      },
    };
  },
  mounted() {
    getQRCode(this.QRCode).then(
        response => {
          console.log("返回成功")
          console.log("返回的数据", response.data)
          this.QRCode.url = 'data:image/png;base64,' + response.data.url
        },
        error => {
          console.log("错误信息", error.message)
        }
    )
  },
  computed: {
    ...mapState("loginAbout", ["ifShowLogin"]),
  },
  methods: {
    ...mapMutations("loginAbout", {ifLoginInterface: 'ifLoginInterface'}),
    register() {
      this.toShow(false)
    },
    toShow(value) {
      this.ifShow = value
      if (value) {
        this.$refs.login_right_psw_login.style = "color:#409eff"
        this.$refs.login_right_note_login.style = "color:none"
      } else {
        this.$refs.login_right_note_login.style = "color:#409eff"
        this.$refs.login_right_psw_login.style = "color:none"
      }
    },
    closeLogin() {
      console.log("关闭登录窗口")
      this.ifLoginInterface(false)
    }
  }
};
</script>
<style scoped>
.Login_background {
  position: fixed;
  /*overflow: hidden;*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(176, 174, 174, 0.5);
  z-index: 3;
}

.Login {
  position: absolute;
  top: 20%;
  transform: translateY(50%);
  transform: translateX(50%);
  width: 800px;
  height: 450px;
  background: #ffffff;
  border-radius: 10px;
}

.icon {
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 28px;
  fill: #bdbdbd;
}

.login_popout {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  height: 70%;
  /*background: #efd6d6;*/
}

.login_left {
  width: 40%;
  text-align: center;
  /*background: gainsboro;*/
}

.login_middle_hr {
  margin: auto;
  height: 65%;
  border-left: 1px solid #bdbdbd;
}

.login_right {
  width: 60%;
  /*background: #f6eded;*/
}

.login_right p {
  text-align: center;
}

.login_right p span {
  margin: 0 10px 0 10px;
  cursor: pointer;
}

.login_form_id input {
  border-width: 0;
  outline: none;
  background: none;
  height: 45px;
  width: 200px;
  margin-left: 20px;
}


.login_form_psw input {
  border-width: 0;
  outline: none;
  background: none;
  height: 45px;
  width: 200px;
  margin-left: 20px;
}

.login_form_button button {
  width: 150px;
  border-radius: 5px;
}

.login_other_login {
  margin-top: 20px;
  font-size: 13px;
}

.login_other_login_p {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.login_other_login p img {
  height: 20px;
  width: 20px;
}

.login_other_login p:first-child {
  color: #a4a4a4;
}

.login_bottom {
  /*background: #ff0000;*/
  color: #dcdcdc;
  /*margin-bottom: 0;*/
}

.login_bottom p {
  text-align: center;
  font-size: 13px;
}
</style>