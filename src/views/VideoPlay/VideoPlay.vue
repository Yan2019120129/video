<template>
  <div class="VideoPlay">
    <div class="play_video_show_left">
      <p>标题</p>
      <div class="title_message_top">
        <div class="title_message_grade">
          <img src="@/assets/img/tv.png">
          <span>全站排行榜最高第一名</span>
          <img src="@/assets/img/tv.png">
        </div>
        <div class="title_message_play_count">
          <img src="@/assets/img/tv.png">
          <span>626.3万</span>
        </div>
        <div class="title_message_play_count">
          <img src="@/assets/img/tv.png">
          <span>评论</span>
        </div>
        <div class="title_message_publish_time">
          <img src="@/assets/img/tv.png">
          <span>2020-10-28 12:06:50</span>
        </div>
        <div class="title_message_jurisdiction">
          <img src="@/assets/img/tv.png">
          <span>未经作者授权,禁止转载</span>
        </div>
      </div>
      <div class="play_area">
        <videoPlay></videoPlay>
      </div>
      <div class="play_video_message">
        <span>791人在观看,已装配2011条弹幕</span>
        <img src="@/assets/img/tv.png">
        <img src="@/assets/img/tv.png">
        <div class="bullet_hell_input">
          <p>请先<a href="">登录</a> 或 <a href="">注册</a></p>
          <input type="text">
          <span>弹幕礼仪</span>
          <svg t="1667574164735" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2273" width="15" height="15">
            <path
                d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                p-id="2274"></path>
          </svg>
          <button>发送</button>
        </div>
      </div>

      <div class="title_message_end">
        <div class="video_click_count">
          <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"></path>
          </svg>
          <span>626.3万</span>
        </div>
        <div class="video_reward_count">
          <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon"
          >
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"></path>
          </svg>
          <span>626.3万</span>
        </div>
        <div class="video_like_count">
          <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon"
          >
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"></path>
          </svg>
          <span>626.3万</span>
        </div>
        <div class="video_transmit_count">
          <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path
                d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"></path>
          </svg>
          <span>626.3万</span>
        </div>
      </div>

      <div class="video_play_details">
        <pre ref="video_play_details_pre">
来喽owo！喜欢请点个关注给个三连，
我还会继续更新的！
十一期素材
BGM：YMCA
工作细胞
魔法禁书目录
男子高中生的日常
复仇者联盟
东百往事
冰雪奇缘
希望之花（机动战士高达 铁血的奥尔芬斯）
疯狂动物城
唐伯虎点秋香
无敌破坏王
大话西游
原神
假如
虎哥一眼万年
天使降临到我身边
c3魔方少女
伪恋
钢之炼金术师
猫咪日常
雏子的笔记
鸡你太美
凉宫春日
3年E班
猛男版新宝岛
甲铁城的卡巴内瑞
我的妹妹不可能那么可爱
Wake Up，Girls
肯德基母亲节广告
你的名字
间谍过家家
        </pre>
      </div>
      <p style="cursor:pointer;" @click="even_more">展开更多</p>

      <div class="user_comment">
        <div class="Align_Horizontal_Centers">
          <p class="Align_Horizontal_Centers">
            <span class="user_comment_first_word">评论</span>
            <span>123</span>
          </p>
          <p class="user_comment_title_right">
            <span>最热</span>
            <el-divider direction="vertical"></el-divider>
            <span>最新</span>
          </p>
        </div>
        <div class="user_comment_main">
          <div class="user_comment_main_first_comment">
            <el-avatar slot="button_active"
                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
            </el-input>
                        <el-button type="primary">发送</el-button>
          </div>
          <UserComment>
            <UserCommentTwo/>
            <UserCommentTwo/>
            <UserCommentTwo/>
          </UserComment>
          <UserComment/>
          <UserComment/>
        </div>
      </div>
    </div>
    <div class="play_video_show_right">
      <h1>标题</h1>
    </div>
  </div>
</template>
<script>
import videoPlay from "@/views/VideoPlay/Video";
import UserComment from "@/views/VideoPlay/cpns/UserComment";
import UserCommentTwo from "@/views/VideoPlay/cpns/UserCommentTwo";

export default {
  name: 'VideoPlay',
  components: {
    videoPlay,
    UserComment,
    UserCommentTwo,
  },
  data() {
    return {
      activeName: 'second',
      ifEvenMore: false,
      id: "",
      psw: "",
      textarea: ""
    };
  },
  methods: {
    even_more() {
      if (!this.ifEvenMore) {
        this.ifEvenMore = true
        this.$refs.video_play_details_pre.style = "height:100%;"
      } else {
        this.ifEvenMore = false
        this.$refs.video_play_details_pre.style = "height:70px;"
      }
    }
  }
};
</script>
<style scoped>
.App {
  width: 100%;
}

.play_video_show_left {
  float: left;
  width: 65%;
  /*padding-left: 10%;*/
  height: 100%;
  /*background: #e3e3e3;*/
}

.play_video_show_right {
  float: right;
  width: 35%;
  /*padding-right: 10%;*/
  height: 100%;
  /*background: #cbcbcb;*/
}

.title_message_top {
  display: flex;
  flex-direction: row;
  font-size: 15px;
}

.title_message_top div {
  margin-right: 20px;
}

.title_message_top div img {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.play_area {
  margin-top: 20px;
}

.play_video_message {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eeeeee;
  box-shadow: 1px 1px 2px #eeeeee;
  white-space: nowrap;
  font-size: 13px;
  padding: 10px;
  right: 0;
  left: 0;
}

.play_video_message > img {
  width: 20px;
  height: 20px;
  margin-left: 0;
}

.bullet_hell_input {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  right: 0;
  background: #f1f2f3;
  border-radius: 5px;
  height: 40px;
  width: 500px;
  padding-left: 5px;
}

.bullet_hell_input img {
  width: 10px;
  height: 10px;
}

.bullet_hell_input input {
  margin: 0 10px;
  height: 70%;
  width: 100%;
  border-radius: 5px;
  border-width: 0;
  outline: none;
}

.bullet_hell_input button {
  width: 25%;
  height: 100%;
  border-radius: 0 5px 5px 0;
  border: none;
  background: #66b1ff;
}

.title_message_end {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0;
}

.title_message_end div path {
  fill: #525252;
}

.title_message_end div:hover path {
  fill: #00aeec;
}

.title_message_end div:hover {
  color: #00aeec;
}

.title_message_end div svg + span {
  vertical-align: middle;
  margin-right: 10px;
}

.video_play_details pre {
  height: 80px;
  overflow: hidden;
}

.Align_Horizontal_Centers {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user_comment_first_word {
  font-size: 20px;
}

.user_comment_title_right {
  margin-left: 20px;
}

.user_comment_main_first_comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.user_comment_main_first_comment > span {
  margin: 10px;
}

.user_comment_main_user > span {
  margin: 10px;
}

.user_comment_main_user_comment pre {
  font-weight: bold;
}

.user_comment_time_count > * {
  padding-right: 10px;
}
</style>