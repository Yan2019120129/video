<template>
    <div class="grid-container" ref="tph">
        <div class="item1">
            <img src="@/assets/img/001.jpg" alt="">
        </div>
        <VideoView v-for="index in this.$store.state.TPHCitems "></VideoView>
    </div>
</template>
<script>
import VideoView from '../VideoView/VideoView'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'ToPromoteHead',
    components: {
        VideoView
    },
    data() {
        return {
            gridEle: null,
        }
    }, mounted() {
        this.gridEle = this.$refs.tph;
        this.$store.commit('toPromoteContainer', this.gridEle);
    }, methods: {

    }
}
</script>
<style scoped>
.grid-container {
    height: 420px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(2, minmax(200px, 1fr));
    grid-gap: 20px 20px;
    overflow: hidden;
}

.box {
    display: flex;
    flex-direction: column;
}

.item1 {
    height: 350px;
    border-radius: 10px;
    overflow: hidden;
    grid-area: 1/1/3/3;
}

.item1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>                