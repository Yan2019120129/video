<template>
  <div class="play_body">
    <video id="video" ref="v">
      <source src="@/assets/video/test.mp4">
      您的浏览器不支持 HTML5 video 标签。
    </video>
    <div id="play_menu">
      <div class="play_menu_top"></div>
      <div class="play_menu_end">
        <div class="menu_bar">
          <div class="bar">
            <a></a>
            <div class="barInside"></div>
            <img src="@/assets/img/tv.png" alt="">
          </div>
        </div>
        <div class="menu_bottom">
          <button class="menu_play" @click="menuPlay">
            <img v-show="isPlay" src="@/assets/img/startVideo.png">
            <img v-show="!isPlay" src="@/assets/img/stopVideo.png">
          </button>
          <button class="menu_time">00:00/00:00</button>
          <button class="menu_aut"><b>自动</b></button>
          <button class="menu_speed"><b>倍速</b></button>
          <button class="menu_srt">
            <b>字幕</b>
            <div class="barrage"></div>
          </button>
          <button class="menu_voice">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="videoSvg" viewBox="0 0 100 79">
              <title>setting</title>
              <path
                  d="m60.60481,10.6048a3.67691,3.67691 0 1 0 0,7.39752a31.99766,31.99766 0 0 1 0,64.03911a3.67691,3.67691 0 1 0 0,7.35374a39.39519,39.39519 0 0 0 0,-78.79037z"
                  id="svg_1" p-id="1367"/>
              <path
                  d="m66.09556,73.13432zm-18.15176,-58.94894l-24.05538,15.99283l-17.18246,0a7.09325,7.09325 0 0 0 -6.69666,7.4457l0,24.80443a7.09325,7.09325 0 0 0 6.69658,7.40164l17.18254,0l24.09945,15.99291c3.17214,2.11471 5.77158,0.48457 5.77158,-3.6128l0,-64.41198c-0.04414,-4.14136 -2.6435,-5.72743 -5.81564,-3.61273z"
                  id="svg_2" p-id="1368"/>
              <path
                  d="m61.75982,64.42554a3.40381,3.40381 0 1 0 0,6.84815a21.27369,21.27369 0 0 0 0,-42.54738a3.40381,3.40381 0 1 0 0,6.84815a14.42554,14.42554 0 0 1 0,28.89161l0,-0.04053z"
                  id="svg_3" p-id="1369"/>
            </svg>
          </button>
          <button class="menu_setting">
            <svg id="setting" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" t="1658302397130"
                 class="icon" version="1.1" p-id="2406">
              <g id="settingSvg_1">
                <title>setting</title>
                <path
                    d="m880.037,461.451c-2.896,-16.078 -18.396,-32.444 -34.473,-36.066l-12.021,-2.751c-28.244,-8.547 -53.302,-27.232 -69.234,-54.751c-15.933,-27.665 -19.701,-59.097 -12.748,-87.917l3.767,-11.299c4.779,-15.643 -1.45,-37.223 -14.049,-47.943c0,0 -11.299,-9.559 -43.164,-27.954c-31.866,-18.25 -45.626,-23.319 -45.626,-23.319c-15.499,-5.648 -37.224,-0.289 -48.522,11.733l-8.403,8.98c-21.436,20.278 -50.26,32.589 -82.123,32.589s-60.976,-12.454 -82.415,-32.878l-8.114,-8.692c-11.153,-12.021 -33.022,-17.378 -48.522,-11.732c0,0 -13.904,5.069 -45.77,23.318c-31.866,18.54 -43.018,28.099 -43.018,28.099c-12.6,10.574 -18.829,32.01 -14.049,47.798l3.479,11.442c6.807,28.822 3.185,60.11 -12.748,87.772s-41.273,46.497 -69.659,54.899l-11.587,2.606c-15.933,3.622 -31.577,19.844 -34.473,36.066c0,0 -2.606,14.483 -2.606,51.273s2.606,51.273 2.606,51.273c2.896,16.222 18.395,32.444 34.473,36.066l11.299,2.606c28.388,8.403 53.88,27.232 69.813,55.04c15.933,27.666 19.701,59.097 12.748,87.918l-3.33,11.153c-4.779,15.643 1.45,37.223 14.048,47.943c0,0 11.299,9.559 43.164,27.954s45.625,23.319 45.625,23.319c15.499,5.647 37.224,0.289 48.522,-11.733l7.966,-8.547c21.579,-20.423 50.549,-32.878 82.56,-32.878s61.121,12.6 82.56,33.022l7.966,8.547c11.153,12.021 33.022,17.383 48.522,11.732c0,0 13.904,-5.069 45.77,-23.318c31.866,-18.396 43.018,-27.954 43.018,-27.954c12.6,-10.574 18.829,-32.154 14.048,-47.943l-3.479,-11.588c-6.807,-28.677 -3.185,-59.964 12.748,-87.484c15.933,-27.666 41.424,-46.638 69.813,-55.04l11.299,-2.606c15.933,-3.622 31.577,-19.844 34.473,-36.066c0,0 2.606,-14.483 2.606,-51.273c-0.152,-36.937 -2.759,-51.421 -2.759,-51.421l-0.001,0.005zm-366.587,198.576c-81.256,0 -147.303,-65.901 -147.303,-147.303c0,-81.256 65.901,-147.159 147.303,-147.159c81.256,0 147.303,65.901 147.303,147.303c-0.148,81.256 -66.049,147.159 -147.303,147.159z"
                    p-id="2407" id="svg_1"/>
                <ellipse cx="512" cy="512" id="svg_2" rx="88" ry="88"/>
              </g>
            </svg>
          </button>
          <button class="menu_pip">
            <svg id="inPicture" viewBox="0 0 275 275" xmlns="http://www.w3.org/2000/svg" p-id="1406"
                 version="1.1" class="icon" t="1658316973927">
              <title>setting</title>
              <path stroke="null" id="inPictureSvg_1" p-id="1407"
                    d="m261.02121,0a13.73796,13.73796 0 0 1 13.73796,13.73796l0,96.16571l-27.47592,0l0,-82.42775l-219.80733,0l0,192.33142l82.42775,0l0,27.47592l-96.16571,0a13.73796,13.73796 0 0 1 -13.73796,-13.73796l0,-219.80733a13.73796,13.73796 0 0 1 13.73796,-13.73796l247.28325,0zm0,137.37958a13.73796,13.73796 0 0 1 13.73796,13.73796l0,82.42775a13.73796,13.73796 0 0 1 -13.73796,13.73796l-109.90367,0a13.73796,13.73796 0 0 1 -13.73796,-13.73796l0,-82.42775a13.73796,13.73796 0 0 1 13.73796,-13.73796l109.90367,0z"/>
              <path stroke="null" id="inPictureSvg_2" p-id="1407"
                    d="m66.49267,47.7737l30.91041,30.91041l28.06665,-28.06665l0,75.55877l-75.55877,0l28.06665,-28.06665l-30.91041,-30.9104l19.42547,-19.42548z"/>
            </svg>
          </button>
          <button class="menu_wid">
            <svg id="widescreen" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" t="1658316973927"
                 class="icon" version="1.1" p-id="1406">
              <rect rx="50" id="svg_8" height="500" width="800" y="0" x="0"/>
              <title>setting</title>
              <path id="widescreenSvg_1"
                    d="m523,331.96376l96.42799,-81.65033l-96.42799,-81.65091l55.11348,-46.66252l151.55317,128.31343l-151.55317,128.35324l-55.11348,-46.70291z"
                    stroke="#000" fill="#000000"/>
              <path stroke="#000" stroke-width="0" id="widescreenSvg_2"
                    d="m300.97375,167.89151l-107.78166,82.1134l107.78166,82.11333l-61.59609,46.95493l-169.37765,-129.06824l169.37765,-129.07811l61.59609,46.96469z"
                    fill="#000000"/>
            </svg>
          </button>
          <button class="menu_tmlfull">
            <svg id="fullScreen" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" p-id="2261"
                 version="1.1" class="icon" t="1658326893246">
              <title>setting</title>
              <rect rx="100" id="svg_5" height="600" width="700" y="0" x="0"/>
              <path stroke="#000" fill="#000000" id="fullScreenSvg_1" p-id="2262"
                    d="m234.48725,516.38469l-127.5898,0c-19.13847,0 -31.89745,-12.75898 -31.89745,-31.89745l0,-127.5898c0,-19.13847 12.75898,-31.89745 31.89745,-31.89745s31.89745,12.75898 31.89745,31.89745l0,95.69235l95.69235,0c19.13847,0 31.89745,12.75898 31.89745,31.89745s-12.75898,31.89745 -31.89745,31.89745z"/>
              <path stroke="null" fill="#000000" id="fullScreenSvg_2" p-id="2265"
                    d="m108,271.00008c-19.60001,0 -33,-13.06668 -33,-32.66669l0,-130.66671c0,-19.60001 13.06667,-32.66668 32.66668,-32.66668l130.66671,0c19.60001,0 32.66669,13.06667 32.66669,32.66668s-13.06668,32.66668 -32.66669,32.66668l-98.00003,0l0,98.00003c0,19.60001 -12.73335,32.66669 -32.33336,32.66669z"/>
              <path stroke="null" fill="#000000" id="fullScreenSvg_3" p-id="2263"
                    d="m590.89749,523.077l-132.71799,0c-19.9077,0 -33.1795,-13.2718 -33.1795,-33.1795s13.2718,-33.17949 33.1795,-33.17949l99.5385,0l0,-99.5385c0,-19.9077 13.27179,-33.1795 33.17949,-33.1795s33.1795,13.2718 33.1795,33.1795l0,132.71799c0,19.9077 -13.2718,33.1795 -33.1795,33.1795z"/>
              <path stroke="#000000" fill="#000000" id="fullScreenSvg_4" p-id="2264"
                    d="m590.8975,274.077c-19.9077,0 -33.17949,-13.2718 -33.17949,-33.1795l0,-99.5385l-99.5385,0c-19.90771,0 -33.17951,-13.2718 -33.17951,-33.1795s13.2718,-33.1795 33.17951,-33.1795l132.71799,0c19.9077,0 33.1795,13.2718 33.1795,33.1795l0,132.718c0,19.9077 -13.2718,33.1795 -33.1795,33.1795z"/>
            </svg>
          </button>
          <button class="menu_full"><b>全屏</b></button>
        </div>
      </div>
    </div>
    <div id="bar1">
      <div class="bar1Inside"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Video',
  props: [
    'videoSrc'
  ],
  data() {
    return {
      videoLable: null,
      isPlay: true,
      hello: "你好！！！"
    }
  },
  mounted() {
    this.video = this.$refs.v;
    console.log(this.$route.query);
  },
  methods: {
    menuPlay() {
      if (this.video.paused) {
        this.video.play()
        this.isPlay = false;
        console.log("开始");
      } else {
        this.video.pause()
        this.isPlay = true;
        console.log("暂停");
      }
    }
  }
}

