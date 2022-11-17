<template>
  <div class="App">
    <Login v-if="ifShowLogin"></Login>
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <BiliMain>
        <keep-alive>
          <router-view name="router_Video"></router-view>
        </keep-alive>
      </BiliMain>
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
import BiliFool from "@/components/BiliFloot/index.vue"
import Login from "@/components/BiliHead/MenuAndSearch/loging/Login"
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    BiliHead,
    BiliMain,
    BiliFool,
    Home,
    Login,
  },
  data() {
    return {
      toHome: 'Home',
      toVideo: 'VideoPlay',
      toView: 'VideoView',
      videoSrc: require("@/assets/video/test.mp4"),
    }
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      console.log("登录了")
      this.ifLogin(true)
    } else {
      console.log("没登录")
      this.ifLogin(false)
    }
    this.placeToken(localStorage.getItem("token")) // 放入vuex存储登录状态
  },
  computed: {
    ...mapState("loginAbout", ["ifShowLogin"])
  },
  methods: {
    ...mapActions("loginAbout", {placeToken: "placeToken"}),
    ...mapMutations("loginAbout", {ifLogin: "ifLogin"})
  }

}
</script>

<style scoped>
.App {
  background-color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  min-width: 100rem;
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
