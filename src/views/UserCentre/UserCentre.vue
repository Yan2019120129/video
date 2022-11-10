<template>
  <div class="user_center">
    <div class="user_center_top">
      <img class="user_center_top_img" alt="" src="@/assets/img/UserCenter/user_cneter.webp">
      <div class="surround_padding">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="first">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">主页</span>
                </a>
              </span>
              <div class="play_video_show_left">
                <el-upload
                    class="upload-demo"
                    drag
                    action="http://localhost:2090/upload"
                    multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">上传视频</div>
                </el-upload>
                <el-divider></el-divider>
                <h4>我的视频专栏</h4>
                <el-divider></el-divider>
                <h4>我的专栏</h4>
                <el-divider></el-divider>
                <h4>我的集合视频专栏</h4>
                <el-divider></el-divider>
                <h4>我的收藏</h4>
              </div>
              <div class="play_video_show_right"></div>
            </el-tab-pane>
            <el-tab-pane name="second">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">动态</span>
                </a>
              </span>
              动态
            </el-tab-pane>
            <el-tab-pane name="third">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">投稿</span>
                </a>
              </span>
              投稿
            </el-tab-pane>
            <el-tab-pane name="fourth">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">集合和列表</span>
                </a>
              </span>
              集合和列表
            </el-tab-pane>
            <el-tab-pane name="fifth">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">收藏</span>
                </a>
              </span>
              收藏
            </el-tab-pane>
          </el-tabs>

        </template>

      </div>


    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.user_center {
  /*background: white;*/
}

.user_center_top_img {
  width: 100%;
}

.surround_padding {
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
}


.n-btn > img {
  vertical-align: bottom;
}

.n-inner {
  display: flex;
  align-items: center;
}

.n-float_right {
  display: flex;
  align-items: center;
  order: 3;
}

.play_video_show_left {
  float: left;
  width: 65%;
  /*padding-left: 10%;*/
  height: 100%;
  /*background: #e3e3e3;*/
}

.play_video_show_right {
  float: right;
  width: 35%;
  /*padding-right: 10%;*/
  height: 100%;
  /*background: #cbcbcb;*/
}
</style>