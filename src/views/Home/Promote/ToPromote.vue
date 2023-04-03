<template>
    <div class="ToPromote">
        <div class="ToPromote-title">推广</div>
        <div class="grid-container" ref="tp">
            <div class="item" @click="toVideoPlay(n)" v-for="n in videoExtension" :key="n.videoId">
                <VideoView :videoData="n">
                    <img slot="img" :src="`pav/${n.videoCoverImgUrl}`">
                    <source slot="video" :src="`pav/${n.videoUrl}`">
                    <div slot="describe" class="foot_head" style="text-overflow:ellipsis;">
                        {{ n.videoBriefIntroduction }}
                    </div>
                    <div slot="tile" class="foot-end">
                        <a>
                            {{ n.videoTitle }}
                        </a>
                    </div>
                </VideoView>
            </div>
        </div>
    </div>
</template>
<script>
import VideoView from '@/views/Home/Promote/cpns/VideoView'
import {getPopularizeVideoPage} from "@/api/common";

export default {
    name: 'ToPromote',
    components: {
        VideoView
    },
    data() {
        return {
            gridEle: null,
            videoExtension: {}
        }
    },

    mounted() {
        this.init()
    },
    methods: { // 方法
        init() {
            this.getData()
        },
        getData() {
            // "dataCount": 6,

            let data = {
                "limit": 1,
                "dateCount": 8,
                "showDataContentId": 29
            }
            // 获取推广模块数据
            getPopularizeVideoPage(data).then(req => {
                    console.log("req.data", req.data)
                    let video = req.data['data']
                    this.videoExtension = video
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
    },
    // computed: { // 计算属性
    //   ...mapState("loginAbout", ["TPHCitems", "TPCitems"]),
    //   ...mapState("videoAbout", ["videoExtension"])
    // },

}
</script>
<style scoped>
.ToPromote {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.ToPromote-title {
    background-color: #fffce0;
    padding: 10px 0 10px 10px;
    border-radius: 3px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    /*grid-template-rows: repeat(2, minmax(15%, 1fr));*/
    grid-gap: 20px 20px;
}
</style>