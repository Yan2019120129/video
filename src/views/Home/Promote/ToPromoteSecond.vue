<template>
  <div class="ToPromoteSecond">
    <div class="ToPromoteSecond-left">
      <div class="ToPromote-title">
        <slot>推广</slot>
      </div>
      <div class="grid-container">
        <div ref="VVI" class="item" v-for="index in 12">
          <VideoView>
            <source :src="videoData">
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

export default {
  name: 'ToPromoteSecond',
  components: {
    VideoView
  },
  data() {
    return {
      ToPromoteSecondRigthHeadIsShow: false,
      ToPromoteSecondLeftItems: 14,
    }
  },
  props: [
    'videoData'
  ],
  computed: {
    ...mapState('layoutAbout', ["TPHCitems", "TPCitems"])
  },
  mounted() {

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
  padding: 10px 0;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 200px);
  grid-gap: 20px 20px;
}

.ToPromoteSecond-rigth {
  width: 20%;
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