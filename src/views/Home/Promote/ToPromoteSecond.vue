<template>
  <div class="ToPromoteSecond">
    <div class="ToPromoteSecond-left">
      <div class="ToPromote-title">
        <slot>推广</slot>
      </div>
      <div class="grid-container">
        <div ref="VVI" @click="toVideoPlay(n)" class="item" v-for="n in videoAimtron" :key="n.videoId">
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
    <div class="ToPromoteSecond-rigth" v-show="ToPromoteSecondRigthHeadIsShow">
      <div class="ToPromoteSecond-rigth-head">
        <a>直播排行</a>
        <a>关注主播</a>
        <a>为你推荐</a>
      </div>
      <div class="TopromoteSecond-right-main">
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
import {getRandomFindVideoPage, getVideoPage} from "@/api/common";

export default {
  name: 'ToPromoteSecond',
  components: {
    VideoView
  },
  data() {
    return {
      ToPromoteSecondRigthHeadIsShow: true,
      ToPromoteSecondLeftItems: 14,
      videoAimtron: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getData()
    },
    getData() {
      // "dataCount": 10,
      // 获取国创模块数据
      let data = {
        "limit": 1,
        "showDataContentId": 2
      }
      // 获取国创内容模块数据
        getRandomFindVideoPage(data).then(req => {
            let video = req.data['data']
            this.videoAimtron = video
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  /*grid-template-rows: repeat(2, minmax(15%, 1fr));*/
  grid-gap: 20px 20px;
}

/*!* 默认情况下，显示所有12个网格 *!*/
/*.grid-container {*/
/*  display: grid;*/
/*  grid-template-columns: repeat(12, 1fr);*/
/*  grid-gap: 10px;*/
/*}*/


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