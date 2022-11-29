<template>
  <div ref="MenuAndSearch" class="bili-head_banner">
    <ul class="bili-head_banner_left-ul">
      <li>
        <Navigation>
          <!-- 插入slot="button_active"属性为动态效果 -->
          <!-- 插入slot="button_text" 为静态效果 -->
          <router-link slot="button_active" to="/Home">首页</router-link>
        </Navigation>
      </li>
      <li>
        <Navigation>
          <router-link slot="button_active" to="/VideoPlay">番剧</router-link>
          <LiveMenu slot="menu"/>
        </Navigation>
      </li>
      <li>
        <Navigation>
          <a slot="button_active">直播</a>
          <LiveMenu slot="menu"/>
        </Navigation>
      </li>
      <li>
        <Navigation>
          <a slot="button_active">游戏中心</a>
          <GameMenu slot="menu"/>
        </Navigation>
      </li>
    </ul>
    <!--                        <form action="" class="head_search">-->
    <!--                            <input type="text"><button>搜素</button>-->
    <!--                        </form>-->
    <!--        搜索框-->
    <el-input style="width: 60%;margin:0 40px 0 40px;border-radius: 20px;" v-model="input" placeholder="请输入内容">
    </el-input>
    <!--    右边的导航栏-->
    <div class="bili-head_banner_right-ul">
      <!-- 头像-->
      <div>
        <LoginNavigation>
          <el-avatar slot="button_active"
                     src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <NoLoginMenu v-if="!ifLogin" slot="menu"/>
          <LoginMenu v-if="ifLogin" slot="menu"/>
        </LoginNavigation>
      </div>
      <div>
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" slot="button_active" alt="">
          <a slot="button_text">大会员</a>
        </Navigation>
      </div>
      <div>
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" slot="button_active" alt="">
          <a slot="button_text">消息</a>
        </Navigation>
      </div>
      <div>
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" slot="button_active" alt="">
          <a slot="button_text">动态</a>
        </Navigation>
      </div>
      <div @click="$router.push('/UserCentre')">
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" class="img_path" slot="button_active" alt="">
          <a slot="button_text">收藏</a>
        </Navigation>
      </div>
      <div>
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" slot="button_active" alt="">
          <a slot="button_text">历史</a>
        </Navigation>
      </div>

      <div>
        <Navigation>
          <img src="@/assets/svg/bigVIP.svg" slot="button_active" alt="">
          <a slot="button_text">创作中心</a>
        </Navigation>
      </div>

    </div>
  </div>
</template>
<script>
import testData from '@/assets/test.json'
import Navigation from '@/components/BiliHead/MenuAndSearch/cpns/Animation'
import LoginNavigation from '@/components/BiliHead/MenuAndSearch/loging/LoginNavigation'
import GameMenu from '@/components/BiliHead/MenuAndSearch/cpns/GameMenu.vue'
import LiveMenu from '@/components/BiliHead/MenuAndSearch/cpns/LiveMenu.vue'
import NoLoginMenu from '@/components/BiliHead/MenuAndSearch/cpns/NoLoginMenu.vue'
import LoginMenu from '@/components/BiliHead/MenuAndSearch/cpns/LoginMenu.vue'

import {mapState} from "vuex";

export default {
  name: "MenuAndSearch",
  components: {
    Navigation,
    GameMenu,
    LiveMenu,
    NoLoginMenu,
    LoginNavigation,
    LoginMenu,
  },
  data() {
    return {
      myData: testData.test,
      input: '',
      // _ifLogin: this.ifLogin
    }
  },
  computed: {
    ...mapState("loginAbout", ['ifLogin'])
  },

}
</script>
<style scoped>
.bili-head_banner {
  z-index: 99;
  height: 4rem;
  padding: 0px 20px 0 20px;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #551a8b;
}


.bili-head_banner_left-ul {
  height: 100%;
  list-style-type: none;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}

.bili-head_banner_left-ul div {
  /*margin-left: 1rem;*/
  height: 100%;
  /*color: white;*/
  align-content: center;
}

.head_search > input {
  border: transparent;
  outline: none;
}

.bili-head_banner_right-ul {
  height: 100%;
  list-style-type: none;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  /*justify-content: end;*/
}

.bili-head_banner_right-ul div {
  /*margin-right: 1rem;*/
  /*color: white;*/
}

.bili-head_banner_right-ul div a {
  font-size: 10px;
}

.bili-head_banner form {
  /*color: white;*/
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.bili-head_banner form input {
  width: 70%;
}

.navigation_left > div {
  margin-right: 1rem;
}

.navigation_left img {
  border-radius: 20px;
  width: 40px;
  height: 40px;
}

.navigation_right > div {
  margin: auto;
  white-space: nowrap;
  /* 内容不换行 */
}

.navigation_right svg {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.navigation_right a {
  margin: auto 0;
}
</style>