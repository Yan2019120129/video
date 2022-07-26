<template>
  <div id="app">
    <h1>欢迎!!!</h1>
    <!-- <button>{{toHome}}</button>
    <button>{{toVideo}}</button> -->
    <router-link to="/Home">{{ toHome }}</router-link>
    <router-link to="/Video">{{ toVideo }}</router-link>
    <div>

    </div>
      <router-view></router-view>
  </div>

</template>

<script>
import MyVideo from './components/MyVideo.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    MyVideo, Home
  },
  mounted() {
    // console.log(require);
  },
  data() {
    return {
      isShow: true,
      toHome: '去主页',
      toVideo: '去播放页面',
      videoSrc: require("./assets/video/example.mp4"),
    }
  },
  methods: {
    btnIsShow() {
      // this.isShow = !x;
      // console.log(this.isShow);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  margin: 300px;
}
</style>
