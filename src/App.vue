<template>
  <div id="app">
    <Video :videoSrc="videoSrc"></Video>
    <!-- <my-video :video-src="videoSrc"></my-video> -->
  </div>
</template>

<script>
import Video from './components/Video.vue'
import MyVideo from './components/MyVideo.vue'

export default {
  name: 'App',
  components: {
    Video, MyVideo
  },
  data() {
    return {
      videoSrc: require("./assets/video/example.mp4"),
      // videoSrc:"./assets/video/example.mp4"
    }
  }, mounted() {
    console.log(require);
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
</style>
