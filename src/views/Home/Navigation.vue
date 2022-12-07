<template>
  <div class="Navigation">
    <div class="title el-row--flex">
      <slot name="title"></slot>
      <!--      <div class="el-row&#45;&#45;flex">-->
      <!--        <img src="@/assets/svg/bi.svg" alt="">-->
      <!--        <span>标题</span>-->
      <!--      </div>-->
      <!--      @animationend="isShow=!isShow"-->
      <i class="button_right el-icon-arrow-up" v-if="isShow" @click="isShow=!isShow" ref="i"></i>
      <i class="button_right el-icon-arrow-down" v-if="!isShow" @click="isShow=!isShow"></i>
    </div>
    <transition name="el-zoom-in-top">
      <div v-if="isShow" class="content">
        <slot name="content"></slot>
<!--        <div class="item">-->
<!--          <span>内容</span>-->
<!--          <br>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <span>内容</span>-->
<!--          <br>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <span>内容</span>-->
<!--          <br>-->
<!--        </div>-->
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    ifShow() {
      this.isShow = this.isShow
      if (this.isShow) {
        this.$refs.i.style = "transform: rotate(-180deg);"
      }
    }
  }
}
</script>

<style scoped>
.Navigation {
  margin: 0 5%;
}

.title {
  border: 1px solid #cdf4ff;
  height: 70px;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.title > * {
  padding-left: 20%;
  line-height: 70px;
  font-weight: bold;
}

.title:hover {
  background: #e5fff1;
}

.button_right {
  position: absolute;
  right: 5%;
  padding: 0;
  cursor: pointer;
}

.button_right:hover {
  animation: 1s linear rotate;
}

@keyframes rotate {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }

}

.content > * {
  border: 1px solid #ffe5e5;
  height: 70px;
}

.content .item:hover {
  background: #eef6ff;

}

.content .item > * {
  padding-left: 22%;
  line-height: 70px;

}

/*.item {*/
/*  border: 1px solid #ffe5e5;*/
/*  height: 70px;*/
/*}*/

/*.item:hover {*/
/*  background: #eef6ff;*/
/*}*/

/*.item > * {*/
/*  padding-left: 22%;*/
/*  line-height: 70px;*/
/*}*/
</style>