</script>

<style scoped>
body {
  background-color: black;
}

.play_body {
  position: relative;
  /*margin: 100px auto;*/
  /*width: 903px;*/
  align-content: center;
}

#video {
  width: 100%;
}

#play_menu {
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: auto;
  transition: .5s .1s;
}

.play_menu_top {
  /*width: 903px;*/
  height: 88%;
}

.play_menu_end {
  width: 100%;
  height: 12%;
  transition: .2s .1s;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: -o-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: -moz-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
}

.menu_bar {
  height: 20%;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
}

.bar {
  position: absolute;
  bottom: 30%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
}

.bar .barInside {
  height: 3px;
  background-color: aqua;
  transition: .1s .1s;
}


.bar img {
  opacity: 0;
  width: 10px;
  height: 10px;
  transition: .2s .1s;
}

.menu_bar:hover img {
  opacity: 1;
  transform: scale(1.5, 1.5);
}

.bar a {
  width: 0px;
  height: 4px;
  border: 6px solid rgb(0, 204, 255);
  border-top-color: rgb(0, 119, 255);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: transparent;
  border-right-color: transparent;
  opacity: 0;
  position: absolute;
}

.menu_bar:hover a {
  opacity: 1;
}

.menu_bottom {
  background: transparent;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

div > button {
  border: none;
  color: white;
  font-size: 15px;
  background-color: transparent;
}

.menu_play {
  /* background-color: aqua; */
}

.menu_play img {
  width: 25px;
  height: 25px;
  transition: .5s .1s;
}

.menu_time {
  margin-right: 45%;
  color: rgb(255, 255, 255);
}

.menu_srt {
  /* height: 20px;
      background-color: black; */
  position: relative;
}

.barrage {
  position: absolute;
  top: 50%;
  border-radius: 2px;
  height: 3px;
  width: 30px;
  background-color: rgb(255, 255, 255);
  transform: rotate(45deg);
  box-shadow: 1.5px -1.5px 0px black;
}

.menu_srt b {
  font-size: 10px;
  padding: 2px;
  border-radius: 2px;
  color: white;
  background-color: black;
}

.menu_voice {
  /* background-color: aqua; */
}

.menu_voice img {
  /* vertical-align: middle;
      width: 17px;
      margin: 0 auto;
      height: 17px;
      transition: .5s .1s; */
  /* background-color: black; */
}

#videoSvg {
  width: 20px;
  height: 20px;
  fill: white;
}


