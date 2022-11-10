<template>
  <div class="bili-main">
    <div class="toPromote">
      <ToPromoteHead :videoData="videoData"/>
    </div>
    <div class="toPromote">
      <ToPromote :videoData="videoData"></ToPromote>
    </div>
    <div class="toPromote">
      <ToPromoteSecond :videoData="videoData"><span>赛事</span></ToPromoteSecond>
    </div>
    <div class="toPromote">
      <ToPromoteThird :videoData="videoData"><span>国创</span></ToPromoteThird>
    </div>
    <div class="toPromote">
      <ToPromoteThird :videoData="videoData"></ToPromoteThird>
    </div>
  </div>
</template>
<script>
import ToPromoteHead from './Promote/ToPromoteHead'
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import ToPromote from './Promote/ToPromote'
import ToPromoteSecond from './Promote/ToPromoteSecond'
import ToPromoteThird from './Promote/ToPromoteThird'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    VideoView, ToPromote, ToPromoteSecond, ToPromoteHead, ToPromoteThird
  },
  data() {
    return {
      videoData: require("@/assets/video/test.mp4"),
    }
  },
  mounted() {
    this.toPromoteContainer(window.document.body.clientWidth * 0.8 / 220)
  },
  methods: {
    ...mapMutations("layoutAbout", {toPromoteContainer: "toPromoteContainer"}),
    ...mapState('layoutAbout', ["TPHCitems", "TPCitems"])
  },
  activated() {
    console.log('News组件被激活了')
  },
  deactivated() {
    console.log('News组件失活了')
  },
}
</script>
<style scoped>
.bili-main {
  width: 100%;
}

.toPromote {
  margin: 3vh 0;
}
</style>