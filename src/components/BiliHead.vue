<template>
        <div class="bili-head">
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
</template>
<script>
</script>
<style scoped>
.bili-head {
    position: relative;
    display: block;
    width: 100%;
    height: 18vh;
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

.bili-head_navigation_ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.bili-head_navigation_ul li{
margin: 1vw;
}
</style>