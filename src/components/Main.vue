<template>
  <div class="Main">
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
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <keep-alive :include="['Home','VideoPlay']">
        <router-view name="router_main"></router-view>
      </keep-alive>
    </div>
    <div class="fool">
      <BiliFool/>
    </div>
  </div>
</template>

<script>
import Home from '@/views/Home/Home.vue'
import BiliHead from '@/components/BiliHead/BiliHead'
import BiliMain from '@/components/BiliMain/BiliMain'
import BiliFool from "@/components/BiliFloot"
import Login from "@/components/BiliHead/MenuAndSearch/loging/Login"
import {mapState} from "vuex";
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo";

export default {
  name: 'Main',
  components: {
    BiliHead,
    BiliMain,
    BiliFool,
    Login,
    MenuAndSearchTwo,
  },
  data() {
    return {
      toHome: 'Home',
      toVideo: 'VideoPlay',
      toView: 'VideoView',
      videoSrc: require("@/assets/video/test.mp4"),
    }
  },
  computed: {
    ...mapState("layoutAbout", ["ifShowLogin", "ifShowNavigationBars"]),
  },
}
</script>

<style scoped>
.Main {
  background-color: #fbeeee;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  /*max-width: 100rem;*/
  /*min-width: 100rem;*/
  height: 100%;
}

.head {
  width: 80%;
  /*background: #ffe0e0;*/
  padding: 0 10px;
  border: 1px solid #d7d7d7;
  border-bottom: none;
}

.main {
  width: 80%;
  background: #ffffff;
  padding: 0 10px;
  border: 1px solid #d7d7d7;
  border-top: none;
}

.fool {
  width: 100%;
  height: 25rem;
  background-color: #d7f8f3;
}
</style>
