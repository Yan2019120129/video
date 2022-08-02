<template>
    <div>
        <div class="ToPromote-title">推广</div>
        <div class="grid-container">
            <div class="item" v-for="index in 10">
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
    }
}
</script  >
<style scoped>
.ToPromote-title {}

.grid-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}

.item {
    width: 200px;
    height: 200px;
}
</style>