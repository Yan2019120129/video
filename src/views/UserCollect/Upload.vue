<template xmlns:el-col="http://www.w3.org/1999/xhtml">

  <div class="Upload">
    <el-container>
      <!--      头部-->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <span class="align-center" @click="backHome">
                <svg t="1668945298455" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2209" width="20" height="20">
                  <path
                      d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z"
                      p-id="2210"></path>
                </svg>
                <span>首页</span>
              </span>

            </div>

          </el-col>
          <el-col :span="6" :offset="12">
            <div class="grid-content bg-purple">用户</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="Change_Case">
        <!--        左边导航栏-->
        <el-aside width="">
          <el-col :span="12">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  <span>首页&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>内容管理</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>数据中心</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>粉丝管理</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
              </el-submenu>

            </el-menu>
          </el-col>
        </el-aside>
        <el-container>
          <!--          中心-->
          <el-main>
            <div class="main_padding">
              <el-tabs type="border-card">
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-date"></i>视频管理</span>
                  <!--                  :http-request="vue_upload"-->
                  <!--                  :data="{'id':analysisToken.userIdOrPhone[0],'phone':analysisToken.userIdOrPhone[1]}"-->
                  <!--                  action="http://localhost:9527/nacos-video-upload/upload/uploading"-->
                  <!--                  :data="sendData"-->
                  <!--                  :headers="{'token':token}"-->
                  <!--                  :auto-upload="false"-->

                  <el-upload
                      drag
                      ref="uploadVideo"
                      :on-change="fileDate"
                      :http-request="vue_upload"
                      :auto-upload="false"
                      action=""
                      multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">上传视频</div>
                  </el-upload>

                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        基本设置
                      </div>
                    </el-col>
                    <el-col :span="2" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <el-button plain>一键填写</el-button>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        封面
                      </div>
                    </el-col>
                    <el-col :span="15" :offset="2">
                      <div class="grid-content bg-purple">
                        <!--                        action="http://localhost:9527/nacos-video-upload/upload/uploadImg"-->

                        <el-upload
                            list-type="picture-card"
                            action=""
                            :limit="1"
                            :http-request="vue_upload"
                            :headers="{'token':token}"
                            :on-change="handleChange"
                            :file-list="fileList"
                            :auto-upload="false">
                          <i slot="default" class="el-icon-plus"></i>
                          <div slot="file" slot-scope="{file}">
                            <!--                          <div>-->
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                              <span
                                  class="el-upload-list__item-preview"
                                  @click="handlePictureCardPreview(file)"
                              >
                                <i class="el-icon-zoom-in"></i>
                              </span>
                              <span
                                  v-if="!disabled"
                                  class="el-upload-list__item-delete"
                                  @click="handleRemove(file)"
                              >
                                <i class="el-icon-delete"></i>
                              </span>
                            </span>
                          </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        标题
                      </div>
                    </el-col>
                    <el-col :span="12" :offset="2">
                      <div class="grid-content bg-purple">
                        <el-input
                            type="textarea"
                            autosize
                            v-model="videoTitle">
                        </el-input>
                      </div>

                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        类型
                      </div>
                    </el-col>
                    <el-col :span="4" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <template>
                          <el-radio v-model="videoIsTransshipment" label="0">自传</el-radio>
                          <el-radio v-model="videoIsTransshipment" label="1">转载</el-radio>
                        </template>
                      </div>
                    </el-col>
                    <el-col :span="14" v-if="videoIsTransshipment=='1'">
                      <div class="grid-content bg-purple-light">
                        <el-input
                            autosize
                            placeholder="转载视频请注明来源（例：转自http://www.xxxx.com/yyyy），注明来源会更快地通过审核哦"
                            v-model="videoIsTransshipmentUrl">
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        分区
                      </div>
                    </el-col>
                    <el-col :span="5" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <el-select v-model="videoSubarea" placeholder="请选择">
                          <el-option-group
                              v-for="group in options"
                              :key="group.label"
                              :label="group.label">
                            <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                          </el-option-group>
                        </el-select>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        标签
                      </div>
                    </el-col>
                    <el-col :span="12" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <div class="label_input">
                          <div>
                            <el-tag
                                @click="choiceLabel(tag.name)"
                                v-for="tag in videoLabel"
                                @close="closeConfirmTag(tag.name)"
                                :key="tag.name"
                                closable
                                :type="tag.type">
                              {{ tag.name }}
                            </el-tag>
                          </div>
                          <input type="text">
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="1" :offset="4">
                      <div class="grid-content bg-purple">
                        <span>推荐：</span>
                      </div>
                    </el-col>
                    <el-col :span="12" :offset="0">
                      <div class="tag_grid">
                        <el-tag
                            v-for="tag in tags"
                            @click="choiceLabel(tag.name)"
                            @close="closeTag(tag.name)"
                            closable
                            :key="tag.name"
                            :type="tag.type">
                          {{ tag.name }}
                        </el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        介绍
                      </div>
                    </el-col>
                    <el-col :span="12" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <div style="margin: 20px 0;"></div>
                        <el-input
                            type="textarea"
                            placeholder="请输入内容"
                            v-model="videoBriefIntroduction"
                            maxlength="30"
                            show-word-limit
                        >
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        定时发送
                      </div>
                    </el-col>
                    <el-col :span="15" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <el-switch
                            v-model="on_off"
                            active-color="#13ce66"
                            inactive-color="#e0e0e0">
                        </el-switch>
                        (当前+2小时 ≤ 可选时间 ≤ 当前+15天，转载稿件撞车判定以过审发布时间为准)
                      </div>
                      <div class="block" v-if="on_off">
                        <el-date-picker
                            v-model="videoPublishTime"
                            value-format="yyyy-MM-dd hh:mm:ss"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        二创设置
                      </div>
                    </el-col>
                    <el-col :span="2" :offset="2">
                      <div class="grid-content bg-purple-light">
                        <el-checkbox v-model="videoCreation">允许二创</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="24">
                      <div class="grid-content bg-purple-light">
                        <el-collapse v-model="activeNames" @change="handleChange1">
                          <!--                          <el-collapse-item title="更多设置" name="0" class="headerLocation">-->
                          <el-collapse-item>
                            <template slot="title">
                              <el-col :span="2">
                                <div class="text_size">
                                  更多设置
                                </div>
                              </el-col>
                            </template>
                            <el-row type="flex" class="row-bg">
                              <el-col :span="2" :offset="2">
                                <div class="grid-content bg-purple">
                                  声明与权益
                                </div>
                              </el-col>
                              <el-col :span="20" :offset="1">
                                <div class="grid-content bg-purple-light">
                                  <el-col :span="2">
                                    自制声明
                                  </el-col>
                                  <el-col :span="2">
                                    <el-checkbox v-model="videoCreation">允许二创</el-checkbox>
                                  </el-col>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row type="flex" class="row-bg">
                              <el-col :span="2" :offset="2">
                                <div class="grid-content bg-purple">
                                  声明与权益
                                </div>
                              </el-col>
                              <el-col :span="20" :offset="1">
                                <div class="grid-content bg-purple-light">
                                  <el-col :span="2">
                                    自制声明
                                  </el-col>
                                  <el-col :span="2">
                                    <el-checkbox v-model="videoCreation">允许二创</el-checkbox>
                                  </el-col>
                                </div>
                              </el-col>
                            </el-row>
                          </el-collapse-item>
                        </el-collapse>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg">
                    <el-col :span="8" :offset="2">
                      <el-button type="success" @click="contribute(true)">立即投稿</el-button>
                      <el-button type="primary" @click="contribute(true)">保存投稿</el-button>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="专栏管理">专栏管理</el-tab-pane>
                <el-tab-pane label="互动视频管理">互动视频管理</el-tab-pane>
                <el-tab-pane label="音频管理">音频管理</el-tab-pane>
                <el-tab-pane label="贴纸管理">贴纸管理</el-tab-pane>
                <el-tab-pane label="视频素材管理">视频素材管理</el-tab-pane>
              </el-tabs>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-button οnclick=“document>1123</el-button>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {javaUpload} from "@/api";
