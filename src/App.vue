<template>
  <div>
    <h1>欢迎!!!</h1>
    <img src="./assets/img/tv.png" alt="">
    <router-link to="/home">{{ toHome }}</router-link>
    <router-link :to="{
      name:'videoPlay',
      query:{
        url:require('./assets/video/test.mp4'),
      }
    }">{{ toVideo }}</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {
    // console.log(require);
  },
  data() {
    return {
      isShow: true,
      toHome: 'Home',
      toVideo: 'VideoPlay',
      // videoSrc: require("./assets/video/example.mp4"),
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
a {
  margin: 100px;
  padding: 5px;
  background: red;
  border-radius: 5px;
  text-decoration: none;
}
</style>
