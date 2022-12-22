<template>
  <div class="UserHead">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="flex_style">
        <div class="UserHead_top flex_style">
          <!--          :auto-upload="false"-->
          <!--          :limit="1"-->
          <el-upload
              action=""
              :multiple="false"
              :http-request="sendHeadImg"
              :on-change="handleChange"
              :show-file-list="false"
              :auto-upload="true"
          >
            <!--            <el-button size="small" type="primary">点击上传</el-button>-->
            <div class="UserHead_top_text_left  UserHead_top_text_common flex_style">
              <span>更换</span>
              <span>头像</span>
            </div>
          </el-upload>

          <div class="UserHead_top_inside flex_style">
            <img :src="headImg" alt="">
          </div>
          <div class="UserHead_top_text_right UserHead_top_text_common  flex_style">
            <span>卸下</span>
            <span>挂件</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider><i class="el-icon-s-custom"></i></el-divider>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {getUserMessage, setUserHeadImg} from "@/api";
import {getTokenValue} from "@/utility/manageDate";

export default {
  name: "UserHead",
  data() {
    return {
      headImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      headImgFile: "",
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const fromData = new FormData()
      let userId = getTokenValue("userId")
      console.log("token", userId)
      fromData.append("userId", userId)
      getUserMessage(fromData).then(req => {
        console.log("getUser", req.data)
        if (req.data) {
          if(req.data["userUrl"]){
            this.headImg = "/pav" + req.data["userUrl"]
          }
        }
      }, error => {
        console.log(error.message)
      })
      // let userUrl = getTokenValue("userUrl")
      // if (userUrl) {
      //   this.headImg = "/pav" + userUrl
      // }
    },
    sendHeadImg() {
      console.log("运行")
      let formData = new FormData()
      formData.append("file", this.headImgFile)
      formData.append("userId", getTokenValue("userId"))
      console.log("userId",getTokenValue("userId"))
      setUserHeadImg(formData).then(
          req => {
            console.log("setUserHeadImg", req.data)
            this.headImg = "/pav" + req.data["imgUrl"]
          },
          error => {
            console.log("setUserHeadImg", error.message)
          }
      )
    },
    handleChange(file, fileList) {
      this.headImgFile = file["raw"]
      console.log("file", this.headImgFile)
      console.log("fileList", fileList)
    },
  }

}
</script>

<style scoped>
.UserHead {

}

.flex_style {
  display: flex;
  align-items: center;
  justify-content: center;
}

.UserHead_top {
  position: relative;
  margin: 20px;
  /*background: cadetblue;*/
  border: 1px solid #aaffe6;
  border-radius: 100%;
  height: 200px;
  width: 200px;
}

.UserHead_top_text_common {
  position: absolute;
  height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 100%;
  flex-direction: column;
  cursor: pointer;
}

.UserHead_top_text_left {
  background: #c0ffee;
  left: 0;
  transform: translate(-50%, -100%);
}

.UserHead_top_text_right {
  right: 0;
  transform: translate(50%, 50%);
  border: 1px solid #dedede;
}

.UserHead_top_text_left > span {
  font-size: 10px;
  /*line-height: 50px;*/
}

.UserHead_top_text_right > span {
  font-size: 10px;
  /*line-height: 50px;*/
}

.UserHead_top_inside {
  border-radius: 100%;
  /*margin: 50px;*/
  overflow: hidden;
  height: 70px;
  width: 70px;
}

.UserHead_top_inside > img {
  height: 75px;
  width: 75px;
}
</style>