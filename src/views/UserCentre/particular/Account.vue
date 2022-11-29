<template>
  <div class="Account_external">
    <div class="Account_top">
      <div>
        <img src="@/assets/img/UserMessage/Head.png" alt="">
      </div>
      <div class="score">
        <div class="Account_top_img">
          <img src="@/assets/img/UserMessage/accountSecurity.png" alt=""><br>
          <span>您的账号安全状况还不错哟，完善剩余的安全项可进一步提高安全评分哟</span>
        </div>
        <div class="score_grade">
          <p>65</p>
          <span>账号安全评分</span>
        </div>
      </div>
    </div>
    <div class="Account_inside">
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Danger"></i>
            绑定邮箱
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未绑定邮箱
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未绑定邮箱
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Warning"></i>
            密保问题
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未设置密保
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            设置密保
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Warning"></i>
            实名认证
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未完成实名认证
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            实名认证
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Warning"></i>

            绑定新浪微博
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未绑定微博账号
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            绑定微博
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Warning"></i>
            绑定QQ账号
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            未绑定QQ账号
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            绑定QQ
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-success background_Success"></i>
            设置密码
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            已设置
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            修改密码
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-success background_Success"></i>
            绑定手机
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            199*****429
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            更换手机
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="3" :offset="2">
          <div class="grid-content bg-purple">
            <i class="el-icon-warning background_Success"></i>
            绑定微信账号
          </div>
        </el-col>
        <el-col :span="4" :offset="6">
          <div class="grid-content bg-purple">
            已授权绑定微信账号
          </div>
        </el-col>
        <el-col :span="3" :offset="5">
          <div class="grid-content bg-purple">
            解除绑定
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Account"
}
</script>

<style scoped>
.Account_external {
  width: 100%;
}

.Account_top {
  background: #00a0d8;
  height: 80px;
  width: 100%;
  text-align: center;
  /*overflow: hidden;*/
}


.Account_inside {
  /*height: 100%;*/
  width: 60%;
  margin: 20% auto 0 auto;
}

.score {
  text-align: center;
  position: relative;
}

.score_grade {
  top: 60px;
  position: absolute;
  left: 0;
  right: 0;
}

.score_grade p {
  margin: 0;
  font-size: 40px;
}

.Account_top_img {
  /*position: absolute;*/
  position: relative;
}

.background_Danger {
  color: #f56c6c;
}

.background_Warning {
  color: #e6a23c;
}

.background_Success {
  color: #67c23a;
}

</style>