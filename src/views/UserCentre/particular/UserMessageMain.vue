<template>
  <div class="UserMessageMain">
    <div class="main_table">
      <div class="main_table_left">
        <div class="table_style_top">
          个人中心
        </div>
        <div class="grid-el-row_style">
          首页
        </div>
        <div class="grid-el-row_style" @click="toPath('vip')">
          大会员
        </div>
        <div class="grid-el-row_style">
          会员积分
        </div>
        <div class="grid-el-row_style" @click="toPath('myMessage')">
          我的信息
        </div>
        <div class="grid-el-row_style">
          我的头像
        </div>
        <div class="grid-el-row_style">
          粉丝勋章
        </div>
        <div class="grid-el-row_style">
          成就勋章
        </div>
        <div class="grid-el-row_style" @click="toPath('account')">
          账号安全
        </div>
        <div class="grid-el-row_style">
          黑名单管理
        </div>
        <div class="grid-el-row_style">
          我的硬币
        </div>
        <div class="grid-el-row_style">
          我的记录
        </div>
        <div class="grid-el-row_style">
          实名认证
        </div>
        <div class="grid-el-row_style">
          注册邀请
        </div>
      </div>
      <div class="main_table_right">
        <router-view name="router_userMessageMain"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VIP from "@/views/UserCentre/particular/VIP";

export default {
  name: "UserMessageMain",
  components: {
    VIP,
  },
  methods: {
    toPath(value) {
      console.log(value)
      this.$router.replace({
        name: value,
        params: {}
      })
    }
  }
}
</script>


<style scoped>
.UserMessageMain {
  height: 100%;
  width: 100%;
}

.main_table {
  margin: 60px auto 0 auto;
  width: 60%;
  height: 900px;
  /*background: red;*/
  border: 1px solid #DCDFE6;
  border-radius: 10px;
  display: flex;
}

.main_table_left {
  height: 100%;
  width: 15%;
  border-right: 1px solid #DCDFE6;
}

.main_table_right {
  width: 85%;
}

.table_style_top {
  padding: 15px;
  text-align: center;
}

.grid-el-row_style {
  padding: 15px;
  text-align: center;
  border-top: 1px solid #e3e3e3;
  cursor: pointer;
}

.grid-el-row_style:hover {
  background: #e3e3e3;
}

.grid-el-row_style:focus {
  background: #e3e3e3;
}


</style>