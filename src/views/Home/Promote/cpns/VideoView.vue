<template>
<!--    <div class="box" @click="toVideoPlay">-->
    <div class="box" >
    <div class="head">
      <div class="videoPlay" @click="videoPlay" @mouseenter="videoPlay" @mouseleave="videoPlay">
        <picture class="box-picture" ref="pic">
          <slot name="img"></slot>
        </picture>
<!--        <video ref="vid" class="box-video" muted="muted" preload="none">-->
        <video ref="vid" class="box-video" muted="muted" preload="none">
          <slot name="video"></slot>
        </video>
      </div>
    </div>
    <div class="foot">
      <slot name="describe"></slot>
      <slot name="tile"></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'VideoView',
  data() {
    return {
      picture: null,
      isPlay: true,
      video: null,
      showClothTimer: null,
    }
  },
  props: [
    "videoData"
  ],
  mounted() {
    this.video = this.$refs.vid;
    this.picture = this.$refs.pic;
  },
  methods: {
    videoPlay() {
      this.isPlay = !this.isPlay;
      clearTimeout(this.showClothTimer);
      if (!this.isPlay && this.video.paused) {
        this.showClothTimer = setTimeout(() => {
          this.picture.style = 'opacity:0;';
          this.video.play();
        }, 1000);
      } else {
        this.picture.style = 'opacity:1';
        this.video.pause();
        this.video.currentTime = null;
      }
    },
    // toVideoPlay() {
    //   this.$router.push({
    //     name: "videoPlay",
    //     query: {
    //       videoData: this.videoData
    //     }
    //   })
    // }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.head {
  width: 100%;
  height: 60%;
}

.videoPlay {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}


.box-video {
  height: 100%;
  width: 100%;
}

.box-picture {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all .1s linear;
  opacity: 1;
}

.box-picture img,
source {
  width: 100%;
  height: 100%;
  transition: all .1s linear;
}


.foot {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.foot_head {
  font-size: 1rem;
  /* 在恰当的断字点进行换行 */
  word-break: break-all;
  /* 超出范围隐藏 */
  overflow: hidden;
  /* 文字超出用省略号 */
  text-overflow: ellipsis;
  /* 盒子模型 */
  display: -webkit-box;
  /* 显示的文本行数 */
  -webkit-line-clamp: 2;
  /* 子元素的垂直排列方式 */
  -webkit-box-orient: vertical;
}

.foot_end {
  margin-top: 5px;
  width: 100%;
}
</style>