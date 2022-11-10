<template>
  <div class="bili-head_end">
    <div class="bili-head_navigation">
      <div class="navigation_left">
        <div>
          <img src="@/assets/img/001.jpg" alt=""><br>
          <a href="">动态</a>
        </div>
        <div>
          <img src="@/assets/img/001.jpg" alt=""><br>
          <a href="">热门</a>
        </div>
        <div>
          <img src="@/assets/img/001.jpg" alt=""><br>
          <a href="">频道</a>
        </div>
      </div>
      <div class="navigation_middle">
        <SmallMenuUp v-for="(p, index) in myData.slice(0,11)" :key="p.id">
          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>
          <button slot="button">{{ p.name }}</button>
        </SmallMenuUp>
        <SmallMenuBelow v-for="(p, index) in myData.slice(11,22)" :key="p.id">
          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>
          <button slot="button">{{ p.name }}</button>
        </SmallMenuBelow>
      </div>
      <div class="navigation_right">
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
        <div>
          <svg></svg>
          <a href="">测试</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallMenuUp from '@/components/BiliHead/MenuAndSearch/cpns/SmallMenuUp.vue'
import testData from "@/assets/test.json";
import SmallMenuBelow from "@/components/BiliHead/MenuAndSearch/cpns/SmallMenuBelow";

export default {
  name: "NavigationClassify",
  components: {
    SmallMenuBelow,
    SmallMenuUp
  },
  data() {
    return {
      myData: testData.test,
    }
  }
}
</script>

<style scoped>

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

.bili-head_end {
  width: 100%;
}

.bili-head_navigation {
  padding: 2vh 10%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
}

.navigation_left {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.navigation_left > div {
  margin-right: 1rem;
}

.navigation_left img {
  border-radius: 20px;
  width: 40px;
  height: 40px;
}


.navigation_middle {
  border-right: 1px solid black;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  display: grid;
  padding: 0 2vw;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-template-rows: repeat(max(2), 25px);
  gap: 10px 10px;

}

.navigation_right {
  padding-left: 2vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 10px;
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