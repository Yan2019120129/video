<template>
    <el-row :gutter="20">
        <el-col :span="24">
            <!--      <div class="grid-content bg-purple ">-->
            <!--        <div class="slideshow">-->
            <!--          &lt;!&ndash;          轮播图&ndash;&gt;-->
            <!--          <el-carousel :interval="5000" height="400px" arrow="always">-->
            <!--            &lt;!&ndash;          <el-carousel-item v-for="item in 4" :key="item">&ndash;&gt;-->
            <!--            &lt;!&ndash;            <img src="@/assets/img/001.jpg" alt="">&ndash;&gt;-->
            <!--            &lt;!&ndash;          </el-carousel-item>&ndash;&gt;-->
            <!--            <el-carousel-item>-->
            <!--              <div class="item">-->
            <!--                <img class="item1_img" src="@/assets/img/001.jpg" alt="">-->
            <!--                <div class="item1_img_describe linear-gradient1"><span>描述</span></div>-->
            <!--              </div>-->

            <!--            </el-carousel-item>-->
            <!--            <el-carousel-item>-->
            <!--              <div class="item ">-->
            <!--                <img class="item1_img" src="@/assets/img/002.jpg" alt="">-->
            <!--                <div class="item1_img_describe linear-gradient2"><span>描述</span></div>-->
            <!--              </div>-->
            <!--            </el-carousel-item>-->
            <!--            <el-carousel-item>-->
            <!--              <div class="item ">-->
            <!--                <img class="item1_img" src="@/assets/img/003.jpg" alt="">-->
            <!--                <div class="item1_img_describe linear-gradient3"><span>描述</span></div>-->
            <!--              </div>-->
            <!--            </el-carousel-item>-->
            <!--            <el-carousel-item>-->
            <!--              <div class="item ">-->
            <!--                <img class="item1_img" src="@/assets/img/004.jpg" alt="">-->
            <!--                <div class="item1_img_describe linear-gradient4"><span>描述</span></div>-->
            <!--              </div>-->
            <!--            </el-carousel-item>-->
            <!--          </el-carousel>-->
            <!--        </div>-->
            <!--      </div>-->
            <!--    </el-col>-->
            <!--    <el-col :span="16">-->
            <div class="grid-content bg-purple-light">
                <div class="grid-container" ref="tph">
                    <div class="grid-content bg-purple ">
                        <div class="slideshow">
                            <!--          轮播图-->
                            <el-carousel :interval="5000" height="400px" arrow="always">
                                <!--          <el-carousel-item v-for="item in 4" :key="item">-->
                                <!--            <img src="@/assets/img/001.jpg" alt="">-->
                                <!--          </el-carousel-item>-->
                                <el-carousel-item>
                                    <div class="item">
                                        <img class="item1_img" src="@/assets/img/001.jpg" alt="">
                                        <div class="item1_img_describe linear-gradient1"><span>描述</span></div>
                                    </div>

                                </el-carousel-item>
                                <el-carousel-item>
                                    <div class="item ">
                                        <img class="item1_img" src="@/assets/img/002.jpg" alt="">
                                        <div class="item1_img_describe linear-gradient2"><span>描述</span></div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <div class="item ">
                                        <img class="item1_img" src="@/assets/img/003.jpg" alt="">
                                        <div class="item1_img_describe linear-gradient3"><span>描述</span></div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <div class="item ">
                                        <img class="item1_img" src="@/assets/img/004.jpg" alt="">
                                        <div class="item1_img_describe linear-gradient4"><span>描述</span></div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div v-for="n in videoMain" class="grid-item"
                         @click="toVideoPlay(n)"
                         :key="n.videoId">
                        <VideoView :videoData="n">
                            <img slot="img" :src="`pav${n.videoCoverImgUrl}`">
                            <source slot="video" :src="`pav${n.videoUrl}`">
                            <div slot="describe" class="foot_head" style="text-overflow:ellipsis;">
                                {{ n.videoBriefIntroduction }}
                            </div>
                            <div slot="tile" class="foot-end">
                                <a>{{ n.videoTitle }}</a>
                            </div>
                        </VideoView>
                    </div>
                </div>
            </div>
            <!--        <div class="grid-container">-->
            <!--          <div class="grid-item" v-for="index in 12" :key="index">{{ index }}</div>-->
            <!--        </div>-->
        </el-col>
    </el-row>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import {mapState} from 'vuex'
