<template>
    <div>
        <video-player class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                      customEventName="customstatechangedeventname"
                      @play="onPlayerPlay($event)"
                      @pause="onPlayerPause($event)"
                      @statechanged="playerStateChanged($event)"
                      @ready="playerReadied">
        </video-player>
        <div class="play_video_message play_video_message_center_horizontally">
            <span>791人在观看,已装配2011条弹幕</span>
            <div class="play_video_message_center_horizontally">
                <!--        <img class="play_video_message_img " src="@/assets/svg/videoPlay/openBulletButton.svg">-->
                <!--        <img class="play_video_message_img " src="@/assets/svg/videoPlay/settingBulletButton.svg">-->
                <svg v-if="!if_show_bullet" @click="ifShowBullet" viewBox="0 0 1186 1024" width="40" height="40"
                     class="play_video_message_svg "
                     version="1.1">
                    <g>
                        <title>关闭弹屏</title>
                        <path
                                d="m869.28218,780.99942zm-218.26384,236.68519l-453.89604,0c-106.82482,0 -193.72573,-86.90091 -193.72573,-193.72573l0,-623.9355c0,-106.81299 86.90091,-193.7139 193.72573,-193.7139l623.90001,0c106.82482,0 193.72572,86.90091 193.72572,193.7139l0,246.61164a25.11785,25.11785 0 0 1 -50.22387,0l0,-246.61164a143.65566,143.65566 0 0 0 -143.50185,-143.49003l-623.90001,0a143.65566,143.65566 0 0 0 -143.50186,143.49003l0,623.9355a143.66749,143.66749 0 0 0 143.50186,143.50185l453.89604,0a25.11785,25.11785 0 1 1 0,50.22388z"
                                id="svg_1"/>
                        <path
                                d="m414.56978,530.28527s0,12.94344 -0.55607,18.56331c-6.75567,132.19113 -13.49951,182.20204 -28.6909,199.6887c-9.55969,11.25157 -20.24336,15.17956 -36.55872,16.87144c-13.49952,1.12397 -40.49855,1.12397 -67.49758,-0.5679a101.08664,101.08664 0 0 0 -13.49951,-41.05462c27.5551,2.81585 54.56596,3.37192 65.24963,3.37192c9.00362,0 14.06741,-1.12397 19.68728,-6.18777c9.55969,-10.64817 15.74746,-51.18221 21.36733,-153.55846l-114.76362,0c3.93982,-42.74649 6.18777,-111.36804 6.18777,-163.11815l108.55219,0l0,-86.08455l-116.96425,0l0,-37.65903l156.93038,0l0,161.42628l-112.50384,0c-0.55607,29.81487 -1.68005,61.3098 -2.80402,88.30883l115.86393,0zm346.49149,133.87117l-145.67881,0l0,104.11545l-42.19042,0l0,-104.11545l-150.74261,0l0,-37.68269l150.74261,0l0,-46.14208l-118.11188,0l0,-207.04777l156.93038,0c21.93523,-32.6189 47.24239,-81.55316 61.86587,-117.55581l42.19042,13.49952c-18.56331,34.87867 -41.06644,74.25324 -60.75373,104.05629l81.56499,0l0,207.04777l-121.49563,0l0,46.14208l145.67881,0l0,37.68269zm-227.79987,-300.92915c-10.1276,-24.18318 -33.1868,-62.43377 -53.99806,-89.4328l33.74287,-15.17956c21.37916,26.99903 44.43837,62.98985 54.56596,87.18486l-34.31077,17.4275zm-39.97797,97.31246l79.87312,0l0,-53.43016l-79.87312,0l0,53.43016zm79.90861,86.01356l0,-53.95074l-79.90861,0l0,53.95074l79.90861,0zm123.75541,-139.49104l-81.56499,0l0,53.47748l81.56499,0l0,-53.47748zm0,85.49298l-81.56499,0l0,53.99806l81.56499,0l0,-53.99806z"
                                id="svg_2"/>
                        <path
                                d="m944.60449,998.99966a210.01507,210.01507 0 1 1 148.50212,-61.51295a208.65539,208.65539 0 0 1 -148.50212,61.51295zm0,-376.64291c-91.87584,0 -166.63806,74.752 -166.63806,166.63806s74.752,166.63806 166.63806,166.63806s166.63806,-74.74177 166.63806,-166.63806s-74.76221,-166.63806 -166.63806,-166.63806z"
                                id="svg_3" stroke="null"/>
                        <rect x="926.88275" y="618.17472" width="37.49962" height="355.20043" id="svg_8"
                              stroke="null"
                              transform="rotate(-40.6899 945.632 795.775)"/>
                    </g>
                </svg>
                <svg v-if="if_show_bullet" @click="ifShowBullet" viewBox="0 0 1186 1024" version="1.1"
                     class="play_video_message_svg "
                     width="40" height="40">
                    <title>弹屏</title>
                    <path
                            d="M921.49273 818.075326l-55.607116-43.385382-24.538118 19.710948 96.034672 97.300622c16.563822-42.178589 68.881836-124.607265 132.794525-183.172206l-5.91565-13.535009c-69.615377 42.521697-120.135033 96.164817-142.827469 123.045533zM647.621769 1011.375126H193.725727C86.900908 1011.375126 0 924.474218 0 817.649399V193.713896C0 86.900908 86.900908 0 193.725727 0h623.90001c106.824819 0 193.725727 86.900908 193.725726 193.713896v246.611643a25.117853 25.117853 0 0 1-50.223873 0V193.713896A143.65566 143.65566 0 0 0 817.625737 50.223874H193.725727A143.65566 143.65566 0 0 0 50.223874 193.713896v623.935503a143.667491 143.667491 0 0 0 143.501853 143.501853h453.896042a25.117853 25.117853 0 1 1 0 50.223874z"
                    ></path>
                    <path
                            d="M411.185044 523.961008s0 12.943444-0.556071 18.563312c-6.755673 132.191129-13.499515 182.202039-28.690906 199.688702-9.559691 11.251568-20.243356 15.17956-36.55872 16.871436-13.499515 1.123974-40.498544 1.123974-67.497574-0.567903a101.086638 101.086638 0 0 0-13.499515-41.054615c27.555101 2.81585 54.565961 3.371921 65.249627 3.371921 9.00362 0 14.067417-1.123974 19.687285-6.187771 9.559691-10.648171 15.747462-51.182209 21.36733-153.558459h-114.763622c3.939823-42.746491 6.187771-111.368039 6.18777-163.11815h108.552189v-86.084548h-116.964244v-37.659032h156.93038v161.426274h-112.503844c-0.556071 29.814879-1.680045 61.309803-2.804018 88.308833zM757.676533 657.832182H611.997721v104.115451h-42.190421v-104.115451H419.064691v-37.682695h150.742609v-46.142075h-118.11188v-207.047772h156.93038c21.935233-32.618898 47.242386-81.55316 61.865874-117.555809l42.19042 13.499514c-18.563312 34.878676-41.066447 74.253247-60.753732 104.056295h81.564991v207.047772H611.997721v46.142075H757.676533zM529.876658 356.903034c-10.127594-24.18318-33.1868-62.433777-53.998059-89.432806l33.742872-15.17956c21.379161 26.999029 44.438368 62.989848 54.565961 87.184859z m-39.977967 97.312453h79.873115v-53.430157h-79.873115z m79.908609 86.01356v-53.950734h-79.908609v53.950734z m123.755411-139.491042h-81.56499v53.477482h81.56499z m0 85.492983h-81.56499v53.998059h81.56499z"
                    ></path>
                    <path
                            d="M943.711914 1023.999124a243.050422 243.050422 0 1 1 171.861482-71.188939 241.476859 241.476859 0 0 1-171.861482 71.188939z m0-435.888801c-106.327904 0-192.850211 86.510475-192.850211 192.850211s86.510475 192.850211 192.850211 192.850211 192.850211-86.498644 192.850211-192.850211-86.522306-192.850211-192.850211-192.850211z"
                    ></path>
                </svg>
                <svg viewBox="0 0 1186 1024" width="20" height="20"
                     class="play_video_message_svg "
                     version="1.1">
                    <g>
                        <title>Layer 1</title>
                        <g id="svg_5">
                            <path
                                    d="m887.80073,780.99945zm-218.26384,236.68519l-453.89604,0c-106.82482,0 -193.72573,-86.90091 -193.72573,-193.72573l0,-623.9355c0,-106.81299 86.90091,-193.7139 193.72573,-193.7139l623.90001,0c106.82482,0 193.72572,86.90091 193.72572,193.7139l0,246.61164a25.11785,25.11785 0 0 1 -50.22387,0l0,-246.61164a143.65566,143.65566 0 0 0 -143.50185,-143.49003l-623.90001,0a143.65566,143.65566 0 0 0 -143.50186,143.49003l0,623.9355a143.66749,143.66749 0 0 0 143.50186,143.50185l453.89604,0a25.11785,25.11785 0 1 1 0,50.22388z"
                                    id="svg_1"/>
                            <path
                                    d="m433.08833,530.2853s0,12.94344 -0.55607,18.56331c-6.75567,132.19113 -13.49951,182.20204 -28.6909,199.6887c-9.55969,11.25157 -20.24336,15.17956 -36.55872,16.87144c-13.49952,1.12397 -40.49855,1.12397 -67.49758,-0.5679a101.08664,101.08664 0 0 0 -13.49951,-41.05462c27.5551,2.81585 54.56596,3.37192 65.24963,3.37192c9.00362,0 14.06741,-1.12397 19.68728,-6.18777c9.55969,-10.64817 15.74746,-51.18221 21.36733,-153.55846l-114.76362,0c3.93982,-42.74649 6.18777,-111.36804 6.18777,-163.11815l108.55219,0l0,-86.08455l-116.96425,0l0,-37.65903l156.93038,0l0,161.42628l-112.50384,0c-0.55607,29.81487 -1.68005,61.3098 -2.80402,88.30883l115.86393,0zm346.49149,133.87117l-145.67881,0l0,104.11545l-42.19042,0l0,-104.11545l-150.74261,0l0,-37.68269l150.74261,0l0,-46.14208l-118.11188,0l0,-207.04777l156.93038,0c21.93523,-32.6189 47.24239,-81.55316 61.86587,-117.55581l42.19042,13.49952c-18.56331,34.87867 -41.06644,74.25324 -60.75373,104.05629l81.56499,0l0,207.04777l-121.49563,0l0,46.14208l145.67881,0l0,37.68269zm-227.79987,-300.92915c-10.1276,-24.18318 -33.1868,-62.43377 -53.99806,-89.4328l33.74287,-15.17956c21.37916,26.99903 44.43837,62.98985 54.56596,87.18486l-34.31077,17.4275zm-39.97797,97.31246l79.87312,0l0,-53.43016l-79.87312,0l0,53.43016zm79.90861,86.01356l0,-53.95074l-79.90861,0l0,53.95074l79.90861,0zm123.75541,-139.49104l-81.56499,0l0,53.47748l81.56499,0l0,-53.47748zm0,85.49298l-81.56499,0l0,53.99806l81.56499,0l0,-53.99806z"
                                    id="svg_2"/>
                        </g>
                        <g stroke="null" stroke-width="3" id="svg_6">
                            <path stroke="null" id="svg_3"
                                  d="m941.1489,861.12893c37.37929,0 66.58186,-30.37067 66.58186,-67.74996c0,-37.37929 -30.37067,-67.74996 -66.58186,-67.74996c-37.37929,0 -66.58186,30.37067 -66.58186,67.74996c0,37.37929 30.37067,67.74996 66.58186,67.74996l0,0zm0,-18.68964c-26.86636,0 -49.06032,-22.19395 -49.06032,-49.06032c0,-26.86636 22.19395,-49.06032 49.06032,-49.06032c26.86636,0 49.06032,22.19395 49.06032,49.06032c0,26.86636 -22.19395,49.06032 -49.06032,49.06032l0,0z"/>
                            <path stroke="null" id="svg_4"
                                  d="m845.36446,913.69356c12.84913,10.51293 26.86636,18.68964 40.8836,24.53016c15.18534,-14.01723 35.04308,-22.19395 54.90083,-22.19395c21.02585,0 39.7155,8.17672 54.90083,22.19395c15.18534,-5.84051 29.20257,-14.01723 40.8836,-24.53016c-4.67241,-19.85775 -1.1681,-40.8836 8.17672,-59.57324c10.51293,-17.52154 26.86636,-31.53878 46.72411,-37.37929c1.1681,-8.17672 2.33621,-16.35344 2.33621,-24.53016c0,-8.17672 -1.1681,-16.35344 -2.33621,-24.53016c-19.85775,-5.84051 -36.21119,-19.85775 -46.72411,-37.37929c-10.51293,-17.52154 -12.84913,-39.7155 -8.17672,-59.57324c-12.84913,-10.51293 -26.86636,-18.68964 -40.8836,-24.53016c-15.18534,14.01723 -33.87498,22.19395 -54.90083,22.19395c-19.85775,0 -39.7155,-8.17672 -54.90083,-22.19395c-15.18534,5.84051 -29.20257,14.01723 -40.8836,24.53016c4.67241,19.85775 1.1681,40.8836 -8.17672,59.57324c-10.51293,17.52154 -26.86636,31.53878 -46.72411,37.37929c-1.1681,8.17672 -2.33621,16.35344 -2.33621,24.53016c0,8.17672 1.1681,16.35344 2.33621,24.53016c19.85775,5.84051 36.21119,19.85775 46.72411,37.37929c9.34482,18.68964 12.84913,39.7155 8.17672,59.57324m40.8836,42.0517c-19.85775,-7.00862 -38.54739,-17.52154 -54.90083,-32.70688c-2.33621,-2.33621 -3.50431,-5.84051 -2.33621,-8.17672c5.84051,-17.52154 3.50431,-36.21119 -5.84051,-51.39652c-9.34482,-16.35344 -23.36206,-26.86636 -40.8836,-30.37067c-3.50431,-1.1681 -5.84051,-3.50431 -5.84051,-7.00862c-2.33621,-10.51293 -3.50431,-22.19395 -3.50431,-32.70688c0,-10.51293 1.1681,-21.02585 3.50431,-32.70688c1.1681,-3.50431 3.50431,-5.84051 5.84051,-7.00862c17.52154,-4.67241 32.70688,-15.18534 40.8836,-30.37067c9.34482,-16.35344 10.51293,-33.87498 5.84051,-51.39652c-1.1681,-3.50431 0,-7.00862 2.33621,-8.17672c16.35344,-14.01723 35.04308,-24.53016 54.90083,-32.70688c3.50431,-1.1681 5.84051,0 8.17672,2.33621c12.84913,12.84913 29.20257,21.02585 46.72411,21.02585c17.52154,0 35.04308,-7.00862 46.72411,-21.02585c2.33621,-2.33621 5.84051,-3.50431 8.17672,-2.33621c19.85775,7.00862 38.54739,17.52154 54.90083,32.70688c2.33621,2.33621 3.50431,5.84051 2.33621,8.17672c-5.84051,17.52154 -3.50431,36.21119 5.84051,51.39652c9.34482,16.35344 23.36206,26.86636 40.8836,30.37067c3.50431,1.1681 5.84051,3.50431 5.84051,7.00862c2.33621,10.51293 3.50431,22.19395 3.50431,32.70688c0,10.51293 -1.1681,21.02585 -3.50431,32.70688c-1.1681,3.50431 -3.50431,5.84051 -5.84051,7.00862c-17.52154,4.67241 -32.70688,15.18534 -40.8836,30.37067c-9.34482,16.35344 -10.51293,33.87498 -5.84051,51.39652c1.1681,3.50431 0,7.00862 -2.33621,8.17672c-16.35344,14.01723 -35.04308,24.53016 -54.90083,32.70688c-3.50431,1.1681 -5.84051,0 -8.17672,-2.33621c-12.84913,-12.84913 -29.20257,-21.02585 -46.72411,-21.02585c-17.52154,0 -35.04308,7.00862 -46.72411,21.02585c-1.1681,1.1681 -3.50431,2.33621 -5.84051,2.33621c-1.1681,0 -2.33621,0 -2.33621,0z"/>
                        </g>
                    </g>

                </svg>
                <div class="bullet_hell_input">
                    <CustomComponent/>
                    <p v-if="ifLogin">请输入你的弹幕</p>
                    <p v-if="!ifLogin">请先<a href="">登录</a> 或 <a href="">注册</a></p>
                    <input v-if="ifLogin" type="text" v-model="danmaku.text">
                    <input v-if="!ifLogin" type="text" readonly>
                    <span>弹幕礼仪</span>
                    <svg t="1667574164735" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="2273" width="15" height="15">
                        <path
                                d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                                p-id="2274"></path>
                    </svg>
                    <!--          <button @click="add(1)">装配</button>-->
                    <button @click="addDanmakuList">发送</button>
                    <!--          <button @click="auto">自动</button>-->
                    <!--          <button @click="stop">停止</button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
