<template>
  <div class="item_menu">
    <p>登陆后你可以：</p>
    <div class="recommend_message">
      <p><img src="@/assets/img/tv.png"><span>免费观看高清视频</span></p>
      <p><img src="@/assets/img/tv.png"><span>多端同步播放记录</span></p>
      <p><img src="@/assets/img/tv.png"><span>发表弹幕/评论</span></p>
      <p><img src="@/assets/img/tv.png"><span>热门番剧影视看不停</span></p>
    </div>
    <el-button type="primary" @click="open">立即登录</el-button>
    <p class="login_hint">
      <a>首次使用？</a><a href="">点我注册</a>
    </p>
  </div>
</template>
<script>

import {mapMutations} from "vuex";

export default {
  name: "NoLoginMenu",
  data() {
    return {
      showLogin: false
    }
  },
  methods: {
    ...mapMutations("loginAbout", ["ifLoginInterface"]),
    open() {
      this.ifLoginInterface(true)
    }
  },

}
</script>
<style scoped>
.item_menu {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  width: 23rem;
  height: 15rem;
  border-radius: .5rem;
  background-color: white;
  box-shadow: 0 0 15px #6a6a6a;
}

.recommend_message {
  display: grid;
  grid-template-columns: repeat(2, 1FR);
}

.recommend_message p {
  text-align: center;
}

.recommend_message p img {
  vertical-align: middle;
  display: inline;
  width: 20px;
  height: 20px;
}

.login_hint {
  /*使提示信息居中*/
  text-align: center;
}
</style>