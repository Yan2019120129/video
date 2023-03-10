<!--
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2020-08-12 20:15:18
 * @LastEditors: jingbin
 * @LastEditTime: 2020-08-31 11:01:41
-->
<template>
  <div>
    <el-form-item label="图片上传" prop="imgUrl">
      <el-upload
          :action="picUrl"
          :headers="headers"
          :on-preview="handlePictureCardPreview"
          :file-list="imgList"
          :on-success="uploadPictureSuccess"
          :show-file-list="true"
          :on-remove="handleRemove"
          :on-change="uploadPictureChange"
          list-type="picture-card"
          :limit="1"
          class="videoUpload"
      >
        <video v-if="isShow" width="100%" controls="controls" :src="dialogImageUrl" class="avatar"></video>
        <i v-else class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" append-to-body>
        <video width="100%" controls="controls" :src="dialogImageUrl"></video>
      </el-dialog>
    </el-form-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "VideoList",
  computed: {
    ...mapGetters(['token']),
    headers() {
      return {
        "Authorization": this.token
      }
    },
  },
  data() {
    return {
      // 视频上传
      baseImgUrl: 'https:....',
      hideUpload: false,
      limitCount: 1,
      dialogImageUrl: '',
      dialogVisible: false,
      isShow: false,
      imgList: [],
      picUrl: '....',
    }
  },
  methods:
      {
        // 视频上传
        handleRemove(file, fileList) {
          this.hideUpload = fileList.length >= this.limitCount;

          console.log(file, fileList);
          // 调删除图片接口
          deleteFileByName({fileName: this.form.url}).then(res => {
            if (res.code == 200) {
              this.form.url = ''
              this.form.time = ''
              this.$message({
                message: res.msg,
                type: 'success'
              });
              this.isShow = false
            }
          })

        }
        ,
        handlePictureCardPreview(file) {
          console.log(file, file.url)
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
        ,
        uploadPictureSuccess(res, file) {
          var _this = this
          if (file.status == "success") {
            _this.$message({
              message: '上传成功',
              type: 'success'
            })
          }
          this.form.url = res.msg
          this.dialogImageUrl = file.url;
          this.isShow = true

        }
        ,
        uploadPictureChange(file, fileList) {
          console.log(file, fileList)
          let _this = this
          this.hideUpload = fileList.length >= this.limitCount;
          var audioElement = new Audio(file.url);
          audioElement.addEventListener("loadedmetadata", function () {
            _this.form.time = audioElement.duration;
            console.log('时长：' + _this.form.time + 's')
          })
        }
      }
}
</script>
<style lang="scss" scoped>
::v-deep .is-success{
  position: relative;
}

::v-deep .videoUpload{
  position: relative;
}
::v-deep .avatar{
  position: absolute;
  width: 148px;
  top: 35px;
  left: 0;
}
::v-deep .el-upload-list--picture-card{
  position: absolute;
  z-index: 999;

}
::v-deep .el-upload-list--picture-card .el-upload-list__item{
  background: transparent;
}
::v-deep .el-upload-list__item-thumbnail{
  display: none;
}
</style>
