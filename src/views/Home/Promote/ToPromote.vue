<template>
  <div class="ToPromote">
    <div class="ToPromote-title">推广</div>
    <div class="grid-container" ref="tp">
      <div class="item" v-for="index in 6">
        <VideoView>
          <source :src="videoData">
        </VideoView>
      </div>
    </div>
  </div>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'

import {mapState} from "vuex"

export default {
  name: 'ToPromote',
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
  computed: { // 计算属性
    ...mapState("loginAbout", ["TPHCitems", "TPCitems"])
  },
  methods: { // 方法

  }
}
</script>
<style scoped>
.ToPromote {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ToPromote-title {
  padding: 10px 0;
}

.grid-container {
  width: 100%;
  display: grid;
  height: 200px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px 20px;
}
</style>