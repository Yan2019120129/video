<template>
  <div class="MyMessage">
    <div class="MyMessage_top">
      我的信息
    </div>
    <el-divider><i class="el-icon-s-custom"></i></el-divider>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="昵称：">
        <el-col :span="8">
          <el-input size="mini" v-model="form.userNickname"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="用户名：">
        <span>{{ form.userName }}</span>
      </el-form-item>
      <el-form-item label="我的签名：">
        <el-col :span="20">
          <el-input size="small" type="textarea" v-model="form.userSignature"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="form.userSex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="保密"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期：">
        <div class="block">
          <el-date-picker
              v-model="form.userBirthday"
              type="date"
              placeholder="2022-02-05">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="学校信息：">
        <span>{{ form.userSchoolMessage }}</span>
      </el-form-item>
      <el-form-item>
        <el-button size="small " type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getUserMessage, saveUserMessage} from "@/api";
import {mapActions, mapState} from "vuex";
import {getTokenValue} from "@/utility/manageDate";
import {hintUploadSucceed} from "@/utility/messageHint";
import {Message} from "element-ui";

export default {
  name: "MyMessage",
  data() {
    return {
      form: {
        userId: "",
        userName: 'bili_37638448427',
        userNickname: '',
        userSex: '',
        userSignature: '',
        userBirthday: '',
        userSchoolMessage: '*学校信息当前仅支持在App中进行编辑（需升级至6.34及以上版本）'
      },
    };
  },
  mounted() {
    this.form.userName = getTokenValue("userName")
    this.form.userId = getTokenValue("userId")
    console.log("userName", getTokenValue("userName"))
    console.log("userId", getTokenValue("userId"))
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
          this.form = req.data
        }
      }, error => {
        console.log(error.message)
      })
    },
    onSubmit() {
      console.log('submit!');
      saveUserMessage(this.form).then(
          req => {
            console.log("返回的信息", req.data)
            hintUploadSucceed()
          }, error => {
            console.log("返回的错误信息", error.message)
          })

    },
    ...mapActions("loginAbout", {aAnalysisToke: "aAnalysisToke"})
  },
  computed: {
    ...mapState("loginAbout", ["analysisToken"])
  }

}
</script>

<style scoped>
.MyMessage {
  height: 100%;
  width: 95%;
  margin: auto;
}

.MyMessage_top {
  /*height: 60px;*/
  text-align: center;
  padding-top: 30px;
}
</style>