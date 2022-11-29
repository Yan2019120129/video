<template>
  <el-row :gutter="20">
    <el-col :span="10">
      <div class="grid-content bg-purple ">
        <div class="slideshow">
          <!--          轮播图-->
          <el-carousel :interval="5000" height="400px" arrow="always">
            <!--          <el-carousel-item v-for="item in 4" :key="item">-->
            <!--            <img src="@/assets/img/001.jpg" alt="">-->
            <!--          </el-carousel-item>-->
            <el-carousel-item>
              <div class="item">
                <img class="item1_img" src="@/assets/img/001.jpg" alt="">
                <div class="item1_img_describe linear-gradient1"><span>描述</span></div>
              </div>

            </el-carousel-item>
            <el-carousel-item>
              <div class="item ">
                <img class="item1_img" src="@/assets/img/002.jpg" alt="">
                <div class="item1_img_describe linear-gradient2"><span>描述</span></div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item ">
                <img class="item1_img" src="@/assets/img/003.jpg" alt="">
                <div class="item1_img_describe linear-gradient3"><span>描述</span></div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item ">
                <img class="item1_img" src="@/assets/img/004.jpg" alt="">
                <div class="item1_img_describe linear-gradient4"><span>描述</span></div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple-light">
        <div class="grid-container" ref="tph">
          <VideoView v-for="n in videoData " :key="n.video_id">
            <source :src="n.video_url">
          </VideoView>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import {mapState} from 'vuex'

export default {
  name: 'ToPromoteHead',
  components: {
    VideoView
  },
  data() {
    return {
      gridEle: null,
    }
  },
  props: [
    'videoData'
  ],
  mounted() {

  },
  computed: {
    ...mapState('layoutAbout', ["TPHCitems", "TPCitems"])
  },
  methods: {
    toHome() {
      this.$router.push({
        name: 'Home',
      })
    },
  }
}
</script>
<style scoped>

.slideshow {
  border-radius: 5px;
  overflow: hidden;
}

.grid-container {
  height: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-gap: 20px 20px;
  overflow: hidden;
  /*background: red;*/
}

.item1 {
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  grid-area: 1/1/3/3;
}

.item {
  height: 400px;
  position: relative;
  color: white;
}

.item1_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item1_img_describe {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
}

.linear-gradient1 {
  background: linear-gradient(to top, rgba(88, 90, 58, 1), rgba(125, 126, 101, 0.9), rgba(205, 206, 169, 0));
  /*filter: blur(5px);*/
}

.linear-gradient2 {
  background: linear-gradient(to top, rgb(25, 42, 19), rgba(45, 61, 28, 0.9), rgba(87, 116, 64, 0));
  /*filter: blur(5px);*/

}

.linear-gradient3 {
  background: linear-gradient(to top, rgb(35, 30, 22, 1), rgba(220, 173, 22, 0));
  /*filter: blur(5px);*/

}

.linear-gradient4 {
  background: linear-gradient(to top, rgb(30, 30, 29), rgba(37, 37, 34, 0.9), rgba(180, 182, 147, 0));
  /*filter: blur(5px);*/

}
</style>