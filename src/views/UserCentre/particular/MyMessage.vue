<template>
  <div class="MyMessage">
    <div class="MyMessage_top">
      我的信息
    </div>
    <el-divider><i class="el-icon-s-custom"></i></el-divider>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="昵称：">
        <el-col :span="8">
          <el-input size="mini" v-model="form.nickName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="用户名：">
        <span>{{ form.userName }}</span>
      </el-form-item>
      <el-form-item label="我的签名：">
        <el-col :span="20">
          <el-input size="small" type="textarea" v-model="form.desc"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="保密"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期：">
        <div class="block">
          <el-date-picker
              v-model="form.birthday"
              type="date"
              placeholder="2022-02-05">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="学校信息：">
        <span>{{ form.schoolMessage }}</span>
      </el-form-item>
      <el-form-item>
        <el-button size="small " type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      form: {
        nickName: '',
        userName: 'bili_37638448427',
        sex: '',
        desc: '',
        birthday: '',
        schoolMessage: '*学校信息当前仅支持在App中进行编辑（需升级至6.34及以上版本）'
      },
    }
        ;
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
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