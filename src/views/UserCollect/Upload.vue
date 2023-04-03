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

              <span class="left_text" @click="backUserCentre">我的视频</span>

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
                  <el-row type="flex" class="row-bg">
                    <el-col :span="24" :offset="2">
                      <el-upload v-if="!imageData.length"
                                 drag
                                 ref="uploadVideo"
                                 accept="video/*"
                                 :on-success="returnImage"
                                 :headers="{'token':token}"
                                 action="api/nacos-video-upload/upload/uploadVideoFile"
                                 multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">上传视频</div>
                      </el-upload>
                      <ImgPreview ref="ImgPreviewDate" v-if="imageData.length" :imageData="imageData"/>
                    </el-col>
                  </el-row>
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
                        自定义封面
                      </div>
                    </el-col>
                    <el-col :span="15" :offset="2">
                      <div class="grid-content bg-purple">
                        <div class="upload-container">
                          <label for="file-upload" class="upload-label">
                            <i class="fa fa-cloud-upload"></i> 上传封面
                          </label>
                          <input id="file-upload" type="file" accept="image/*" ref="fileInput"
                                 @change="handleFileChange"
                                 style="display:none">
                          <div class="preview-container">
                            <img class="preview-image" v-show="imageUrl" :src="imageUrl" alt="uploaded image">
                            <button class="remove-button" v-show="imageUrl" @click="removeImage">Remove</button>
                          </div>
                        </div>
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
                      <div class="grid-content bg-purple" style="height: 40px">
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
                    <el-col :span="10" v-if="videoIsTransshipment=='1'">
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
                        <el-select v-model="selectedOption" placeholder="请选择">
                          <el-option-group
                              v-for="group in optionsTest"
                              :key="group.videoSubareaId"
                              :label="group.videoSubarea"
                          >
                            <el-option
                                v-for="item in group['videoSubareaType']"
                                :key="item.videoSubareaTypeId"
                                :label="item['videoSubareaType']"
                                :value="[item.videoSubareaTypeId,group.videoSubareaId]"
                            >
                            </el-option>
                          </el-option-group>
                        </el-select>
                        <!--                        <select></select>-->
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
                      <el-button type="primary" @click="contribute(false)">保存投稿</el-button>
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
  </div>
</template>

<script>
import {mapState} from "vuex";
import {getClassification} from "@/api/common";
import {hintUploadFail, hintUploadSucceed, hintUploadUploading} from "@/utility/messageHint";
import {getTokenValue} from "@/utility/manageDate";
import ImgPreview from "@/views/UserCollect/ImgPreview";
import Select from "@/views/UserCollect/Select";
import {deleteVideo, javaUpload} from "@/api";

let ifClosePage = false;

