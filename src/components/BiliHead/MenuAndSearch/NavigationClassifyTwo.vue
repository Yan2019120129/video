<template>
  <div class="bili-head_end">
    <div class="bili-head_navigation">
      <div class="navigation_left">
        <div>
          <img src="@/assets/svg/activity.svg" alt=""><br>
          <a href="">动态</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt=""><br>
          <a href="">热门</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt=""><br>
          <a href="">频道</a>
        </div>
      </div>
      <div class="navigation_middle">
        <SmallMenuRight v-for="p in myData.slice(0,10)" :key="p.id">
          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>
          <button slot="button">{{ p.name }}</button>
        </SmallMenuRight>
        <!--        <SmallMenuBelow v-for="p in myData.slice(11,22)" :key="p.id">-->
        <!--          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>-->
        <!--          <button slot="button">{{ p.name }}</button>-->
        <!--        </SmallMenuBelow>-->
      </div>
      <div class="navigation_right">
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
        <div>
          <img src="@/assets/svg/activity.svg" alt="">
          <a href="">测试</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testData from "@/assets/test.json";
import SmallMenuRight from "@/components/BiliHead/MenuAndSearch/cpns/SmallMenuRight";

export default {
  name: "NavigationClassifyTwo",
  components: {
    SmallMenuRight
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
  /*width: 70%;*/
}

.bili-head_end {
  /*width: 100%;*/
}

.bili-head_navigation {
  padding-top: 10px;
  /*width: 150px;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /*background: white;*/
}


.navigation_left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.navigation_left img {
  border-radius: 20px;
  width: 40px;
  height: 40px;
}


.navigation_middle {
  /*border-right: 1px solid black;*/
  /*width: 100%;*/
  height: 100%;
  /* overflow: hidden; */
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(1, minmax(70px, 1fr));
  gap: 10px 10px;

}

.navigation_right {
  /*padding-left: 2vw;*/
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px 10px;
}

.navigation_right > div {
  /*margin: auto;*/
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