import {getRandomMainFindVideoPage} from "@/api/common";
import {getTokenValue} from "@/utility/manageDate";

export default {
    name: 'ToPromoteHead',
    components: {
        VideoView
    },
    props: {
        videoData: {}
    },
    data() {
        return {
            gridEle: null,
            videoMain: [],
            // 获取主推荐数据
            pageData: {
                limit: 1,
                dateCount: 8,
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.getData()
        },
        // "dataCount": 8,

        getData() {
            let data = {
                "dateCount": 8,
                "showDataContentId": 28,
                "userId": getTokenValue("userId")
            }
            // 获取头部内容模块数据
            getRandomMainFindVideoPage(data).then(req => {
                    let video = req.data['data']
                    this.videoMain = video
                    console.log("video", req.data)

                },
                error => {
                    console.log("错误信息", error.message)
                }
            )
        },
        toVideoPlay(value) {
            this.$router.push({
                name: "videoPlay",
                query: {
                    userId: value.userId,
                    videoId: value.videoId,
                }
            })
        },
        // toHome() {
        //   this.$router.push({
        //     name: 'Home',
        //   })
        // },

    },
    computed: {
        ...mapState('layoutAbout', ["TPHCitems", "TPCitems"]),
    },
    watch: {
        videoData(newVal) {
            // 在 myProp 的值发生变化时执行该函数
            this.videoMain = newVal;
        },
    },
}
</script>
<style scoped>
.el-carousel {
    z-index: 0;
    border-radius: 10px;
    overflow: hidden;
}

.bg-purple-light {
    /*height: 420px;*/
    display: -webkit-box;
    overflow: hidden; /*超出隐藏*/
    /*text-overflow: ellipsis;!*隐藏后添加省略号*!*/
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*想显示多少行*/
}

.slideshow {
    border-radius: 5px;
    /*overflow: hidden;*/
}

.bg-purple {
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    grid-template-rows: repeat(2, minmax(15%, 1fr));
    grid-gap: 20px 20px;
}

/* 在@media查询中，根据屏幕宽度动态地调整网格数量 */
@media (max-width: 1fr) {
    .grid-item:nth-child(5),
    .grid-item:nth-child(9) {
        display: none;
    }
}

/*!* 在@media查询中，根据屏幕宽度动态地调整网格数量 *!*/
/*@media (max-width: 1370px) {*/
/*  .grid-item:nth-child(4) ,*/
/*  .grid-item:nth-child(8)*/
/*  {*/
/*    display: none;*/
/*  }*/
/*}*/

/*@media (max-width: 1100px) {*/
/*  .grid-item:nth-child(3) ,*/
/*  .grid-item:nth-child(7)*/
/*  {*/
/*    display: none;*/
/*  }*/
/*}*/

.item {
    height: 400px;
    position: relative;
    color: white;

}

.item1_img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.item1_img_describe {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;


}

.linear-gradient1 {
    background: linear-gradient(to top, rgba(88, 90, 58, 1), rgba(125, 126, 101, 0.9), rgba(205, 206, 169, 0));
    /*filter: blur(5px);*/
}

.linear-gradient2 {
    background: linear-gradient(to top, rgb(25, 42, 19), rgba(45, 61, 28, 0.9), rgba(87, 116, 64, 0));
    /*filter: blur(5px);*/

}

.linear-gradient3 {
    background: linear-gradient(to top, rgb(35, 30, 22, 1), rgba(220, 173, 22, 0));
    /*filter: blur(5px);*/

}

.linear-gradient4 {
    background: linear-gradient(to top, rgb(30, 30, 29), rgba(37, 37, 34, 0.9), rgba(180, 182, 147, 0));
    /*filter: blur(5px);*/

}

</style>