export default {
  name: "Upload",
  components: {
    ImgPreview, Select
  },

  data() {
    return {
      ifSubmitVideo: false, // 判断是否提交视频文件
      ifSubmit: false, // 判断是否提交用于返回主机面是否上传了
      imgDate: null, // 子组件返回的图片地址
      imageData: [], // 存储返回的视频3张封面数据
      fileList: [],
      fileList2: [],
      fileName: '', // 视频文件名
      imageUrl: '', // 自定义图片二进制数据
      // ---------------------------------发送的数据
      videoId: null,
      videoCoverImgUrl: null,
      videoTitle: '',
      videoIsTransshipmentUrl: '',
      videoIsTransshipment: '0',
      selectedOption: [],
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
      optionsTest: [],// 存储分区数据
      input: '',
      videoSrc: "",
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
    window.addEventListener('beforeunload', this.handleBeforeUnload)
    this.init()
  },
  methods: {

    init() {
      getClassification().then(
          req => {
            this.optionsTest = req.data
          },
          error => {
            error.message
            console.log("error", error.message)
          }
      )
    },
    handleFileChange(event) {
      this.videoCoverImgUrl = ''
      const file = event.target.files[0]
      this.fileName = file.name
      this.imgDate = file
      // 使用FileReader读取文件内容
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.imageUrl = e.target.result
      }
      // 在这里处理文件上传逻辑
    },
    removeImage() {
      this.videoCoverImgUrl = this.$refs.ImgPreviewDate?.selectedImage // 获取上传视频子组件的视频封面路径数据
      this.fileName = '';
      this.imageUrl = '';
    },
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
      this.videoSrc = file["name"]
      console.log(URL.createObjectURL(file.raw));
      // 本地电脑路径
      this.videoSrc = document.getElementsByClassName("el-upload__input")[0].value
      // console.log(document.getElementsByClassName("el-upload__input")[0].value);
      let separator = file.name.lastIndexOf(".") // 使用.做分割符，分成任意段
      this.videoTitle = file.name.substring(0, separator) // 获取分割的前部分
    },
    backHome() {
      if (this.ifDeleteVideo()) {
        this.$router.push("/Main")
      }
    },
    backUserCentre() {
      if (this.ifDeleteVideo()) {
        this.$router.push('/userCentre')
      }
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
    // 视频传输方法回调
    returnImage(response, file) {
      this.ifSubmitVideo = true
      let data = response.data
      this.imageData = data  // 获取返回的三张封面数据
      this.videoId = data[0]["videoId"]
      this.fileDate(file)
    },

    vue_upload() {
      hintUploadUploading()
      let videoLabel = []
      for (let i = 0; i < this.videoLabel.length; i++) {
        videoLabel[i] = this.videoLabel[i].name
      }
      const form = new FormData();
      form.append("file", this.imgDate);
      form.append("userName", getTokenValue("userName"));
      form.append("userPhone", getTokenValue("userPhone"));
      form.append("userId", getTokenValue("userId"));
      form.append("videoId", this.videoId);
      form.append("videoCoverImgUrl", this.videoCoverImgUrl)
      form.append("videoTitle", this.videoTitle)
      form.append("videoIsTransshipmentUrl", this.videoIsTransshipmentUrl)
      form.append("videoIsTransshipment", this.videoIsTransshipment)
      form.append("videoSubareaId", this.selectedOption[1])
      form.append("videoSubareaTypeId", this.selectedOption[0])
      form.append("videoCreation", this.videoCreation)
      form.append("videoBriefIntroduction", this.videoBriefIntroduction)
      form.append("videoPublishTime", this.videoPublishTime)
      form.append("videoLabel", videoLabel)
      form.append("videoPublish", this.videoPublish)
      javaUpload(form).then(
          response => {
            this.ifSubmit = true // 记录是否提交，未提交返回主页则提示
            hintUploadSucceed()
            this.$router.push('/userCentre')
          }, error => {
            hintUploadFail()
          })
    },
    // 提交视频数据到后端
    contribute(value) {
      this.videoPublish = value  // 记录用户是否立即发布视频
      console.log('this.imageUrl', this.imageUrl)
      console.log('this.imageUrl', !this.imageUrl)
      if (!this.imageUrl) {
        this.videoCoverImgUrl = this.$refs.ImgPreviewDate?.selectedImage // 获取上传视频子组件的视频封面路径数据
      }
      this.vue_upload()
    },
    // 删除视频文件
    ifDeleteVideo() {
      if (this.ifSubmitVideo && !this.ifSubmit) {
        // alert("是否保存你的视频")
        let isAffirm = confirm("是否保存你的视频")
        if (isAffirm) {
          console.log("删除视频")
          ifClosePage = true
          // 删除视频文件
          deleteVideo(this.videoId).then(
              response => {
                console.log(response?.data)
              },
              error => {
                console.log(error?.message)
              }
          )
          return true
        } else {
          console.log("取消删除")
          ifClosePage = false
          return false
        }
      } else {
        return true
      }
    },
    handleBeforeUnload(event) {
      event.preventDefault()
    }
  },
  computed: {
    ...mapState("loginAbout", ["token", "analysisToken"]),
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload)
  },
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

.left_text {
  cursor: pointer;
  margin-left: 30px;
}

/*-------------------------------------------------------------*/
.upload-container {
  display: flex;
  flex-direction: row;
  align-items: end;
  font-family: sans-serif;
  /*height: 300px;*/
}

.upload-label {
  display: inline-block;
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;
}

.upload-label:hover {
  background-color: #ddd;
}

.preview-container {
  border-radius: 5px;
  overflow: hidden;
  position: relative; /* 设置相对定位 */
  margin-left: 20px;
}

.preview-image {
  display: block;
  max-width: 100%;
  height: 30%;
  border: 2px solid #ddd;
}

.remove-button {
  position: absolute; /* 设置绝对定位 */
  top: 10px; /* 距离上边界的距离 */
  right: 10px; /* 距离右边界的距离 */
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button:hover {
  background-color: #fff;
  color: #333;
}
</style>