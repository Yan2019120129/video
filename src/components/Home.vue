    <template>
    <div class="bili-main">
        <div ref="TPH" class="toPromote">
            <ToPromoteHead :videoData="videoData"></ToPromoteHead>
        </div>
        <div class="toPromote">
            <ToPromote :videoData="videoData">
            </ToPromote>
        </div>
        <div class="toPromote">
            <ToPromoteSecond :videoData="videoData"><span>赛事</span></ToPromoteSecond>
        </div>
        <div class="toPromote">
            <ToPromoteThird :videoData="videoData"><span>国创</span></ToPromoteThird>
        </div>
        <div class="toPromote">
            <ToPromoteThird :videoData="videoData"></ToPromoteThird>
        </div>
    </div>
</template>
<script>
import ToPromoteHead from './BiliMain/ToPromoteHead'
import VideoView from './VideoView/VideoView'
import ToPromote from './BiliMain/ToPromote'
import ToPromoteSecond from './BiliMain/ToPromoteSecond'
import ToPromoteThird from './BiliMain/ToPromoteThird'
export default {
    name: 'Home',
    components: {
        VideoView, ToPromote, ToPromoteSecond, ToPromoteHead, ToPromoteThird
    }, data() {
        return {
            videoData: null,
        }
    }, mounted() {
        this.$store.dispatch("getVideo", null);
        this.videoData = this.$store.state.VideoData;
    }, methods: {

    }
} 
</script>
    <style scoped>
    .bili-main {
        width: 100%;
    }
    
    .toPromote {
        margin: 3vh 0;
    }
    </style>