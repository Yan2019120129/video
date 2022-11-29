<template>
  <div class="App" ref="App">
    <router-view name="router_app"></router-view>
  </div>
</template>
<script>
import Main from "@/components/Main";
import {mapActions} from "vuex";

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
    init() {
      if (localStorage.getItem("token") != null) {
        console.log("已登录")
        this.aIfLogin(true)
      } else {
        console.log("未登录")
        this.$message({
          message: '请登录！',
          type: 'warning'
        });
        this.aIfLogin(false)
      }
      this.aPlaceToken(localStorage.getItem("token")) // 放入vuex存储登录状态
      this.aAnalysisToke(localStorage.getItem("token")) // 页面刷新的时候放入vuex解析token
    },
    ...mapActions("loginAbout", {aPlaceToken: "aPlaceToken", aAnalysisToke: "aAnalysisToke", aIfLogin: "aIfLogin"}),

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

  margin: auto;
  border: 1px solid #e3e3e3;

}
</style>