// import classification from "src/assets/classification.json"

export default {
  name: "Upload",
  data() {
    return {
      fileList: [],
      // ---------------------------------发送的数据
      videoCoverImgUrl: '',
      videoTitle: '',
      videoIsTransshipmentUrl: '',
      videoIsTransshipment: '0',
      videoSubarea: '',
      videoCreation: false,
      videoBriefIntroduction: '',
      videoPublishTime: '',
      videoLabel: [],
      videoPublish: false,
      // --------------------------------
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      isCollapse: true,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      options: [{
        label: '推荐',
        options: [{
          value: 'JobMarket',
          label: '职业职场'
        }, {
          value: 'everyday',
          label: '日常'
        },
          {
            value: 'schoolyard',
            label: '校园'
          },
          {
            value: 'business',
            label: '商业'
          },
          {
            value: 'ShouBan',
            label: '手办'
          },
        ]
      }, {
        label: '生活',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      input: '',
      on_off: false,
      activeNames: ['1'],
      rate_of_progress: '',
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      tags: [
        {name: '学习', type: ''},
        {name: '考研', type: 'success'},
        {name: '课程', type: 'info'},
        {name: '大学', type: 'college'},
        {name: '分享', type: 'danger'},
        {name: '解读', type: 'warning'},
        {name: '免费分享', type: 'success'},
        {name: '知识', type: 'info'},
        {name: '结构', type: 'college'},
        {name: '基础知识', type: 'danger'},
        {name: '免费', type: 'warning'},
        {name: '微信公众号', type: 'success'},
        {name: '基础', type: 'info'},
      ],
    }
  },
  mounted() {
    // console.log(classification)
  },
  methods: {
    choiceLabel(value) {
      let a = this.tags.find(item => item.name == value) // 获取指定的对象
      this.tags = this.tags.filter(item => item.name != value) // 获取除指定对象之外的元素
      this.videoLabel.push(a) // 向数组中添加元素
    },
    closeTag(value) {
      this.tags = this.tags.filter(item => item.name != value) // 获取除指定对象之外的元素
    },
    closeConfirmTag(value) {
      let a = this.videoLabel.find(item => item.name == value) // 获取指定的对象
      this.videoLabel = this.videoLabel.filter(item => item.name != value) // 获取除指定对象之外的元素
      this.tags.push(a) // 向数组中添加元素
    },
    fileDate(file) { // 获取标题
      let separator = file.name.lastIndexOf(".") // 使用.做分割符，分成任意段
      this.videoTitle = file.name.substring(0, separator) // 获取分割的前部分
    },
    backHome() {
      this.$router.push("/Main")
    },
    handleRemove(file) { // 移除预选的视图
      this.fileList = this.fileList.filter(item => item.uid != file.uid) // 获取除指定对象之外的元素
    },
    handlePictureCardPreview(file) {  // 预览视图
      this.dialogImageUrl = file.url; // 赋值给预览视图
      this.dialogVisible = true; // 是否显示开启预览
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleChange1(val) {
      console.log("val", val);
    },
    handleChange(file) {
      this.fileList.push(file)
      // this.videoCoverImgUrl = file
      this.videoCoverImgUrl = file.raw
    },
    vue_upload(value) {
      console.log("接收的数据", value)
      console.log("token数据", this.token)
      console.log("解析的token数据", this.analysisToken[0])
      // 后端接收的是表单类型'Content-Type': 'multipart/form-data'，必须要使用FormData()类格式化数据才能传输成功
      const form = new FormData();
      form.append("file", value.file);
      form.append("userId", this.analysisToken.userIdOrPhone[0]);
      form.append("phone", this.analysisToken.userIdOrPhone[1]);
      form.append("videoCoverImgUrl", this.videoCoverImgUrl)
      form.append("videoTitle", this.videoTitle)
      form.append("videoIsTransshipmentUrl", this.videoIsTransshipmentUrl)
      form.append("videoIsTransshipment", this.videoIsTransshipment)
      form.append("videoSubarea", this.videoSubarea)
      form.append("videoCreation", this.videoCreation)
      form.append("videoBriefIntroduction", this.videoBriefIntroduction)
      form.append("videoPublishTime", this.videoPublishTime)
      console.log("videoPublishTime", this.videoPublishTime)
      let videoLabel = []
      for (let i = 0; i < this.videoLabel.length; i++) {
        videoLabel[i] = this.videoLabel[i].name
      }
      console.log("videoLabel", videoLabel)
      form.append("videoLabel", videoLabel)
      form.append("videoPublish", this.videoPublish)

      javaUpload(form).then(
          response => {
            console.log("返回成功")
            console.log("返回的数据", response.data)
          }, error => {
            console.log(error.response?.data);
            console.log(error.response?.status);
            console.log("错误信息", error)
          })
    },
    contribute(value) {
      console.log("contribute")
      this.videoPublish = value
      this.$refs.uploadVideo.submit()
    },
  },
  computed: {
    ...mapState("loginAbout", ["token", "analysisToken"]),
  }
}
</script>

<style scoped>
.Upload {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
}

.align-center {
  cursor: pointer;
}

.align-center svg {
  vertical-align: text-bottom;
}

.Change_Case {
  height: 100%;
  /*overflow-y: hidden;*/
}

.el-header, .el-footer {
  background-color: white;
  /*position: sticky;*/
  top: 0;
  box-shadow: 1px 1px #e5e5e5;
  color: #333;
  text-align: center;
  line-height: 60px;
  z-index: 999;
}

section.is-vertical {
  height: 100%;
  overflow: hidden;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}

.main_padding {
  padding: 0 90px 0 90px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-row {
  margin-bottom: 20px;

&
:last-child {
  margin-bottom: 0;
}

}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  /*background: #99a9bf;*/
}

.bg-purple {
  /*background: #d3dce6;*/
}

.bg-purple-light {
  /*background: #e5e9f2;*/
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 100%;

}

.tag_grid {
  display: flex;
  flex-wrap: wrap;
  /*grid-template-columns: repeat(7,1fr);*/
  /*grid-template-rows: repeat(auto-fill,1fr);*/
  /*column-gap: 7;*/
  gap: 10px;
}

.el-tag {
  cursor: pointer;
}

.row-bg {
  padding: 10px 0;
  /*background-color: #f9fafc;*/
}

.headerLocation {
  font-size: 20px;
}

.label_input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}

.label_input > div {
  flex-basis: auto;
  white-space: nowrap;
  margin: 0 10px;
}

.label_input > div > * {
  margin-right: 10px;
}

.label_input > input {
  width: 100%;
  height: 90%;
  border: none;
  /*border-radius: 5px;*/
}

.label_input > input:focus {
  outline: none
}

.text_size {
  font-size: 16px;
}
</style>