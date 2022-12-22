<template>
  <div class="LoginPSWInput">
    <form action="" class="login_form">
      <div class="login_form_id">
        <el-select style="width:70px;" size="small" v-model="value" placeholder="+86">
          <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="width: 250px"
          >
            <span style="float: left; font-size: 13px">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>

        <input type="text" name="id" v-model="sendData.userPhone">
        <!--        分割线-->
        <el-divider direction="vertical"></el-divider>
        <a>获取验证码</a>
      </div>
      <div class="login_form_hr"></div>
      <div class="login_form_psw">
        验证码<input type="text" name="userPassword" v-model="sendData.userPassword">
      </div>
    </form>
    <div class="login_form_button">
      <!--      <el-button plain>注册</el-button>-->
      <el-button type="primary" @click="vueRegister">注册/登录</el-button>
    </div>
  </div>

</template>
<script>
import {addUser} from "@/api";
import {mapActions, mapMutations, mapState} from "vuex";
import {setToken} from "@/utility/manageDate";

export default {
  name: 'LoginNoteInput',
  data() {
    return {
      activeName: 'second',
      sendData: {
        userPhone: "15577098792",
        userPassword: "unlock",
      },
      cities: [{
        value: '中国香港特别行政区',
        label: '+852'
      }, {
        value: '中国澳门特别行政区',
        label: '+853'
      }, {
        value: '中国台湾',
        label: '+886'
      }, {
        value: '美国',
        label: '+1'
      }, {
        value: '比利时',
        label: '+32'
      }, {
        value: '澳大利亚',
        label: '+61'
      }],
      value: ''
    };
  },
  methods: {
    ...mapMutations("layoutAbout", {ifLoginInterface: "ifLoginInterface"}),
    ...mapMutations("loginAbout", {ifLogin: "ifLogin"}),
    ...mapActions("loginAbout", {aPlaceToken: "aPlaceToken", aAnalysisToke: "aAnalysisToke"}),
    ...mapState("loginAbout", ["analysisToken"]),
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
          // this.userMessage.userPhone = value
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
    vueRegister() {
      addUser(this.sendData).then(
          response => {
            console.log("获取返回的数据：", response.data)
            if (!response.data.state) {
              this.$alert("你的账号已注册！！！")
            } else {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              location.reload() // 重新加载页面 否则会出现token不能实时更新，不能准确的判断登录状态的问题
              console.log("关闭登录界面")
              this.ifLoginInterface(false)
              console.log("返回的数据", response.data)
              console.log("将token放入浏览器本地缓存")
              // localStorage.setItem("token", response.data.token)
              setToken(response.data.token)
              console.log("将token放入vuex")
              this.aPlaceToken(response.data.token)
              console.log("将token放入vuex中解析")
              this.aAnalysisToke(response.data.token)
              console.log("将登录成功的状态放入vuex里")
              this.ifLogin(true)
            }
          }, error => {
            console.log("请求失败：", error.message)
          }
      )

    }

  }
}
;
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

.login_form_id >>> .el-input__inner {
  border: none;
  padding: 0;
}

.login_form_id input {
  border-width: 0;
  outline: none;
  background: none;
  height: 45px;
  width: 180px;
}

.login_form_psw {
  margin-left: 20px;
}

.icon:hover path {
  fill: #66b1ff;
}

.login_form_psw input {
  border-width: 0;
  outline: none;
  background: none;
  height: 45px;
  width: 150px;
  margin-left: 30px;
}

.login_form_hr {
  border-top: 1px solid #bdbdbd;
}

.login_form_button {
  margin-top: 20px;
  text-align: center;
}

.login_form_button button {
  width: 200px;
  border-radius: 5px;
}

.login_other_login p:first-child {
  color: #a4a4a4;
}

.login_bottom p {
  text-align: center;
  font-size: 13px;
}
</style>