<template>
  <div class="App">
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <BiliMain></BiliMain>
    </div>
    <div class="fool"></div>
    <router-link to="/home">{{ toHome }}</router-link>
    <router-link :to="{
      name: 'videoPlay',
      query: {
        url: this.videoSrc,
      }
    }">{{ toVideo }}</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
import BiliHead from './components/BiliHead'
import BiliMain from './components/BiliMain'
export default {
  name: 'App',
  components: {
    BiliHead, BiliMain
  },
  mounted() {
    // console.log(require);
  },
  data() {
    return {
      isShow: true,
      toHome: 'Home',
      toVideo: 'VideoPlay',
      videoSrc: require("./assets/video/test.mp4"),
    }
  },
}
</script>

<style>
.App {
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
  width: 100%;
  /* background-color: red; */
}

.fool {
  width: 100%;
  height: 10vh;
  background-color: aqua;
}
</style>
