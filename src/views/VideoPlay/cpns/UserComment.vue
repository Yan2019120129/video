<template>
  <div class="user_comment_main_user">
    <el-avatar slot="button_active"
               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <div class="user_comment_main_user_comment">
      <p>
        <span>可怜的11啊</span>
        <span>lv6</span>
        <svg t="1667734397449" class="icon" viewBox="0 0 1024 1024" version="1.1" fill="red"
             xmlns="http://www.w3.org/2000/svg" p-id="3835" width="20" height="20">
          <path
              d="M511.913993 941.605241c-255.612968 0-385.311608-57.452713-385.311608-170.810012 0-80.846632 133.654964-133.998992 266.621871-151.88846L393.224257 602.049387c-79.986561-55.904586-118.86175-153.436587-118.86175-297.240383 0-139.33143 87.211154-222.586259 233.423148-222.586259l7.912649 0c146.211994 0 233.423148 83.254829 233.423148 222.586259 0 54.184445 0 214.67361-117.829666 297.412397l-0.344028 16.685369c132.966907 18.061482 266.105829 71.041828 266.105829 151.716445C897.225601 884.152528 767.526961 941.605241 511.913993 941.605241zM507.957668 141.567613c-79.470519 0-174.250294 28.382328-174.250294 163.241391 0 129.698639 34.230808 213.469511 104.584579 255.784982 8.944734 5.332437 14.277171 14.965228 14.277171 25.286074l0 59.344868c0 15.309256-11.524945 28.0383-26.662187 29.414413-144.319839 14.449185-239.959684 67.429531-239.959684 95.983874 0 92.199563 177.346548 111.637158 325.966739 111.637158 148.792206 0 325.966739-19.26558 325.966739-111.637158 0-28.726356-95.639845-81.534688-239.959684-95.983874-15.48127-1.548127-27.006215-14.621199-26.662187-30.102469l1.376113-59.344868c0.172014-10.148833 5.676466-19.437594 14.277171-24.770032 70.525785-42.487485 103.208466-123.678145 103.208466-255.784982 0-135.031077-94.779775-163.241391-174.250294-163.241391L507.957668 141.567613 507.957668 141.567613z"
              p-id="3836"></path>
        </svg>
      </p>
      <p>
        <!--                        <span class="comment_on_top">置顶</span>-->
        <i class="top-icon">置顶</i>
        {{ userRemark['remarkContent'] }}
      </p>
      <div class="Align_Horizontal_Centers user_comment_time_count">
        <span>{{ userRemark.remarkTime }}</span>
        <div class="Align_Horizontal_Centers ">
          <svg @click="remarkClick"
               t="1636093575017" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="3323" width="20" height="20">
            <path :class="{'activate':activateState===1}"
                  d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z"
                  p-id="3324"></path>
          </svg>
          <span>{{ userRemark.remarkClickCount }}</span>
        </div>

        <div class="Align_Horizontal_Centers">
          <svg @click="remarkTrample"
               t="1636093677814" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="3933" width="20" height="20">
            <path :class="{'activate':activateState===2}"
                  d="M594.112 872.768a34.048 34.048 0 0 1-29.12-10.816c-11.264-13.248-15.872-24.064-21.504-40.064l-1.92-5.632c-5.632-16.128-12.8-36.864-27.712-63.232-25.344-44.928-50.24-74.432-86.144-97.024-23.104-14.528-43.648-26.432-65.024-32.64V203.84a4570.24 4570.24 0 0 1 339.072 4.672c38.656 2.048 72 21.12 88.896 52.032 21.504 39.36 47.232 95.744 63.552 163.008 16.448 67.52 21.568 123.776 22.592 163.008 0.448 16.832-13.44 32.256-35.392 32.256h-197.248a32 32 0 0 0-28.608 46.336l0.128 0.32 0.64 1.28 2.56 5.568c2.176 4.8 5.12 11.776 8.384 20.16 6.528 17.088 13.568 39.04 16.768 60.416 4.928 33.344 3.712 60.16-9.344 84.992-14.08 26.688-30.016 33.728-40.576 34.944z m97.728-190.016h149.568c52.8 0 100.864-40.128 99.392-97.92a846.336 846.336 0 0 0-24.32-176.448 742.016 742.016 0 0 0-69.632-178.56c-29.248-53.44-84.48-82.304-141.824-85.248-55.68-2.88-138.24-5.952-235.712-5.952-96 0-183.488 3.008-244.672 5.76-66.368 3.136-123.328 51.392-130.944 119.872a1380.608 1380.608 0 0 0-0.768 296.704c7.68 72.768 70.4 121.792 140.032 121.792h97.728c13.76 0 28.16 5.504 62.976 27.392 24.064 15.168 42.432 35.264 64.448 74.368 11.968 21.12 17.472 36.864 22.976 52.736l2.048 5.888c6.656 18.88 14.336 38.4 33.216 60.416 19.456 22.72 51.456 36.736 85.184 32.768 35.2-4.096 67.776-26.88 89.792-68.672 22.208-42.112 21.888-84.8 16-124.288a343.04 343.04 0 0 0-15.488-60.608zM298.688 205.568v413.184H232.96c-40.512 0-72.448-27.712-76.352-64.512a1318.912 1318.912 0 0 1 0.64-282.88c3.904-34.816 32.896-61.248 70.4-62.976 20.8-0.96 44.736-1.92 71.04-2.816z"
                  p-id="3934">
            </path>
          </svg>
          <span>{{ userRemark['remarkTrampleCount'] }}</span>
        </div>
        <span class="icon" @click="isRevert=true">回复</span>
      </div>
      <UserCommentTwo v-for="(iten,index) in returnUserRemarkData" :key="index" v-if="iten['otherUserRemarkId']==userRemark['userRemarkId']" :userRemark="iten"/>
      <UserCommentTwo v-if="userRemarkTowList" v-for="(iten,index) in userRemarkTowList" :key="index" :userRemark="iten">
      </UserCommentTwo>
      <div v-if="isRevert" class="user_comment_main_first_comment">
