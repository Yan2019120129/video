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

        <input type="text" name="id" v-model="userPhone">
        <!--        分割线-->
        <el-divider direction="vertical"></el-divider>
        <a>获取验证码</a>
      </div>
      <div class="login_form_hr"></div>
      <div class="login_form_psw">
        验证码<input type="text" name="userPassword" v-model="userPassword">
      </div>
    </form>
    <div class="login_form_button">
      <!--      <el-button plain>注册</el-button>-->
      <el-button type="primary" @click="register">注册/登录</el-button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'LoginNoteInput',
  data() {
    return {
      activeName: 'second',
      userPhone: "15577098792",
      userPassword: "unlock",
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
    register() {
      this.axios({
        method: "post",
        url: "http://192.168.15.185:2090/user/save",
        data: {
          userPhone: this.userPhone,
          userPassword: this.userPassword
        }
      }).then(
          response => {
            console.log("获取返回的数据：", response.data)
            if (!response.data.state) {
              this.$alert("你的账号已注册！！！")
            }
          }, error => {
            console.log("请求失败：", error.message
            )
          }
      )
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