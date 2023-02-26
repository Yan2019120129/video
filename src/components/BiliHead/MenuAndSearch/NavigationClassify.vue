<template>
  <div class="bili-head_end">
    <div class="bili-head_navigation">
      <div class="navigation_left">
        <div class="icon">
          <div class="imgBackground background-color_bull">
            <img class="icon_img" src="@/assets/svg/head/state.svg" alt="">
          </div>
          <a>动态</a>
        </div>
        <div class="icon">
          <div class="imgBackground background-color_red">
            <img class="icon_img" src="@/assets/svg/head/hot.svg" alt="">
          </div>
          <a>热门</a>
        </div>
        <div class="icon">
          <div class="imgBackground background-color-cyan">
            <img class="icon_img" src="@/assets/svg/head/channel.svg" alt="">
          </div>
          <a>频道</a>
        </div>
      </div>
      <div class="navigation_middle">
        <div v-for="(n,i) in videoSubarea" :key="n.video_subarea_id">
          <SmallMenuBelow v-if="i<22">
            <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>
            <button slot="button">{{ n.video_subarea }}</button>
          </SmallMenuBelow>
        </div>

        <!--        <SmallMenuUp v-for="(p, index) in myData.slice(0,11)" :key="p.id">-->
        <!--          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>-->
        <!--          <button slot="button">{{ p.name }}</button>-->
        <!--        </SmallMenuUp>-->
        <!--        <SmallMenuBelow v-for="(p, index) in myData.slice(11,22)" :key="p.id">-->
        <!--          <a slot="menuButton" v-for="index in 6" :key="index">测试菜单</a>-->
        <!--          <button slot="button">{{ p.name }}</button>-->
        <!--        </SmallMenuBelow>-->
      </div>
      <div class="navigation_right">
        <div>
          <i class="el-icon-s-order"></i>
          <a>专栏</a>
        </div>
        <div>
          <i class="el-icon-wind-power"></i>
          <a>活动</a>
        </div>
        <div>
          <img src="@/assets/svg/head/activity.svg"/>
          <a>社区中心</a>
        </div>
        <div>
          <i class="el-icon-video-camera-solid"></i>
          <a>直播</a>
        </div>
        <div>
          <i class="el-icon-school"></i>
          <a>课堂</a>
        </div>
        <div>
          <img src="@/assets/svg/head/music.svg"/>
          <a>新歌热榜</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallMenuBelow from "@/components/BiliHead/MenuAndSearch/cpns/SmallMenuBelow";
import {getSubarea} from "@/api/common";
import {getVideo, setVideo} from "@/utility/manageDate";

export default {
  name: "NavigationClassify",
  components: {
    SmallMenuBelow,
  },
  data() {
    return {
      videoSubarea: {},
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let value = getVideo("videoSubarea")
      if (value) { // 判断本地缓存是否有数据，没有数据则从新获取
        this.videoSubarea = value
      } else {
        this.getData()
      }
    },
    getData() {
      // 获取分类数据
      getSubarea().then(req => {
            let video = req.data
            this.videoSubarea = video
            setVideo("videoSubarea", video)
          },
          error => {
            console.log("错误信息", error.message)
          }
      )
    }
  },
}
</script>

<style scoped>
.head_search > input {
  border: transparent;
  outline: none;
}

.bili-head_banner form {
  color: white;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.bili-head_banner form input {
  width: 70%;
}

.bili-head_end {
  width: 90%;
  margin: 0 5% 0 5%;
}

.bili-head_navigation {
  padding: 2vh;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /*background: #ffd8d8;*/
}

.navigation_left {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.icon {
  margin-right: 1rem;
}

.background-color_red {
  background: #f07775;
}

.background-color-cyan {
  background: #59ca73;
}

.background-color_bull {
  background: #bc8fef;
}

.imgBackground {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon_img {
  border-radius: 100%;
  width: 30px;
  height: 30px;
}

.icon a {
  font-size: 10px;
}


.navigation_middle {
  border-right: 1px solid black;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  display: grid;
  padding: 0 2vw;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  /*grid-template-rows: repeat(max(2), 25px);*/
  gap: 10px 10px;

}

.navigation_right {
  padding-left: 2vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 10px;
}

.navigation_right > div {
  margin: auto;
  white-space: nowrap;
  /* 内容不换行 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation_right svg {
  width: 20px;
  height: 20px;
}

.navigation_right a {
  margin: auto 0;
  font-size: 10px;
}
</style>