<!---->

        <el-avatar slot="button_active"
                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-input
            type="textarea"
            :rows="2"
            autosize
            placeholder="发一条友善的评论"
            v-model="remarkTxt">
        </el-input>
        <el-button type="primary" @click="sendRemark()">发送</el-button>
        <!--              <el-button slot="reference">click 激活</el-button>-->
      </div>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
import UserCommentTwo from "@/views/VideoPlay/cpns/UserCommentTwo";
import {getTokenValue} from "@/utility/manageDate";
import {hintLogin} from "@/utility/messageHint";
import {addRemark} from "@/api/common";
import {getDate} from "@/utility/returnData";

export default {
  name: "UserComment",
  components: {
    UserCommentTwo
  },
  props: [
    'userRemark','returnUserRemarkData'
  ],
  data() {
    return {
      remarkTxt: "",
      isRevert: false,
      activateState: 0,
      isSend: false,
      userRemarkTowList: [],
      userRemarkTow: {
        userId: "",
        videoId: "",
        remarkContent: "",
        remarkTime: "",
        remarkClickCount: 0,
        remarkTrampleCount: 0,
        otherUserRemarkId: 0,
      },
    }
  },
  methods: {
    remarkClick() {
      /**
       * activateState=1 点赞
       * activateState=2 踩
       * activateState=0 不做操作
       * 判断是否激活activateState!= 1
       * 激活则点赞状态设置activateState=1，点赞图标变为蓝色
       * this.userRemark.remarkClickCount 点赞总数
       * this.userRemark.remarkTrampleCount 踩总数
       */
      if (this.activateState != 1) {
        this.userRemark.remarkClickCount = this.userRemark.remarkClickCount + 1
        if (this.activateState == 2) {
          this.userRemark.remarkTrampleCount = this.userRemark.remarkTrampleCount - 1
        }
        this.activateState = 1
      } else {
        this.userRemark.remarkClickCount = this.userRemark.remarkClickCount - 1
        this.activateState = 0
      }
    },
    remarkTrample() {
      if (this.activateState != 2) {
        this.userRemark.remarkTrampleCount = this.userRemark.remarkTrampleCount + 1
        if (this.userRemark.remarkClickCount == 1) {
          this.userRemark.remarkClickCount = this.userRemark.remarkClickCount - 1
        }
        this.activateState = 2
      } else {
        this.userRemark.remarkTrampleCount = this.userRemark.remarkTrampleCount - 1
        this.activateState = 0
      }
    },
    sendRemark() {
      let userId = getTokenValue("userId")
      this.userRemarkTow["remarkTime"] =getDate()
      if (userId) {
        this.userRemarkTow["userId"] = userId
        this.userRemarkTow["videoId"] = this.userRemark["videoId"]
        this.userRemarkTow["remarkContent"] = this.remarkTxt
        this.userRemarkTow["otherUserRemarkId"] = this.userRemark["userRemarkId"]
        if (!this.userRemarkTow["remarkContent"]) {
          return
        } else {
          this.userRemarkTowList.unshift(this.userRemarkTow)
          this.remarkTxt = ""
        }
      } else {
        return hintLogin()
      }
      this.isSend = !this.isSend
      addRemark(this.userRemarkTow).then(
          rep => {
            console.log("返回的数据", rep.data)
            this.userRemarkTow = {}
          },
          error => {
            console.log("错误信息", error)
          }
      )
    }
  }
}
</script>

<style scoped>
.Align_Horizontal_Centers {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user_comment_main_user {
  display: flex;
}

.user_comment_main_user > span {
  margin: 10px;
}

.user_comment_main_user_comment {
  width: 100%;
}

.user_comment_main_user_comment pre {
  font-weight: bold;
}

.user_comment_time_count > * {
  padding-right: 10px;
}

.top-icon {
  border: 1px solid #ff8800;
  border-radius: 3px;
  padding: 0 3px 0px 3px;
  color: #ff8800;
  text-align: center;
}

.icon {
  Cursor: pointer;
}

.activate {
  fill: #006cff;
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
</style>