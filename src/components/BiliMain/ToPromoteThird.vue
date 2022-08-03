<template>
    <div class="ToPromoteThird">
        <div class="ToPromoteThird-left">
            <div class="ToPromote-title">
                <slot>推广</slot>
            </div>
            <div class="grid-container">
                <div ref="VVI" class="item" v-for="index in this.$store.state.TPCitems*3">
                    <VideoView></VideoView>
                </div>
            </div>
        </div>
        <div class="ToPromoteThird-rigth" v-show="ToPromoteThirdRigthHeadIsShow">
            <div class="ToPromoteThird-rigth-head">
                <a>直播排行</a>
                <a>关注主播</a>
                <a>为你推荐</a>``
            </div>
            <div class="TopromoteThird-right-main">
                <ul class="right-main-ul">
                    <li class="right-main-ul-li" v-for="index in 5">
                        <div>
                            <img src="@/assets/img/001.jpg" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import VideoView from '../VideoView/VideoView'
export default {
    name: 'ToPromoteThird',
    components: {
        VideoView
    },
    data() {
        return {
            ToPromoteThirdRigthHeadIsShow: false,
            ToPromoteThirdLeftItems: 21,
        }
    }, mounted() {
        // setTimeout(() => {
        //     this.ToPromoteThirdRigthHeadIsShow = true;
        //     this.ToPromoteThirdLeftItems = 10;
        //     this.$refs.VVI.style = 'width:80%'
        // }, 1000);
    }
}
</script  >
<style scoped>
.ToPromoteThird {
    display: flex;
    column-gap: 10px;
    flex-direction: row;
}

.ToPromoteThird-left {
    width: 100%;
}

.ToPromote-title {
    padding: 10px 0;
}

.grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 3;
    grid-gap:50px 20px;
}

.ToPromoteThird-rigth {
    width: 20%;
}

.ToPromoteThird-rigth-head {
    display: flex;
    flex-direction: row;
}

.ToPromoteThird-rigth-head a {
    padding: 10px 10px 10px 0;

}

.right-main-ul {
    counter-reset: section;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid rgb(170, 170, 170);
    border-radius: 10px;
}

.right-main-ul-li:last-child {
    border-bottom: transparent;
}

.right-main-ul-li {
    height: 60px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(170, 170, 170);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.right-main-ul-li::before {
    margin-left: 10px;
    counter-increment: section;
    content: counter(section);
    font-size: 25px;
    font-style: italic;
}


.right-main-ul-li div {
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.right-main-ul-li img {
    height: 100%;
}
</style>