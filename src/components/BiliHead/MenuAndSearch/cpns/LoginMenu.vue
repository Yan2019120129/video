<template>
  <div class="LoginMenu">
    <div class="login_menu_top">
      <h4>昵称</h4>
      <div><span>硬币：150</span>&nbsp;&nbsp;&nbsp;<span>B币：0</span></div>
      <div class="login_menu_top_experience">
        <span>lv3</span>
        &nbsp;&nbsp;&nbsp;
        <div class="experience_bar">
          <div></div>
        </div>
        &nbsp;&nbsp;&nbsp;
        <span>lv4</span>
      </div>
      <p>当前等级成长3775，距离升级lv4还需要725</p>
      <div class="login_menu_top_end">
        <div>
          <span>27</span>
          <div>关注</div>
        </div>
        <div>
          <span>27</span>
          <div>粉丝</div>
        </div>
        <div>
          <span>27</span>
          <div>动态</div>
        </div>
      </div>
    </div>

    <div class="login_menu_end">
      <div class="Line_attribute Other_border" @click="$router.push('/userMessage')">
        <div class="Line_attribute">
          <img src="@/assets/img/tv.png" alt="">
          <h4 class="login_menu_button" >个人中心</h4>
        </div>
        <img class="img_right" src="@/assets/img/tv.png" alt="">
      </div>
      <div class="Line_attribute Other_border">
        <div class="Line_attribute">
          <img src="@/assets/img/tv.png" alt="">
          <h4 class="login_menu_button">投稿管理</h4>
        </div>
        <img src="@/assets/img/tv.png" alt="">
      </div>
      <div class="Line_attribute Other_border">
        <div class="Line_attribute">
          <img src="@/assets/img/tv.png" alt="">
          <h4 class="login_menu_button">推荐服务</h4>
        </div>
        <img src="@/assets/img/tv.png" alt="">
      </div>
      <div class="cut_off_rule"></div>
      <div class="Line_attribute Other_border">
        <div class="Line_attribute">
          <img src="@/assets/img/tv.png" alt="">
          <h4 class="login_menu_button" @click="open">退出登录</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {mapActions} from "vuex";
import {clearToken} from "@/utility/manageDate";
import {hintLogin} from "@/utility/messageHint";

export default {
  name: "LoginMenu",
  data() {
    return {
      value3: 36,
      showLogin: false
    }
  },
  methods: {
    ...mapActions("loginAbout", {aPlaceToken: "aPlaceToken",aIfLogin:"aIfLogin"}),
    open() {
      clearToken(); // 清除token
      this.aPlaceToken("") // 清空vuex里的token
      this.aIfLogin(false) //设置为未登录状态
      hintLogin() // 提示登录
      location.reload() // 重新加载页面 否则会出现token不能实时更新，不能准确的判断登录状态的问题
    },
  }
}
</script>
<style scoped>

.LoginMenu {
  width: 300px;
  height: 400px;
  background: white;
  padding: 5px 20px 20px 20px;
  border-radius: .5rem;
  border: 1px solid #f5f5f5;
  box-shadow: 0 0 2px #f5f5f5;
}

.login_menu_top {
  text-align: center;

}

.login_menu_top p, div {
  font-size: 10px;

}

.login_menu_top_experience {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.login_menu_top_experience div {
  width: 100%;
}

.experience_bar {
  height: 2px;
  border-radius: 1px;
  background: #9a9a9a;
}

.experience_bar div {
  height: 2px;
  width: 80px;
  background: #ff9641;
}

.login_menu_top_end {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.login_menu_end img {
  width: 20px;
  height: 20px;
}

.cut_off_rule {
  height: 1px;
  background: #d7d7d7;
}

.Line_attribute {
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.Other_border {
  margin: 10px 15px;
  border-radius: 10px;
  padding: 5px 20px;
  transition: all 0.4s ease 0s;
}

.Other_border:hover {
  transition: all 0.4s ease 0s;
  background: #f6f6f6;
}

.Line_attribute div > * {
  margin-right: 20px;
}

.login_menu_button {
  cursor: pointer;
}
</style>