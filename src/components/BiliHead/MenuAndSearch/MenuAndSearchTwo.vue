<template>
  <div class="bili-head_banner_outskirts">
    <div ref="MenuAndSearch" class="bili-head_banner">
      <div class="bili-head_banner_left-ul">
        <div>
          <Navigation>
            <!-- 插入slot="button_active"属性为动态效果 -->
            <!-- 插入slot="button_text" 为静态效果 -->
            <router-link slot="button_active" to="/main">首页</router-link>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <router-link slot="button_active" to="/videoPlay">番剧</router-link>
            <LiveMenu slot="menu"/>
          </Navigation>
        </div>
        <div @click="$router.push('/BackgroundAnimation')">
          <Navigation>
            <a slot="button_active">直播</a>
            <LiveMenu slot="menu"/>
          </Navigation>
        </div>
        <div @click="sendTestData">
          <Navigation>
            <a slot="button_active">游戏中心</a>
            <GameMenu slot="menu"/>
          </Navigation>
        </div>
      </div>
      <!--                        <form action="" class="head_search">-->
      <!--                            <input type="text"><button>搜素</button>-->
      <!--                        </form>-->
      <!--        搜索框-->
      <el-input class="input_border-radius" style="width: 60%;margin:0 10% 0 10%;border-radius: 30px;" v-model="input"
                placeholder="请输入内容">
      </el-input>
      <!--    右边的导航栏-->
      <div class="bili-head_banner_right-ul">
        <!-- 头像-->
        <div>
          <LoginNavigation>
            <el-avatar
                slot="button_active"
                :src="headImg">
            </el-avatar>
            <!--            <el-avatar v-if="!ifLogin"-->
            <!--                       slot="button_active"-->
            <!--                       icon="el-icon-user-solid">-->
            <!--            </el-avatar>-->
            <NoLoginMenu v-if="!ifLogin" slot="menu"/>
            <LoginMenu v-if="ifLogin" slot="menu"/>
          </LoginNavigation>
        </div>
        <div>
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">大会员</a>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">消息</a>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">动态</a>
          </Navigation>
        </div>
        <div @click="$router.push('/UserCentre')">
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">收藏</a>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">历史</a>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
            <a slot="button_text">创作中心</a>
          </Navigation>
        </div>
      </div>
    </div>
    <div class="unfold_menu">
      <img class="menu_button" @click="openMenu" src="@/assets/svg/navigationArrows.svg" alt="">
      <div class="navigation_menu" v-if="ifShowMenu">
        <NavigationClassifyTwo/>
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
import NavigationClassifyTwo from "@/components/BiliHead/MenuAndSearch/NavigationClassifyTwo";
import {getTokenValue} from "@/utility/manageDate";
import {testGetMapping, testMapping} from "../../../../test/api/testMapping";

export default {
  name: "MenuAndSearchTwo",
  components: {
    Navigation,
    GameMenu,
    LiveMenu,
    NoLoginMenu,
    LoginNavigation,
    LoginMenu,
    NavigationClassifyTwo,
  },
  data() {
    return {
      myData: testData.test,
      input: '',
      ifShowMenu: false,
      headImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    }
  },
  computed: {
    ...mapState("loginAbout", ['ifLogin'])
  },
  mounted() {
    let userUrl = getTokenValue("userUrl")
    if (userUrl) {
      this.headImg = '/pav' + userUrl
    }
  },
  methods: {
    openMenu() {
      this.ifShowMenu = !this.ifShowMenu
    },
    // 测试接口
    sendTestData: function () {

    },
  }
}
</script>
<style scoped>
.bili-head_banner_outskirts {
  position: sticky;
  z-index: 15;
  height: 4rem;
  top: 0;
  width: 100%;
  background: white;
  color: #000000;
  box-shadow: 1px 1px 1px #f5f5f5;
}

.bili-head_banner {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /*background: #e4fffb;*/
}


.bili-head_banner_left-ul {
  height: 100%;
  list-style-type: none;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.bili-head_banner_left-ul div {
  height: 100%;
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
}

.bili-head_banner_right-ul div {
  color: #000000;
}

.bili-head_banner_right-ul div a {
  font-size: 10px;
}

.bili-head_banner form {
  color: #000000;
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

.unfold_menu {
  margin: auto;
  position: relative;
}

.menu_button {
  position: absolute;
  padding: 10px;
  cursor: pointer;
}

.navigation_menu {
  height: 800px;
  overflow-y: scroll;
  overflow-x: clip;
  width: 150px;
  /*background: red;*/
  /*border-radius: 10px;*/
  border-bottom-right-radius: 3px;
  box-shadow: 1px 1px 1px #f5f5f5;
}

.navigation_menu::-webkit-scrollbar {
  width: 5px;
}

.navigation_menu::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.input_border-radius > .el-input__inner {
  border-radius: 10px;
}
</style>