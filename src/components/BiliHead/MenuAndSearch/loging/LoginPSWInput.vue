<template>
  <div class="LoginPSWInput">
    <form action="" class="login_form">
      <div class="login_form_id">
        账号<input type="text" v-model="userPhoneOrId" maxlength="">
      </div>
      <div class="login_form_hr"></div>
      <div class="login_form_psw">
        密码<input type="text" v-model="userMessage.userPassword" placeholder="">
        <transition name="fade">
          <p class="errorMessage" v-show="ifErrorMessage">{{ errorMessageStyle }}</p>
        </transition>
        <svg t="1667117207285" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2320" width="20" height="20">
          <path
              d="M512.022187 546.417778c-184.177778 0-368.071111-55.921778-499.114667-167.537778a37.575111 37.575111 0 0 1-3.498667-53.162667 37.944889 37.944889 0 0 1 53.418667-3.470222c231.082667 198.826667 668.302222 198.826667 898.389333 0a37.944889 37.944889 0 0 1 53.418667 3.470222c13.767111 15.644444 12.231111 39.452444-3.498667 53.191111C880.093298 490.496 696.199964 546.417778 512.022187 546.417778z m-136.760889 164.522666a30.833778 30.833778 0 0 1-6.741334 0c-10.325333-1.422222-19.626667-7.111111-25.543111-15.644444-5.944889-8.561778-7.964444-19.228444-5.632-29.354667l24.945778-146.631111a37.973333 37.973333 0 0 1 43.918222-30.805333 37.831111 37.831111 0 0 1 30.947556 43.747555l-24.945778 146.602667a37.376 37.376 0 0 1-36.949333 32.085333z m561.009778-74.581333c-9.955556 0-19.512889-4.039111-26.453334-11.178667l-123.022222-124.245333a37.176889 37.176889 0 0 1 16.042667-64.455111 37.546667 37.546667 0 0 1 37.091555 12.259556l123.050667 124.245333c14.592 14.563556 14.592 38.144 0 52.707555-7.224889 6.826667-16.782222 10.638222-26.737778 10.666667z m-848.497778 0a38.997333 38.997333 0 0 1-24.945778-10.666667 37.176889 37.176889 0 0 1 0-52.707555l123.022222-124.245333a37.518222 37.518222 0 0 1 67.470222 14.136888 37.205333 37.205333 0 0 1-15.815111 38.058667l-123.022222 124.245333a37.006222 37.006222 0 0 1-26.709333 11.178667z m562.744889 74.581333a37.376 37.376 0 0 1-36.693334-30.833777l-24.945777-146.631111a37.176889 37.176889 0 0 1 9.756444-38.826667 37.546667 37.546667 0 0 1 39.424-7.68c13.539556 5.319111 22.755556 17.92 23.694222 32.341333l24.945778 146.631111c1.820444 9.728-0.341333 19.768889-6.030222 27.904-5.688889 8.135111-14.364444 13.653333-24.177778 15.36a30.805333 30.805333 0 0 1-5.973333 1.706667z"
              p-id="2321">
          </path>
        </svg>
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

import {mapMutations} from "vuex";

export default {
  name: 'LoginPSWInput',
  data() {
    return {
      activeName: 'second',
      errorMessageStyle: "",
      ifErrorMessage: false,
      userPhoneOrId: "yan_goodBoy",
      userMessage: {
        userId: '',
        userPhone: '',
        userPassword: "unlock"
      },
    };
  },
  // 监视属性
  watch: {},
  // 方法
  methods: {
    ...mapMutations("loginAbout", {ifLogin: "ifLogin", ifLoginInterface: "ifLoginInterface"}),
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
      // 如果满洲是数值进入
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
        this.userMessage.userId = value
        console.log("是id")
        return true;
      }
    },
    login() {
      console.log("进入登录,开始判断输入是否符合规范")
      if (this.ifPhoneOrId(this.userPhoneOrId)) {
        console.log("输入符合规范，开始发送请求", this.userPhoneOrId)
        this.axios.post("/user/login", this.userMessage).then(
            response => {
              // 跳出登录成功的弹窗
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              // 关闭登录界面
              this.ifLoginInterface(false)
              // response.data读取返回的数据
              console.log("请求成功,将token放入浏览器本地", response.data)
              // 将token放入浏览器本地缓存
              localStorage.setItem("token", response.data.token)
              // 将登录成功的状态放入vuex里
              this.ifLogin(true)
            }, error => {
              console.log("请求失败", error.message)
            }
        )
      } else {
        console.log("输入不符合规范，未发送请求")
        return
      }
    }
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
  height: 45px;
  width: 200px;
  margin-left: 20px;
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