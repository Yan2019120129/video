<template>
  <div class="user_center_main">
    <MenuAndSearchTwo></MenuAndSearchTwo>
    <div class="user_center">
      <div class="user_center_top">
        <img class="user_center_top_img" alt="" src="@/assets/img/UserCenter/user_cneter.webp">
        <div class="surround_padding">
          <template>
            <el-tabs v-model="activeName">
              <el-tab-pane name="first">
              <span slot="label">
                <a class="n-inner">
                  <img src="@/assets/svg/home.svg" alt="">
                  <span class="n-text">主页</span>
                </a>
              </span>
                <div class="play_video_show_left">
                  <!--                                :headers="config"-->
                  <!--                                action="http://localhost:9527/nacos-video-upload/upload/uploading"-->
                  <!--                                :headers="token"-->
                  <!--                                :http-request="vue_upload"-->
                  <!--                                :before-upload="placeUploadDate"-->
                  <el-upload
                      drag
                      action=""
                      multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">上传视频</div>
                  </el-upload>

                  <el-divider></el-divider>
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple">
                        <h3>我的视频专栏 <a href=""></a></h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light">
                        <h5>你还没有上传视频~
                          <router-link to="/Upload" href="">立即上传</router-link>
                        </h5>
                      </div>
                    </el-col>
                  </el-row>
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
  </div>
</template>
<script>

import {mapState} from "vuex";
import {javaUpload} from "@/api";
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo";

export default {
  data() {
    return {
      drawer: false,
      activeName: 'first',
      uploadData: "",
    };
  },
  components: {
    MenuAndSearchTwo
  },
  methods: {
    vue_upload(value) {
      console.log("接收的数据", value)
      console.log("token数据", this.token)
      console.log("解析的token数据", this.analysisToken[0])
      // 后端接收的是表单类型'Content-Type': 'multipart/form-data'，必须要使用FormData()类格式化数据才能传输成功
      const form = new FormData();
      form.append("file", value.file);
      form.append("id", this.analysisToken.userIdOrPhone[0]);
      form.append("phone", this.analysisToken.userIdOrPhone[1]);
      // form.append("id", this.analysisToken.userIdOrPhone[0]);
      // form.append("phone", this.analysisToken.userIdOrPhone[1]);
      javaUpload(form).then(
          response => {
            console.log("返回成功")
            console.log("返回的数据", response?.data)
          }, error => {
            console.log(error.response?.data);
            console.log(error.response?.status);
            console.log("错误信息", error)
          })
    },
  },
  computed: {
    ...mapState("loginAbout", ["token", "analysisToken"]),
  }
}
;
</script>

<style scoped>
.user_center_main {
  width: 100%;
}

.user_center {
  /*background: white;*/
  width: 80%;
  margin: auto;
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