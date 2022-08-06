    <template>
    <div class="box">
        <div class="head">
            <div class="videoPlay" @mouseenter="videoPlay" @mouseleave="videoPlay">
                <picture class="box-picture" ref="pic">
                    <source srcset="@/assets/img/002.jpg">
                    <img src="@/assets/img/001.jpg">
                </picture>
                <video ref="vid" class="box-video" crossorigin="anonymous" muted="muted" preload="none">
                    <slot>
                        <source src="@/assets/video/test.mp4">
                    </slot>
                </video>
            </div>
        </div>
        <div class="foot">
            <div class="foot_head" style="text-overflow:ellipsis;">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
            <div class="foot-end"><a>标题</a></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VideoView',
    props: [
        'videoData'
    ], data() {
        return {
            picture: null,
            isPlay: true,
            video: null,
            showClothTimer: null,
        }
    },
    mounted() {
        this.video = this.$refs.vid;
        this.picture = this.$refs.pic;
    },
    methods: {
        videoPlay() {
            this.isPlay = !this.isPlay;
            clearTimeout(this.showClothTimer);
            if (!this.isPlay && this.video.paused) {
                this.showClothTimer = setTimeout(() => {
                    this.picture.style = 'opacity:0;';
                    this.video.play();
                }, 1000);
            } else {
                this.picture.style = 'opacity:1';
                this.video.pause();
                this.video.currentTime = null;
            }

        }
    }
}
</script>
    <style scoped>
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .head {
        width: 100%;
        height: 60%;
    }
    
    .videoPlay {
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    
    .box-video {
        height: 100%;
        width: 100%;
    }
    
    .box-picture {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        transition: all .1s linear;
        opacity: 1;
    }
    
    .box-picture img,
    source {
        width: 100%;
        height: 100%;
        transition: all .1s linear;
    }
    
    
    .foot {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .foot_head {
        font-size: 1rem;
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
    
    .foot_end {
        margin-top: 5px;
        width: 100%;
    }
    </style>