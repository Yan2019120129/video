<template>
  <div class="Login">
    <div class="login_popout">
      <div class="login_left">
        <p>扫描二维码登录</p>
      </div>

      <div class="login_middle_hr"></div>
      <div class="login_right">
        <p>
          <span class="login_right_psw_login">密码登录</span>
          <el-divider direction="vertical"></el-divider>
          <span class="login_right_note_login">短信登录</span>
        </p>
        <form action="" class="login_form">
          <div class="login_form_id"> 账号<input type="text" name="id"></div>
          <div class="login_form_hr"></div>
          <div class="login_form_psw"> 密码<input type="text" name="psw"> <a href="">忘记密码</a></div>
        </form>
        <div class="login_form_button">
          <el-button plain>注册</el-button>
          <el-button type="primary">登录</el-button>
        </div>
        <div class="login_other_login">
          <p>其他登录方式</p>
          <p>
            <!--            <img src="@/assets/img/weixin.png" alt="">-->
            <span>微信登录</span>
            <!--            <img src="@/assets/img/weibo.png" alt="">-->
            <span>微博登录</span>
            <!--            <img src="@/assets/img/qq.png" alt="">-->
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
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      activeName: 'second',
      id: "",
      psw: ""
    };
  },
};
</script>
<style>
.App {
  position: fixed;
  top: 20%;
  transform: translateY(50%);
  transform: translateX(50%);
  width: 800px;
  height: 450px;
  background: #939393;
  border-radius: 10px;
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


.login_right_psw_login {
  color: #66b1ff;
}

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

.login_other_login {
  margin-top: 20px;
  font-size: 13px;
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