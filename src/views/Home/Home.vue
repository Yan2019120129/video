<template>
  <div class="bili-main">
    <div class="toPromote">
      <div class="handover">
        <!--        点击获取推荐数据-->
        <button class="button_handover" @click="reqDate">
          <svg @animationend="cleanStyle" ref="svg_rotate" t="1669184368244" class="icon" viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2310" width="16" height="16">
            <path
                d="M960 416V192l-73.056 73.056a447.712 447.712 0 0 0-373.6-201.088C265.92 63.968 65.312 264.544 65.312 512S265.92 960.032 513.344 960.032a448.064 448.064 0 0 0 415.232-279.488 38.368 38.368 0 1 0-71.136-28.896 371.36 371.36 0 0 1-344.096 231.584C308.32 883.232 142.112 717.024 142.112 512S308.32 140.768 513.344 140.768c132.448 0 251.936 70.08 318.016 179.84L736 416h224z"
                p-id="2311"></path>
          </svg>
          <br>
          <span>换一组</span>
        </button>
      </div>
      <ToPromoteHead/>
    </div>
    <el-divider></el-divider>
    <div class="toPromote">
      <ToPromote></ToPromote>
    </div>
    <el-divider></el-divider>
    <div class="toPromote">
      <ToPromoteSecond><span>赛事</span></ToPromoteSecond>
    </div>
    <el-divider></el-divider>
    <div class="toPromote">
      <ToPromoteThird><span>国创</span></ToPromoteThird>
    </div>
    <el-divider></el-divider>
    <div class="toPromote">
      <ToPromoteThird></ToPromoteThird>
    </div>
  </div>
</template>
<script>
import ToPromoteHead from './Promote/ToPromoteHead'
import ToPromote from './Promote/ToPromote'
import ToPromoteSecond from './Promote/ToPromoteSecond'
import ToPromoteThird from './Promote/ToPromoteThird'

export default {
  name: 'Home',
  components: {
    ToPromote,
    ToPromoteSecond,
    ToPromoteHead,
    ToPromoteThird
  },
  data() {
    return {}
  },
  methods: {
    reqDate() {
      this.$refs.svg_rotate.style = "animation: rotate 2s;"
    },
    cleanStyle() {
      this.$refs.svg_rotate.style = "animation: ;"
    },
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
.handover {
  position: absolute;
  right: 0;
  transform: translateX(130%);
}

.button_handover {
  /*width: 40px;*/
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 10px 10px;
  background: #ffffff;
  cursor: pointer;
}

.button_handover span {
  margin-top: 10px;
  writing-mode: tb-rl;
}

.button_handover:hover {
  transition: 0.1s;
  background: #f5f5f5;
  box-shadow: 0 0 5px #f5f5f5;
}

/*.button_handover:focus svg{*/
/*  animation: rotate 2s;*/
/*}*/
/*.button_handover:focus{*/
/*  outline:none;*/
/*}*/

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.bili-main {
  width: 100%;
}

.toPromote {
  position: relative;
  margin: 3vh 0;
}
</style>