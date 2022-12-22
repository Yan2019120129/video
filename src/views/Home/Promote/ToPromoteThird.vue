<template>
  <div class="ToPromoteThird">
    <div class="ToPromoteThird-left">
      <div class="ToPromote-title">
        <slot>推广</slot>
      </div>
      <div class="grid-container">
        <div ref="VVI" @click="toVideoPlay(n)" class="item" v-for="n in videoCompetition" :key="n.videoId">
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
    </div>
    <div class="ToPromoteThird-rigth" v-show="ToPromoteThirdRigthHeadIsShow">
      <div class="ToPromoteThird-rigth-head">
        <a>直播排行</a>
        <a>关注主播</a>
        <a>为你推荐</a>
      </div>
      <div class="TopromoteThird-right-main">
        <ul class="right-main-ul">
          <li class="right-main-ul-li" v-for="index in 5">
            <div>
              <img src="@/assets/img/001.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import {mapState} from "vuex";
import {getVideoLiveStreaming} from "@/api/common";
import {getVideo, setVideo} from "@/utility/manageDate";

export default {
  name: 'ToPromoteThird',
  components: {
    VideoView
  },
  data() {
    return {
      ToPromoteThirdRigthHeadIsShow: true,
      ToPromoteThirdLeftItems: 21,
      videoCompetition: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let value = getVideo("videoCompetition")
      if (value) { // 判断本地缓存是否有数据，没有数据则从新获取
        this.videoCompetition = value
      } else {
        this.getData()
      }
    },
    getData() {
      // 获取直播模块数据
      getVideoLiveStreaming().then(req => {
            let video = req.data["records"]
            this.videoCompetition = video
            setVideo("videoCompetition", video)
          },
          error => {
            console.log("错误信息", error.message)
          }
      )
    },
 toVideoPlay(value) {
  this.$router.push({
    name: "videoPlay",
    query: {
      userId: value.userId,
      videoId: value.videoId,
    }
  })
},
  },
  computed: { // 计算属性
    ...
        mapState("loginAbout", ["TPHCitems", "TPCitems"])
  }
}
</script>
<style scoped>
.ToPromoteThird {
  display: flex;
  column-gap: 10px;
  flex-direction: row;
}

.ToPromoteThird-left {
  width: 100%;
}

.ToPromote-title {
  background-color: #d1fffe;
  padding: 10px 0 10px 10px;
  border-radius: 3px;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /*grid-template-rows: repeat(3, 250px);*/
  grid-gap: 50px 20px;
}

.ToPromoteThird-rigth {
  width: 25%;
}

.ToPromoteThird-rigth-head {
  display: flex;
  flex-direction: row;
}

.ToPromoteThird-rigth-head a {
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