<template>
  <div class="App" ref="App">
    <router-view name="router_app"></router-view>
  </div>
</template>
<script>
import Main from "@/components/Main";
import {mapActions} from "vuex";
import {verify} from "@/utility/messageHint";
import {
  getSubarea,
  getVideoAimtron,
  getVideoCompetition,
  getVideoExtension,
  getVideoLiveStreaming,
  getVideoMain
} from "@/api/common";

export default {
  name: "App",
  components: {
    Main
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
  }
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
  border: 1px solid #e3e3e3;

}
</style>