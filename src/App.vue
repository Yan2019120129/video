<template>
  <div class="App" ref="App">
    <el-backtop></el-backtop>
    <el-backtop :bottom="100">
      <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
    <transition name="el-zoom-in-top">
      <MenuAndSearchTwo></MenuAndSearchTwo>
    </transition>
    <Login v-if="ifShowLogin"></Login>

    <keep-alive :include="['Main','UserCentre','UserMessage']">
      <router-view name="router_app"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Main from "@/components/Main";
import {mapActions, mapState} from "vuex";
import {verify} from "@/utility/messageHint";
import Navigation from "@/views/Home/Navigation";
import NavigationItem from "@/views/Home/NavigationItem";
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo";
import Login from "@/components/BiliHead/MenuAndSearch/loging/Login";

export default {
  name: "App",
  components: {
    Main,
    Navigation,
    NavigationItem,
    MenuAndSearchTwo,
    Login,
  },
  data() {
    return {}
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let token = localStorage.getItem("token")
      if (await verify(token)) { // token验证成功会进入
        this.aIfLogin(true)
        this.aPlaceToken(token) // 放入vuex存储登录状态
        this.aAnalysisToke(token) // 页面刷新的时候放入vuex解析token
      }
    },
    ...mapActions("loginAbout", {aPlaceToken: "aPlaceToken", aAnalysisToke: "aAnalysisToke", aIfLogin: "aIfLogin"})
  },
  computed: {
    ...mapState("layoutAbout", ["ifShowLogin", "ifShowNavigationBars"]),
  },
}
</script>

<style scoped>
.App {
  /*max-width:"`this.screenWidth`px";*/
  /*position: relative;*/
  /*min-width: 1600px;*/
  width: 100%;
  /*max-width: 1707px;*/
  background: #ffffff;
  margin: auto;
  /*border: 1px solid #e3e3e3;*/

}
</style>