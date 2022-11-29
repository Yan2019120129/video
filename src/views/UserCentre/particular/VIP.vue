<template>
  <div>
    <el-row class="margin_top">
      <el-col :span="2" :offset="1">
        <div class="grid-content bg-purple">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <div class="">昵称</div>
          <div class="margin_up_below center_horizontally">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
            <div>
              <el-button size="mini">个人空间</el-button>
              <el-button size="mini">修改资料</el-button>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="">
            <div class="transition_inline margin_right">
              <img class="margin_right" src="@/assets/svg/bi.svg" alt="">
              <span>0</span>
            </div>
            <div class="transition_inline">
              <img class="margin_right" src="@/assets/svg/bi2.svg" alt="">
              <span>0</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3" :offset="1">
        <div class="grid-content bg-purple margin_up_below center_horizontally">
          <img src="@/assets/svg/bag.svg" alt="">
          <span>每日奖励</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          <div class="text_center">
            <img src="@/assets/svg/gou.svg" alt="">
            <span>每日登录</span>
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          <div class="text_center">
            <img src="@/assets/svg/gou.svg" alt="">
            <span>每日观看视频</span>
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          <div class="text_center">
            <img src="@/assets/svg/gou.svg" alt="">
            <span>每日投币</span>
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          <div class="text_center">
            <img src="@/assets/svg/gou.svg" alt="">
            <span>每日分享</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3" :offset="1">
        <div class="grid-content bg-purple margin_up_below center_horizontally">
          <img src="@/assets/svg/medal.svg" alt="">
          <span>成就勋章</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple">
          <div class="text_center">
            <img src="@/assets/svg/fail_to_load.svg" alt=""><br>
            <span class="hint_text">你还没有勋哦！</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3" :offset="1">
        <div class="grid-content bg-purple margin_up_below center_horizontally">
          <img src="@/assets/svg/key.svg" alt="">
          <span>账号安全</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          绑定邮箱
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          我的手机
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          设置密保
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="grid-content bg-purple">
          实名验证
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "VIP"
}
</script>

<style scoped>

.margin_top {
  margin-top: 60px;
}

.margin_center {
  line-height: 100%;
}

.margin_up_below {
  margin: 5px 0 5px 0;
}

.margin_right {
  margin-right: 10px;
}

.center_horizontally {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-progress--text-inside {
  width: 300px;
}

.transition_inline {
  display: inline;
  vertical-align: middle;
}

.text_center {
  margin: 10px;
  width: 100%;
  text-align: center;
}

.vertical_bar {
  height: 100%;
  border-right: 1px solid red;
}

.hint_text {
  font-size: 10px;
  color: #99a2aa;
}
</style>