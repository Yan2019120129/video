<template>
  <div class="App">
    <div class="head">
      <BiliHead></BiliHead>
    </div>
    <div class="main">
      <BiliMain></BiliMain>
    </div>
    <div class="fool"></div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import BiliHead from './components/BiliHead.vue'
import BiliMain from './components/BiliMain.vue'
export default {
  name: 'App',
  components: {
    BiliHead,
    BiliMain,
    Home,
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
  max-width: 256rem;
  min-width: 120rem;
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
  height: 25rem;
  background-color: aqua;
}
</style>
