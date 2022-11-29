<template>
  <div>
    <div v-if="videoForm.showVideoPath ==''">
      <el-upload
          action="http://localhost:9527/nacos-video-upload/upload/uploading"
          v-bind:data="{step:'image'}"
          drag
          :headers="{'token':token}"
          v-bind:on-progress="uploadVideoProcess"
          v-bind:on-success="handleVideoSuccess"
          v-bind:before-upload="beforeUploadVideo"
          v-bind:show-file-list="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将视频拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传视频文件，且不超过5MB</div>
      </el-upload>
    </div>
    <video v-if="videoForm.showVideoPath !='' && !videoFlag"
           v-bind:src="videoForm.showVideoPath"
           class="avatar video-avatar"
           controls="controls">
      您的浏览器不支持视频播放
    </video>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "upload",
  data() {
    return {
      //参数
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: ''
      },
    }
  },
  methods: {
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 500;
      if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
        this.$alert('请上传正确的视频格式', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
        return false;
      }
      if (!fileSize) {
        this.$alert('视频大小不能超过5MB', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      //后台上传地址
      if (res.code == 1) {
        console.log('执行了', res.data.image_url)
        this.curgimg = res.data.image_url
        this.videoForm.showVideoPath = (this.httpurl + res.data.image_url);
      } else {
        this.$alert(res.info, '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      }
    },
  },
  computed: {
    ...mapState("loginAbout", ["token", "analysisToken"]),
  }
}
</script>

<style scoped>

</style>