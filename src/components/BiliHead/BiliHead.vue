<template>
  <div class="bili-head">
    <div class="bili-head_top">
      <transition name="MenuAndSearch">
        <MenuAndSearch v-if="!ifShowHeadBackground"/>
      </transition>
      <transition name="MenuAndSearchTwo">
        <MenuAndSearchTwo v-if="ifShowHeadBackground"/>
      </transition>
      <img class="bili-head-img" src="@/assets/img/headImg.png">
    </div>
    <NavigationClassify/>
  </div>
</template>
<script>
import SmallMenuUp from '@/components/BiliHead/MenuAndSearch/cpns/SmallMenuUp.vue'
import SmallMenuBelow from '@/components/BiliHead/MenuAndSearch/cpns/SmallMenuBelow.vue'
import MenuAndSearch from "@/components/BiliHead/MenuAndSearch/MenuAndSearch";
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo";
import NavigationClassify from "@/components/BiliHead/MenuAndSearch/NavigationClassify";

export default {
  name: "BiliHead",
  components: {
    MenuAndSearchTwo,
    SmallMenuUp,
    SmallMenuBelow,
    MenuAndSearch,
    NavigationClassify
  },
  data() {
    return {
      input: '',
      ifShowHeadBackground: false,
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
    ifShowHeadBackgroundMethod() {
      // 滚动条距文档顶部的距离
      let scrollTop = document.querySelector("html").scrollTop || 0
      if (scrollTop > 80) {
        console.log("显示")
        this.ifShowHeadBackground = true
      } else {
        console.log("隐藏")
        this.ifShowHeadBackground = false
      }
    }
  }
}
</script>
<style scoped>

.bili-head {
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
</style>