#videoSvg:hover {
  animation-name: buttonScale;
  animation-duration: .5s;
  transform-origin: center;
}

#videoSvg:hover > #svg_1 {
  animation-iteration-count: 2;
  animation-name: videoOpacity;
  animation-delay: .4;
  animation-duration: .6s;
}

#videoSvg:hover > #svg_3 {
  animation-iteration-count: 2;
  animation-duration: .4s;
  animation-name: videoOpacity;
}

@keyframes videoOpacity {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#setting {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  fill: white;
}

#setting:hover {
  animation: buttonScale .5s linear;
}

#setting:hover > #settingSvg_1 {
  transform-origin: center;
  animation: settingRotate .5s linear;
}

@keyframes settingRotate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

#inPicture {
  vertical-align: middle;
  width: 15px;
  height: 15px;
  fill: white;
}

#inPictureSvg_2 {
  opacity: 0;
}

#inPicture:hover {
  transform-origin: 110% 110%;
  animation: buttonScale .3s linear;
}

#inPicture:hover > #inPictureSvg_2 {
  animation: inPictureXY .3s linear;
}

@keyframes inPictureXY {
  0% {
    opacity: 0;
  }

  25% {
    opacity: .5;

  }

  50% {
    opacity: 1;

  }

  75% {
    opacity: .5;

  }

  100% {
    opacity: 0;
  }
}


