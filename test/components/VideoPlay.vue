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
          <p>
            <span>请先<a href="">登录</a> 或 <a href="">注册</a></span>
            <input type="text">
            <span>弹幕礼仪</span>
            <img src="@/assets/img/tv.png">
            <button>发送</button>
          </p>
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
    </div>
    <div class="play_video_show_right">
      <h1>标题</h1>
    </div>
  </div>
</template>
<script>
import videoPlay from "@/views/VideoPlay/Video";

export default {
  name: 'VideoPlay',
  components: {
    videoPlay
  },
  data() {
    return {
      activeName: 'second',
      id: "",
      psw: ""
    };
  },
};
</script>
<style scoped>
.App {
  width: 100%;
}

.play_video_show_left {
  float: left;
  width: 55%;
  padding-left: 10%;
  height: 100%;
  background: #e3e3e3;
}

.play_video_show_right {
  float: right;
  width: 25%;
  padding-right: 10%;
  height: 100%;
  background: #cbcbcb;
}

.title_message_top {
  display: flex;
  flex-direction: row;
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
  /*position: absolute;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  padding: 0 5px;
}

.bullet_hell_input img {
  width: 10px;
  height: 10px;
}

.bullet_hell_input input {
  width: 380px;
  border-width: 0;
  outline: none;
  /*background: none;*/
}

.title_message_end {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.title_message_end div {

}

.title_message_end div svg, span {
  vertical-align: middle;
  margin-right: 10px;
}

</style>