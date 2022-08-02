    <template>
    <div class="box">
        <div class="head">
            <div class="videoPlay" @mouseenter="videoPlay" @mouseleave="videoPlay">
                <video v-show="!isShowImg" class="box-video" crossorigin="anonymous" muted="muted" ref="test">
                    <source v-show="!isPlay" :src="$route.query.url">
                </video>
                <picture class="box-picture" v-show="isShowImg" >
                    <source srcset="@/assets/img/001.jpg">
                    <img src="@/assets/img/002.jpg">
                </picture>
            </div>
        </div>
        <div class="middle" style="text-overflow:ellipsis;">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
        <div class="foot"><a>标题</a></div>
    </div>
</template>
<script>
export default {
    name: 'VideoView',
    props: [
        'videoSrc'
    ], data() {
        return {
            isShowImg: true,
            isPlay: true,
            video: null,
            showClothTimer: null,
        }
    },
    mounted() {
        this.video = this.$refs.test;
    },
    methods: {
        videoPlay() {
            this.isPlay = !this.isPlay;
            clearTimeout(this.showClothTimer);
            if (!this.isPlay) {
                this.showClothTimer = setTimeout(() => {
                    this.video.play();
                    this.isShowImg = false;
                }, 1000);
            } else {
                this.video.pause();
                this.video.currentTime = null;
                this.isShowImg = true;
            }

        }
    }
}
</script>
    <style>
    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .box-video {
        width: 100%;
        height: 100%;
        transition: all .1s linear;
    }
    
    .videoPlay {
        width: 100%;
        height: 100%;
    }
    
    .videoPlay picture img,source {
        width: 100%;
        height: 100%;
        transition: all .1s linear;
    }
    
    .middle {
        /* 在恰当的断字点进行换行 */
        word-break: break-all;
        /* 超出范围隐藏 */
        overflow: hidden;
        /* 文字超出用省略号 */
        text-overflow: ellipsis;
        /* 盒子模型 */
        display: -webkit-box;
        /* 显示的文本行数 */
        -webkit-line-clamp: 2;
        /* 子元素的垂直排列方式 */
        -webkit-box-orient: vertical;
    }
    
    .fool {
        width: 100%;
    }
    </style>