import CustomComponent from "@/views/VideoPlay/CustomComponent.vue";
import {mapState} from "vuex";

export default {
    name: "Video2",
    components: {CustomComponent},
    data() {
        return {
            playerOptions: {
                // videojs options
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                poster: "/static/images/author.jpg",
            },
            if_show_bullet: false,
            danmaku: {
                "mode": 1,
                "text": "Hello World",
                "stime": 0,
                "size": 25,
                "color": 0xffffff
            },
        }
    },
    mounted() {
        console.log('this is current player instance object', this.player)
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },
        // ...player event

        // or listen state event
        playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
        },

        // player is ready
        playerReadied(player) {
            console.log('the player is readied', player)
            // you can use it to do something...
            // player.[methods]
        },
        ifShowBullet() {
            this.if_show_bullet = !this.if_show_bullet
            if (this.if_show_bullet) {
                // 播放弹幕
                this.CM.play();
            } else {
                // 暂停弹幕
                this.CM.replay()
                this.CM.pause()
            }
        },
        addDanmakuList() {
            this.danmakuList.push(this.canvas)
        },
    },
    computed: {
        ...mapState("loginAbout", ["ifLogin"])
    }
}
</script>
<style scoped>

/*弹幕输入框-----------------------------------------------*/
.play_video_message_center_horizontally {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.play_video_message {

    border: 1px solid #eeeeee;
    box-shadow: 1px 1px 2px #eeeeee;
    white-space: nowrap;
    font-size: 13px;
    padding: 10px;
    right: 0;
    left: 0;
}

.play_video_message_img {
    width: 25px;
    height: 25px;
    margin: 0 10px;
    cursor: pointer;
}

.play_video_message_svg {
    width: 25px;
    height: 25px;
    margin: 0 10px;
    cursor: pointer;
}

.play_video_message_svg:hover {
    fill: #66b1ff;
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
    cursor: pointer;
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

/*---------------------------------------*/

</style>