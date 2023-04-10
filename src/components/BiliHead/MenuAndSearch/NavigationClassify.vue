<template>
    <div class="bili-head_end">
        <div class="bili-head_navigation">
            <div class="navigation_middle">
                <div v-for="n in videoSubarea" :key="n['videoSubareaId']" @click="goFilter(n['videoSubareaType'],n['videoSubareaId'])">
                    <SmallMenuBelow>
                        <button slot="button">{{ n['videoSubarea'] }}</button>
                        <div slot="menuButton" class="buttonMenu" v-if="n['videoSubareaType'].length!==0">
                            <a v-for="item in n['videoSubareaType']"
                               :key="item['videoSubareaTypeId']">{{ item['videoSubareaType'] }}</a>
                        </div>
                    </SmallMenuBelow>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallMenuBelow from "@/components/BiliHead/MenuAndSearch/cpns/SmallMenuBelow";
import {getSubarea} from "@/api/common";

export default {
    name: "NavigationClassify",
    components: {
        SmallMenuBelow,
    },
    data() {
        return {
            videoSubarea: {},
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.getData()
        },
        getData() {
            // 获取分类数据
            getSubarea().then(req => {
                    let video = req.data
                    this.videoSubarea = video
                    console.log("this.videoSubarea", this.videoSubarea)
                },
                error => {
                    console.log("错误信息", error.message)
                }
            )
        },
        goFilter(value,value1) {
            // this.$router.push("/filterContent")
            this.$router.push({
                name: "filterContent",
                query: {
                    "videoSubarea": JSON.stringify(value),
                    "videoSubareaId": value1
                }
            })
        },
    },
}
</script>

<style scoped>
.head_search > input {
    border: transparent;
    outline: none;
}

.bili-head_banner form {
    color: white;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.bili-head_banner form input {
    width: 70%;
}

.bili-head_end {
    width: 90%;
    margin: 0 5% 0 5%;
}

.bili-head_navigation {
    padding: 2vh;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /*background: #ffd8d8;*/
}

.navigation_left {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.icon {
    margin-right: 1rem;
}

.background-color_red {
    background: #f07775;
}

.background-color-cyan {
    background: #59ca73;
}

.background-color_bull {
    background: #bc8fef;
}

.imgBackground {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon_img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
}

.icon a {
    font-size: 10px;
}


.navigation_middle {
    /*border-right: 1px solid black;*/
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    display: grid;
    padding: 0 2vw;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    /*grid-template-rows: repeat(max(2), 25px);*/
    gap: 10px 10px;

}

.navigation_right {
    padding-left: 2vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;
}

.navigation_right > div {
    margin: auto;
    white-space: nowrap;
    /* 内容不换行 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.navigation_right svg {
    width: 20px;
    height: 20px;
}

.navigation_right a {
    margin: auto 0;
    font-size: 10px;
}
</style>