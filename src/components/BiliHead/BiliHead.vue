<template>
  <div class="bili-head">
    <div class="bili-head_top">
      <!--              <MenuAndSearch v-if="!ifShowNavigationBars"/>-->
      <div ref="img_style" class="img_style">
        <!--        <img class="bili-head-img" src="@/assets/img/headImg.png">-->
        <!--                <BackgroundAnimation></BackgroundAnimation>-->
        <!--        <div ref="img_shade" class="img_shade"></div>-->
      </div>
    </div>
    <i v-if="!isShow" class="el-icon-arrow-up img_button" @click="adjustStyle(false)"></i>
    <i v-if="isShow" class="el-icon-arrow-down img_button" @click="adjustStyle(true)"></i>
    <NavigationClassify/>
  </div>
</template>
<script>
import SmallMenuUp from '@/components/BiliHead/MenuAndSearch/cpns/SmallMenuUp.vue'
import SmallMenuBelow from '@/components/BiliHead/MenuAndSearch/cpns/SmallMenuBelow.vue'
import MenuAndSearch from "@/components/BiliHead/MenuAndSearch/MenuAndSearch";
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo";
import NavigationClassify from "@/components/BiliHead/MenuAndSearch/NavigationClassify";
import {mapActions, mapState} from "vuex";
import BackgroundAnimation from "@/components/BiliHead/MenuAndSearch/BackgroundAnimation"

export default {
  name: "BiliHead",
  components: {
    MenuAndSearchTwo,
    SmallMenuUp,
    SmallMenuBelow,
    MenuAndSearch,
    NavigationClassify,
    BackgroundAnimation
  },
  data() {
    return {
      input: '',
      isShow: true,
    }
  },
  mounted() {
    const debounce = (fn, delay) => {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
          clearTimeout(timer);
        }, delay);
      }
    };
    const cancalDebounce = debounce(this.ifShowHeadBackgroundMethod, 100);
    window.addEventListener("scroll", cancalDebounce)
  },
  methods: {
    ...mapActions("layoutAbout", {aIfNavigationBars: "aIfNavigationBars"}),
    ifShowHeadBackgroundMethod() {
      // 滚动条距文档顶部的距离
      let scrollTop = document.querySelector("html").scrollTop || 0
      if (scrollTop > 80) {
        console.log("显示")
        this.aIfNavigationBars(true)
        // this.ifShowHeadBackground = true
      } else {
        console.log("隐藏")
        this.aIfNavigationBars(false)
        // this.ifShowHeadBackground = false
      }
    },
    adjustStyle(value) {
      if (value) {
        this.$refs.img_style.style = "height: 300px;"
        // this.$refs.img_shade.style = "height: 80px;"
        this.isShow = false
      } else {
        this.$refs.img_style.style = "height: 0px;"
        // this.$refs.img_shade.style = "height: 0px;"
        this.isShow = true
      }
    }
  },
  computed: {
    ...mapState("layoutAbout", {ifShowNavigationBars: "ifShowNavigationBars"})
  }
}
</script>
<style scoped>

.bili-head {
  z-index: 11;
  position: relative;
  display: block;
  width: 100%;
}

.bili-head-img {
  display: block;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  object-fit: cover;
}


.bili-head_banner_left-ul li {
  margin-left: 1rem;
  height: 100%;
  color: white;
  align-content: center;
}


.head_search > input {
  border: transparent;
  outline: none;
}

.bili-head_banner_right-ul li {
  margin-right: 1rem;
  color: white;
}

.bili-head_banner_right-ul li a {
  font-size: 10px;
}

.bili-head_banner form {
  color: white;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.bili-head_banner form input {
  width: 70%;
}

.navigation_left > div {
  margin-right: 1rem;
}

.navigation_left img {
  border-radius: 20px;
  width: 40px;
  height: 40px;
}

.navigation_right > div {
  margin: auto;
  white-space: nowrap;
  /* 内容不换行 */
}

.navigation_right svg {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.navigation_right a {
  margin: auto 0;
}

.img_style {
  position: relative;
  /*background: #000000;*/
  background: -webkit-radial-gradient(center, ellipse cover, #ffffff 0%, #f2efd9 100%);
  height: 0px;
  overflow: hidden;
  transition: 2s;
}

.img_shade {
  width: 100%;
  height: 0px;
  position: absolute;
  background: #d7f8f3;
  border: 1px solid #f1f1f1;
  transition: 2s;
  top: 0;
}

.img_button {
  /*position: absolute;*/
  /*transform: translateY(100%);*/
  margin: 0 50%;
  cursor: pointer;
  padding: 0 10px 10px 10px;
  /*height: 30px;*/
  /*width: 30px;*/
}

.img_button:hover {
  animation: float_up_or_down 1s;
}

@keyframes spread {
  0% {
    height: 100%;
  }

  100% {
    height: 40px;
  }
}

@keyframes float_up_or_down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>