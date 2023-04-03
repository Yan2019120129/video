<template>
    <div class="VideoPlayOut">
        <div class="VideoPlay">
            <div class="play_video_show_left">
                <p>{{ videoData['videoTitle'] }}</p>
                <div class="title_message_top">
                    <div class="title_message_grade" v-if="false">
                        <img src="@/assets/img/tv.png">
                        <span>全站排行榜最高第一名</span>
                        <img src="@/assets/img/tv.png">
                    </div>
                    <div class="title_message_play_count el-row--flex is-align-middle">
                        <img src="@/assets/svg/videoPlay/tv.svg">
                        <span>500万</span>
                    </div>
                    <div class="title_message_play_count el-row--flex is-align-middle">
                        <img src="@/assets/svg/videoPlay/barrage.svg">
                        <span>评论</span>
                    </div>
                    <div class="title_message_publish_time el-row--flex is-align-middle">
                        <img src="@/assets/svg/videoPlay/time.svg">
                        <span>2020-10-28 12:06:50</span>
                    </div>
                    <div class="title_message_jurisdiction el-row--flex is-align-middle">
                        <img src="@/assets/svg/videoPlay/forbid.svg">
                        <span>未经作者授权,禁止转载</span>
                    </div>
                </div>
                <div class="video_center">
                    <Video :videoUrl="videoUrl"/>
                </div>
                <div class="title_message_end">
                    <!--        点赞-->
                    <div class="video_click_count" @click="ifLike">
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path ref="rLike" fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"></path>
                        </svg>
                        <span>{{ likeCount }}</span>
                    </div>
                    <!--        投币-->
                    <div class="video_click_count" @click="ifCoins">
                        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon"
                        >
                            <path ref="rCoin" fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"></path>
                        </svg>
                        <span>{{ coinsCount }}</span>
                    </div>
                    <!--        收藏-->
                    <div class="video_click_count" @click="ifCollect">
                        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon"
                        >
                            <path ref="rCollect" fill-rule="evenodd" clip-rule="evenodd"
                                  d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"></path>
                        </svg>
                        <span>{{ collectCount }}</span>
                    </div>
                    <!--        分享-->
                    <div class="video_click_count" @click="ifShare">
                        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path ref="rShare"
                                  d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"></path>
                        </svg>
                        <span>{{ shareCount }}</span>
                    </div>
                </div>
                <div class="video_play_details">
        <pre ref="video_play_details_pre">{{ videoData['videoBriefIntroduction'] }}
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
                                    autosize
                                    placeholder="发一条友善的评论"
                                    v-model="remarkTxt">
                            </el-input>
                            <el-button type="primary" @click="sendRemark">发送</el-button>
                            <!--              <el-button slot="reference">click 激活</el-button>-->
                        </div>
                        <UserComment v-for="(item,index) in userRemarkList" v-if="userRemarkList" :key="index"
                                     :userRemark="item"/>
                        <UserComment v-for="(item,index) in returnUserRemarkData" v-if="item['otherUserRemarkId']==null"
                                     :key="returnUserRemarkData['userRemarkId']" :userRemark="item"
                                     :returnUserRemarkData="returnUserRemarkData"/>
                    </div>
                </div>
            </div>
            <div class="play_video_show_right">

                <el-row type="flex" align="middle">
                    <el-col :span="3" :offset="1">
                        <div class="vertical_center">
                            <el-avatar size="large" :src="circleUrl"></el-avatar>
                        </div>
                    </el-col>
                    <el-col :span="19">
                        <div class="margin el-row--flex">
                            <span class="font_text">牧羊人</span>
                            <i class="el-icon-message"> </i>
                            <span class="font_text">发信息</span>
                        </div>
                        <span class=" margin font_text">这里是逐帧分析专场 喜欢的宝子记得点点一键三连 有想看的素...</span>
                        <div class="margin">
                            <button class="button_style button_style_one">充电</button>
                            <button class="button_style button_style_tow">+关注89万</button>
                        </div>
                    </el-col>
                </el-row>
                <div>
                    <div class="el-row--flex line_feed is-justify-space-between">
                        <div class="el-row--flex is-justify-space-between">
                            <span class="margin_right">弹幕列表</span>
                            <img src="@/assets/svg/videoPlay/separate.svg" alt="">
                        </div>
                        <i @click="isBarrage=!isBarrage" class="gesture el-icon-arrow-down img_button"></i>
                    </div>
                    <transition name="el-zoom-in-top">
                        <div v-if="!isBarrage" class="barrage_text">
                            <div class="barrage_frame">
                                <div v-for="i in 40" class=" barrage_text_item el-row--flex is-justify-space-between">
                                    <span class="barrage_text_time">时间</span>
                                    <span class="barrage_text_text">弹幕内容</span>
                                    <span class="barrage_text_send_time">发送时间</span>
                                </div>
                            </div>
                            <button class="button_width">点击查看历史弹幕</button>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Video2 from "@/views/VideoPlay/cpns/Video2.vue";
