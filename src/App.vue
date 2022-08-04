<template>
  <div class="App">
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <BiliMain></BiliMain>
    </div>
    <div class="fool"></div>
    <!-- <router-link :to="{
      name: 'VideoView',
      query: {
        url: this.videoSrc,
      }
    }">{{ toView }}</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import BiliHead from './components/BiliHead.vue'
import BiliMain from './components/BiliMain.vue'
export default {
  name: 'App',
  components: {
    BiliHead,
    BiliMain
  },
  data() {
    return {
      toHome: 'Home',
      toVideo: 'VideoPlay',
      toView: 'VideoView',
      videoSrc: require("@/assets/video/test.mp4"),
    }
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
  max-width: 2560px;
  min-width: 1200px;
  object-fit: cover;
}

.head {
  width: 100%;
}

.main {
  width: 80%;
}

.fool {
  width: 100%;
  height: 10vh;
  background-color: aqua;
}
</style>
