<template>
  <div class="item_menu">
    <div class="item_menu_left">
      <div class="item_menu-head">热点直播:</div>
      <ul class="item_menu_left_ul">
        <li v-for="index in 6">
          <div class="portrait">
            <img src="@/assets/img/001.jpg" alt="">
            <a href="">动态</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="item_menu_right">
      <div class="item_menu-head">热门活动:</div>
      <ul class="item_menu_right_ul">
        <li><img src="@/assets/img/001.jpg" alt=""></li>
        <li><img src="@/assets/img/001.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.item_menu {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  width: 30rem;
  height: 15rem;
  border-radius: .5rem;
  background-color: white;
  box-shadow: 0 0 15px #6a6a6a;
}

.show-tem_menu {
  transition: all 1 linear;
  opacity: 1;
}

.item_menu-head {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.item_menu_left {
  width: 60%;
}

.item_menu_left_ul {
  padding: 0;
  list-style-type: none;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-flow: row wrap;
}

.item_menu_left_ul li {
  flex: 0 0 20%;
  margin: 1rem;
}

.item_menu_right {
  width: 40%;
}

.item_menu_right_ul {
  width: 80%;
  padding: 0;
  margin: auto;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.item_menu_right_ul li {
  margin: .5rem 0;
  width: 100%;
}

.item_menu_right_ul li img {
  border-radius: .5rem;
  width: 100%;
  height: 100%;
}

.portrait {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portrait img {
  border-radius: 20px;
  width: 40px;
  height: 40px;
}
</style>