import Video from "@/views/VideoPlay/Video";
import UserComment from "@/views/VideoPlay/cpns/UserComment";
import {
    addRemark,
    findAllInteract,
    getCoins,
    getCollect,
    getLike,
    getShare,
    getUserRemark,
    getVideoCorrelation
} from "@/api/common";
import {clearVideo, getToken, getTokenValue, getVideo, setVideo} from "@/utility/manageDate";
import {mapActions} from "vuex";
import {hintLogin} from "@/utility/messageHint";
import CustomComponent from "@/views/VideoPlay/CustomComponent";
import {getDate} from "@/utility/returnData";

export default {
    name: 'VideoPlay',
    components: {
        Video,
        UserComment,
        CustomComponent,
        Video2
    },
    data() {
        return {
            isBarrage: true,
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            activeName: 'second',
            ifEvenMore: false,
            id: "",
            psw: "",
            videoAbout: {},
            videoData: {},
            videoUrl: "",
            videoPlay: {},
            isLike: false,
            isCoins: false,
            isCollect: false,
            isShare: false,
            videoValue: {},
            likeCount: "",
            coinsCount: "",
            collectCount: "",
            shareCount: "",
            userMessage: {},
            remarkTxt: "",
            returnUserRemarkData: "",
            userRemarkList: [],
            userRemark: {
                userId: "",
                videoId: "",
                remarkContent: "",
                remarkTime: "",
                remarkClickCount: 0,
                remarkTrampleCount: 0,
            },
        }
    },
    mounted() {
        // 放置视频id和用户名
        this.videoValue = this.$route.query
        this.userRemark["videoId"] = this.$route.query["videoId"]
        setVideo("videoValue", this.videoValue)
        // 放置用户名到用户信息中
        this.userMessage["userId"] = this.$route.query["userId"]
        // 放置视频id到用户信息中
        this.userMessage["videoId"] = this.$route.query["videoId"]
        // 放置用户名到评论内容中
        this.userRemark["userId"] = getVideo("userId")
        this.init()
    },
    methods: {
        ...mapActions("layoutAbout", {aIfLoginInterface: "aIfLoginInterface",}),
        ...mapActions("loginAbout", {aIfLogin: "aIfLogin"}),
        init() {
            let videoId = {
                videoId: this.userRemark.videoId
            }
            this.getData() // 获取个人点赞投币收藏分享的数据
            this.getUserVideoOther() // 初始化获取视频数据，修改点赞投币收藏分享样式状态
            this.getUserRemark(videoId)
        },
        // 发送评论数据以及将数据
        sendRemark() {
            let userId = getTokenValue("userId")
            this.userRemark["remarkTime"] = getDate()
            if (userId) {
                this.userRemark["userId"] = userId
                this.userRemark["remarkContent"] = this.remarkTxt
                if (!this.userRemark["remarkContent"]) {
                    return
                } else {
                    this.userRemarkList.unshift(this.userRemark)
                    this.remarkTxt = ""
                }
            } else {
                return hintLogin()
            }
            console.log("this.userRemark", this.userRemark)
            this.addRemark(this.userRemark)
        },
        setData(value) { //将获取来的视频数据赋值给vue
            this.videoData = value.video[0]
            this.videoUrl = 'pav' + this.videoData['videoUrl']
            this.videoAbout = value.videoAbout[0]
            this.likeCount = parseInt(value.videoAbout[0]['userPraiseCount'])
            this.coinsCount = parseInt(value.videoAbout[0]['userCoinCount'])
            this.collectCount = parseInt(value.videoAbout[0]['userLikeCount'])
            this.shareCount = parseInt(value.videoAbout[0]['userShareCount'])
        },
        getData() { // 获取个人点赞投币收藏分享的数据
            let videoId = {videoId: this.videoValue.videoId}
            getVideoCorrelation(videoId).then(req => {
                    let value = req.data
                    this.setData(value)
                    setVideo("videoPlay", value)
                },
                error => {
                    console.log(error.message)
                })
        },
        getUserVideoOther() {
            console.log("this.userMessage", this.userMessage)
            findAllInteract(this.userMessage).then( // 初始化获取视频数据，修改点赞投币收藏分享样式状态
                req => {
                    let a = req.data
                    if (a["userPraise"]) {
                        this.isLike = true
                        this.$refs.rLike.style = "fill: #00aeec;"
                    }
                    if (a["userCoin"]) {
                        this.isCoins = true
                        this.$refs.rCoin.style = "fill: #00aeec;"
                    }
                    if (a["userLike"]) {
                        this.isCollect = true
                        this.$refs.rCollect.style = "fill: #00aeec;"
                    }
                    if (a["userShare"]) {
                        this.isShare = true
                        this.$refs.rShare.style = "fill: #00aeec;"
                    }
                }
                , error => {
                    console.log("报错信息", error.message)
                })
        },
        getUserRemark(value) {
            console.log(value)
            getUserRemark(value).then(
                rep => {
                    console.log("getUserRemark返回的数据", rep.data)
                    this.returnUserRemarkData = rep.data
                },
                error => {
                    console.log("getUserRemark错误信息", error)
                }
            )
        },
        addRemark(value) {
            addRemark(value).then(
                rep => {
                    console.log("返回的数据", rep.data)

                    this.userRemark = {}
                },
                error => {
                    console.log("错误信息", error)
                }
            )
        },
        // 判断点赞是否添加删除
        like(value, state) {
            getLike(value, state).then(req => {
                console.log("coins", req)
            }, error => {
                console.log("error", error.message)
            })
        },
        // 判断投币是否添加删除
        coins(value, state) {
            getCoins(value, state).then(req => {
                console.log("coins", req)
            }, error => {
                console.log("error", error.message)
            })
        },
        // 判断收藏是否添加删除
        collect(value, state) {
            getCollect(value, state).then(req => {
                console.log("collect", req)
            }, error => {
                console.log("error", error.message)
            })
        },
        // 判断分享是否添加删除
        share(value, state) {
            getShare(value, state).then(req => {
                console.log("share", req.data)
            }, error => {
                console.log("error", error.message)
            })
        },
        // 切换样式，展开更多内容
        even_more() {
            if (!this.ifEvenMore) {
                this.ifEvenMore = true
                this.$refs.video_play_details_pre.style = "height:100%;"
            } else {
                this.ifEvenMore = false
                this.$refs.video_play_details_pre.style = "height:70px;"
            }
        },
        // 对点赞做添加或修改
        ifLike() {
            if (getToken()) {
                let state = this.isLike = !this.isLike
                this.userMessage["userPraiseTime"] = getDate()
                this.like(this.userMessage, state)
                clearVideo("videoPlay")
                console.log("this.isLike", state)
                if (state) {
                    this.likeCount = this.likeCount + 1
                    this.$refs.rLike.style = "fill: #00aeec;"
                } else {
                    this.$refs.rLike.style = "fill: #525252;"
                    this.likeCount = this.likeCount - 1
                }
            } else {
                this.aIfLoginInterface(true)
                this.aIfLogin(false)
            }
        },
        // 对硬币做添加或修改
        ifCoins() {
            if (getToken()) {
                let state = this.isCoins = !this.isCoins
                this.userMessage["userCoinTime"] = getDate()
                this.coins(this.userMessage, state)
                console.log("this.isCoins", state)
                clearVideo("videoPlay")
                if (state) {
                    this.$refs.rCoin.style = "fill: #00aeec;"
                    this.coinsCount = this.coinsCount + 1
                } else {
                    this.$refs.rCoin.style = "fill: #525252;"
                    this.coinsCount = this.coinsCount - 1
                }
            } else {
                this.aIfLoginInterface(true)
                this.aIfLogin(false)
            }
        },
        // 对收藏做添加或修改
        ifCollect() {
            if (getToken()) {
                let state = this.isCollect = !this.isCollect
                this.userMessage["userLikeTime"] = getDate()
                this.collect(this.userMessage, state)
                console.log("this.isCollect", this.userMessage)
                clearVideo("videoPlay")
                if (state) {
                    this.collectCount = this.collectCount + 1
                    this.$refs.rCollect.style = "fill: #00aeec;"
                } else {
                    this.$refs.rCollect.style = "fill: #525252;"
                    this.collectCount = this.collectCount - 1
                }
            } else {
                this.aIfLoginInterface(true)
                this.aIfLogin(false)
            }
        },
        // 对分享做添加或修改
        ifShare() {
            console.log("token", getToken())
            if (getToken()) {
                let state = this.isShare = !this.isShare
                this.userMessage["userShareTime"] = getDate()
                this.share(this.userMessage, state)
                console.log("this.isShare", state)
                clearVideo("videoPlay")
                if (state) {
                    this.shareCount = this.shareCount + 1
                    this.$refs.rShare.style = "fill: #00aeec;"
                } else {
                    this.$refs.rShare.style = "fill: #525252;"
                    this.shareCount = this.shareCount - 1
                }
            } else {
                this.aIfLoginInterface(true)
            }
        },
    },
}

