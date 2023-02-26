<template>
  <div class="user_center_main">
<!--    <MenuAndSearchTwo></MenuAndSearchTwo>-->
    <div class="user_center">
      <div class="user_center_top">
        <!--        <img class="user_center_top_img" alt="" src="@/assets/img/UserCenter/user_cneter.webp">-->
        <el-carousel :autoplay="false" :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <!--            <h3 class="medium">{{ item }}</h3>-->
            <div class="img_slideshow">
              <img src="@/assets/img/004.jpg" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
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
                  <el-row>
                    <el-col :span="24">
                      <div class="upload_border">
                        <i class="el-icon-upload" style="font-size: 80px; color: #c0c4cc"></i>
                        <div class="text_size" @click="$router.push('/upload')">上传视频</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-divider></el-divider>
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple">
                        <h3>我的视频专栏 <a href=""></a></h3>
                      </div>
                    </el-col>
                    <el-col :span="12" v-if="isShow">
                      <div class="grid-content bg-purple-light">
                        <h5>你还没有上传视频~
                          <router-link to="/Upload" href="">立即上传</router-link>
                        </h5>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="20" :offset="1">
                      <MyGrid @myGridStateBack="myGridState"></MyGrid>
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
                <div class="collect">
                  <el-row>
                    <el-col :span="3">
                      <el-col :span="24">
                        <div class="navigation"><span>新建收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>感悟</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>后端学习</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>程序员专栏</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>话题收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>专题收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>专栏收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>相簿收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>课程收藏夹</span></div>
                      </el-col>
                      <el-col :span="24">
                        <div class="navigation"><span>笔记本收藏夹</span></div>
                      </el-col>

                    </el-col>
                    <el-col :span="21">
                      <div class="grid-content bg-purple-light">
                        <el-col :span="24">
                          <div class="tv_top">
                            <el-row>
                              <el-col :span="8" :offset="1">
                                <div class="collect_img">
                                  <img src="@/assets/img/003.jpg" alt="">
                                </div>
                              </el-col>

                              <el-col :span="14">
                                <div class="grid-content bg-purple-light">
                                  <p>默认收藏夹</p>
                                  <p>创建者：諕人播放数：0</p>
                                  <p>15个内容·公开</p>
                                  <p>播放全部视频</p>
                                </div>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row>
                              <el-col :span="23" :offset="1">
                                <div class="grid-content bg-purple-dark">
                                  <LikeGrid>
                                  </LikeGrid>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </el-row>
                </div>
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
import LikeGrid from "@/views/UserCollect/LikeGrid";
import MyGrid from "@/views/UserCollect/MyGrid";

export default {
  data() {
    return {
      drawer: false,
      activeName: 'first',
      uploadData: "",
      isShow: true,
    };
  },
  components: {
    MenuAndSearchTwo,
    LikeGrid,
    MyGrid,
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
    myGridState: function (msg) {
      console.log("msg", msg)
      this.isShow = msg
    }
  }
  ,
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
  padding-bottom: 80px;
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
  width: 100%;
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

/* 收藏-------------------------------------*/
.collect {
  width: 100%;
}

.navigation {
  height: 50px;
  border-radius: 5px;
}

.navigation:hover {
  background-color: #d7d7d7;
}

.navigation span {
  padding-left: 10px;
  line-height: 50px;
}

.tv_top {
  height: 200px;
}

.collect_img {
  height: 100%;
  overflow-x: hidden;
}

.collect_img img {
  height: 150px;
  width: 220px;
  border-radius: 10px;
  /*width: 200px;*/
}

.img_slideshow {
  height: 100%;

  /*overflow: hidden;*/
}

.img_slideshow img {
  max-width: 100%;
  height: auto;
}

.upload_border {
  height: 200px;
  width: 350px;
  border: 1px dashed #b6b6b6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  /*font-size: 80px;*/
}

.upload_border:hover {
  border: 1px dashed #00d9ff;
}

.text_size {
  font-size: 10px;
  /*Text-decoration: underline;*/
  cursor: pointer;
  color: #00d9ff;
}
</style>