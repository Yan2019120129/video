    <template>
    <div class="bili-main">
        <div ref="TPH" class="toPromote">
            <ToPromoteHead></ToPromoteHead>
        </div>
        <div class="toPromote">
            <ToPromote></ToPromote>
        </div>
        <div class="toPromote">
            <ToPromoteSecond></ToPromoteSecond>
        </div>
        <div class="toPromote">
            <ToPromoteThird></ToPromoteThird>
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
    name: 'BiliMain',
    components: {
        VideoView, ToPromote, ToPromoteSecond, ToPromoteHead, ToPromoteThird
    }, data() {
        return {
            grid: null,
            gridItem: null,
            items: null,
        }
    }, mounted() {
/*         this.items = this.$refs.TPH
        this.$store.commit('calculateContainerLength', this.items)
        console.log(this.$store.state.items); */
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