@keyframes buttonScale {
  0% {
    transform: scale(1, 1);
    /* opacity: 1; */
  }

  50% {
    transform: scale(.8, .8);
    /* opacity: 0; */
  }

  100% {
    transform: scale(1, 1);
    /* opacity: 1; */
  }
}


#widescreen {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  fill: white;
}

#widescreen:hover {
  transform-origin: center;
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreenScaleX;
}

#widescreen:hover > #widescreenSvg_2 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreeMobileX;
}

#widescreen:hover > #widescreenSvg_1 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreeMobile-X;
}

@keyframes widescreenScaleX {
  0% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(.8);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes widescreeMobileX {
  0% {
    transform: translateX(0px)
  }

  50% {
    transform: translateX(50px)
  }

  100% {
    transform: translateX(0px)
  }
}

@keyframes widescreeMobile-X {
  0% {
    transform: translateX(0px)
  }

  50% {
    transform: translateX(-50px)
  }

  100% {
    transform: translateX(0px)
  }
}

#fullScreen {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  fill: rgb(255, 255, 255);
}

#fullScreen:hover {
  animation-delay: .2;
  transform-origin: center;
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenScaleX;
}

#fullScreen:hover > #fullScreenSvg_1 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobileX-Y;
}

#fullScreen:hover > #fullScreenSvg_2 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobileXY;
}

#fullScreen:hover > #fullScreenSvg_3 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobile-X-Y;
}

#fullScreen:hover > #fullScreenSvg_4 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobile-XY;
}

@keyframes fullScreenScaleX {
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(.8, .8);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes fullScreenMobileXY {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(50px, 20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobileX-Y {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(50px, -20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobile-XY {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(-50px, 20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobile-X-Y {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(-50px, -20px)
  }

  100% {
    transform: translate(0px)
  }
}

#bar1 {
  position: absolute;
  bottom: 0px;
  width: 100%;
  outline: none;
  height: 2px;
  transition: .5s .1s;
  background-color: rgb(255, 255, 255);
  /* opacity:0; */
}

#bar1 .bar1Inside {
  height: 100%;
  background-color: aqua;
  transition: .1s .1s;
}

</style>
