<template>
    <div class="bili-head">
        <div class="bili-head_top">
            <div class="bili-head_banner">
                <ul class="bili-head_banner_left-ul">
                    <li>导航1</li>
                    <li>导航2</li>
                    <li>导航3</li>
                    <li>导航4</li>
                    <li>导航5</li>
                    <li>导航6</li>
                </ul>
                <form action="">
                    <input type="text"><button>搜素</button>

                </form>
                <ul class="bili-head_banner_right-ul">
                    <li>导航7</li>
                    <li>导航8</li>
                    <li>导航9</li>
                    <li>导航10</li>
                    <li>导航11</li>
                    <li>导航12</li>
                </ul>
            </div>
            <img class="bili-head-img" src="@/assets/img/headImg.png">

        </div>

        <div class="bili-head_end">
            <div class="bili-head_navigation">
                <div class="navigation_left">
                    <div>
                        <img src="@/assets/img/001.jpg" alt=""><br>
                        <a href="">动态</a>
                    </div>
                    <div>
                        <img src="@/assets/img/001.jpg" alt=""><br>
                        <a href="">热门</a>
                    </div>
                    <div>
                        <img src="@/assets/img/001.jpg" alt=""><br>
                        <a href="">频道</a>
                    </div>
                </div>
                <div class="navigation_middle">
                    <button v-for="(p, index) in myData.slice(0, 25)" :key="index">
                        {{ p.name }}
                    </button>
                </div>
                <div class="navigation_right">
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                    <div>
                        <svg></svg>
                        <a href="">测试</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import testData from '@/assets/test.json'
export default {
    name: "BiliHead",
    data() {
        return {
            myData: testData.test,
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
.bili-head {
    position: relative;
    display: block;
    width: 100%;
}

.bili-head-img {
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    object-fit: cover;
}

.bili-head_banner {
    width: 100%;
    top: 1vh;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bili-head_banner_left-ul {
    list-style-type: none;
    width: 35%;
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    /* justify-content: space-around; */
}

.bili-head_banner_left-ul li {
    margin-left: 1vw;
    color: white;
}

.bili-head_banner_right-ul {
    list-style-type: none;
    width: 35%;
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    justify-content: end;
}

.bili-head_banner_right-ul li {
    margin-right: 1vw;
    color: white;
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
    width: 100%;
}


.bili-head_navigation {
    padding: 2vh 10%;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: rgb(1, 218, 238); */
}

.navigation_left {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.navigation_left>div {
    margin: auto 0;
    padding-right: 1vw;
}

.navigation_left img {
    border-radius: 20px;
    width: 40px;
    height: 40px;
}


.navigation_middle {
    border-right: 1px solid black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    padding: 0 2vw;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-template-rows: repeat(max(2), 25px);
    gap: 10px 10px;

}

.navigation_middle>button {
    width: 100%;
    white-space: nowrap;
    align-content: center;
}

.navigation_right {
    padding-left: 2vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;
}

.navigation_right>div {
    margin: auto;
    white-space: nowrap;
    /* 内容不换行 */
}

.navigation_right svg {
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.navigation_right a {
    margin: auto 0;
}
</style>