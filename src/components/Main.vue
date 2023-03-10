<template>
  <div class="Main">
    <div class="head">
      <BiliHead/>
      <NavigationClassify/>
    </div>
    <div class="main">
      <!--      <keep-alive :include="['Home']">-->
      <!--        <router-view name="router_main"></router-view>-->
      <!--      </keep-alive>-->
      <Home></Home>
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
import NavigationClassify from "@/components/BiliHead/MenuAndSearch/NavigationClassify";

export default {
  name: 'Main',
  components: {
    BiliHead,
    BiliMain,
    BiliFool,
    Login,
    MenuAndSearchTwo,
    NavigationClassify,
    Home,
  },
  data() {
    return {
      toHome: 'Home',
      toVideo: 'VideoPlay',
      toView: 'VideoView',
      videoSrc: require("@/assets/video/oceans.mp4"),
    }
  },
  computed: {
    ...mapState("layoutAbout", ["ifShowLogin", "ifShowNavigationBars"]),
  },
}
</script>

<style scoped>
.Main {
  /*background-color: #fbeeee;*/
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  /*max-width: 100rem;*/
  /*min-width: 100rem;*/
  height: 100%;
}

.head {
  width: 100%;
  /*background: #ffe0e0;*/
  padding: 0 10px;
  /*border: 1px solid #d7d7d7;*/
  border-bottom: none;
}

.main {
  width: 90%;
  /*background: #ffffff;*/
  padding: 0 10px;
  /*border: 1px solid #d7d7d7;*/
  border-top: none;
}

.fool {
  width: 100%;
  height: 25rem;
  background-color: #d7f8f3;
}
</style>
