<template>
  <div class="Main">
    <transition name="el-zoom-in-top">
      <MenuAndSearchTwo></MenuAndSearchTwo>
    </transition>
    <Login v-if="ifShowLogin"></Login>
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <router-view name="router_main"></router-view>
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
    // ...mapState("layoutAbout", ["ifShowLogin"])
  },
}
</script>

<style scoped>
.Main {
  background-color: white;
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
}

.main {
  width: 80%;
}

.fool {
  width: 100%;
  height: 25rem;
  background-color: #d7f8f3;
}
</style>
