<template>
  <div class="ToPromoteSecond">
    <div class="ToPromoteSecond-left">
      <div class="grid-container">
        <div ref="VVI" @click="toVideoPlay(n)" class="item" v-for="n in videoMy" :key="n.videoId">
          <VideoView :videoData="n">
            <img slot="img" :src="`pav/${n.videoCoverImgUrl}`">
            <source slot="video" :src="`pav/${n.videoUrl}`">
            <div slot="describe" class="foot_head" style="text-overflow:ellipsis;">
              {{ n.videoBriefIntroduction }}
            </div>
            <div slot="tile" class="foot-end">
              <a>{{ n.videoTitle }}</a>
            </div>
          </VideoView>
        </div>
      </div>

        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
  </div>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import {mapState} from "vuex";
import {getVideoMy} from "@/api/common";
import {getTokenValue} from "@/utility/manageDate";

export default {
  name: 'MyGrid',
  components: {
    VideoView
  },
  data() {
    return {
      ToPromoteSecondRigthHeadIsShow: true,
      ToPromoteSecondLeftItems: 14,
      videoMy: {}
    }
  },
  mounted() {
    let formData = new FormData();
    formData.append("userId", getTokenValue("userId"))
    // 获取用户收藏视频的信息
    getVideoMy(formData).then(req => {
          console.log("getVideoMy返回数据", req.data)
          this.videoMy = req.data
      this.$emit("myGridStateBack",false)
        },
        error => {
          console.log("错误信息", error.message)
        }
    )
  },
  methods: {
    toVideoPlay(value) {
      console.log("运行")
      this.$router.push({
        name: "videoPlay",
        query: {
          userId: value.userId,
          videoId: value.videoId,
        }
      })
    },
  },
  computed: {
    ...mapState('layoutAbout', ["TPHCitems", "TPCitems"]),
  }
}
</script>
<style scoped>
.ToPromoteSecond {
  display: flex;
  column-gap: 10px;
  flex-direction: row;
}

.ToPromoteSecond-left {
  width: 100%;
}

.ToPromote-title {
  background-color: #fffce0;
  padding: 10px 0 10px 10px;
  border-radius: 3px;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18%, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(210px, 220px));
  grid-gap: 30px 30px;
}

.ToPromoteSecond-rigth {
  width: 25%;
}

.ToPromoteSecond-rigth-head {
  display: flex;
  flex-direction: row;
}

.ToPromoteSecond-rigth-head a {
  padding: 10px 10px 10px 0;

}

.right-main-ul {
  counter-reset: section;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid rgb(170, 170, 170);
  border-radius: 10px;
}

.right-main-ul-li:last-child {
  border-bottom: transparent;
}

.right-main-ul-li {
  height: 60px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(170, 170, 170);
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right-main-ul-li::before {
  margin-left: 10px;
  counter-increment: section;
  content: counter(section);
  font-size: 25px;
  font-style: italic;
}


.right-main-ul-li div {
  margin-left: 20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.right-main-ul-li img {
  height: 100%;
}
</style>