</script>
<style scoped>
.VideoPlayOut {
    padding: 0 5% 0 5%;
    overflow-y: hidden;
}

.VideoPlay {
    margin-top: 10px;
}

.play_video_show_left {
    float: left;
    width: 74%;
    padding-right: 1%;
    /*height: 100%;*/
    /*background: #e3e3e3;*/
}

.play_video_show_right {
    float: right;
    width: 24%;
    padding-left: 1%;
    /*height: 100%;*/
    /*background: #cbcbcb;*/
}

.title_message_top {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    padding: 10px 0;
}

.title_message_top {
    font-size: 10px;
}


.title_message_top div {
    margin-right: 20px;
}

.title_message_top div img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.play_video_message > img {
    width: 20px;
    height: 20px;
    margin-left: 0;
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

/*.video_center{*/
/*  height: 1200px;*/
/*}*/

.videoLoading{
    width: 100%;
    height: 700px;
    background: black;
}

.title_message_end {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 10px 0;
}

.video_click_count {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
}


.title_message_end div path {
    fill: #525252;
}

.video_click_count:hover path {
    fill: #00aeec;
}

.video_click_count:hover {
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


.font_text {
    font-size: 10px;
}

.button_style {
    border: 1px solid #00aeec;
    border-radius: 5px;
    cursor: pointer;
}

.button_style_one {
    background-color: #ffffff;
    width: 30%;
    margin-right: 20px;
}

.button_style_tow {
    background-color: #00aeec;
    width: 40%;
}

.button_width {
    width: 100%;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
}

.margin {
    margin: 5px 0;
}

.margin_right {
    margin-right: 30px;
}

.i_style {
    margin-left: 100%;
}

.line_feed {
    White-space: nowrap;
    background-color: #f1f2f3;
    /*width: 100%;*/
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 10px;
}

.barrage_text {
    margin: auto;
    /*width: 440px;*/
    /*overflow: hidden;*/
    /*background-color: red;*/
}

.barrage_frame {
    height: 480px;
    overflow-y: scroll;

}

/* 滚动条滑块 */
.barrage_frame::-webkit-scrollbar {
    width: 10px;
}

.barrage_frame::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
}

.barrage_text_item {
    margin: 10px 20px;
}

.barrage_text_item span {
    font-size: 10px;
}

.barrage_text_time {
    width: 15%;
}

.barrage_text_text {
    padding: 0 20px;
    width: 65%;
}

.barrage_text_send_time {
    width: 20%;
}

.gesture {
    cursor: pointer;
}

.img_button:hover {
    animation: float_up_or_down 1s;
}

.img_button:focus {
    animation: float_up_or_down 1s;
}

@keyframes float_up_or_down {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>