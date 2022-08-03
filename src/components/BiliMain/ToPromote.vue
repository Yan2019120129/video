<template>
    <div class="ToPromote">
        <div class="ToPromote-title">推广</div>
        <div class="grid-container" ref="tp">
            <div class="item" v-for="index in this.$store.state.TPCitems">
                <VideoView></VideoView>
            </div>
        </div>
    </div>
</template>
<script>
import VideoView from '../VideoView/VideoView'
export default {
    name: 'ToPromote',
    components: {
        VideoView
    }, data() {
        return {
            gridEle: null,
        }
    }, mounted() {
    }
}
</script  >
<style scoped>
.ToPromote {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.ToPromote-title {
    padding: 10px 0;
}

.grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px 20px;
}

/* .item {
    flex-grow: 1;
    min-width: 200px;
    height: 200px;
} */
</style>