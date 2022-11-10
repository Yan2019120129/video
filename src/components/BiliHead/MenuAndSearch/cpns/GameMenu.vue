<template>
    <div class="item_menu">
        <div class="item_menu_left">
            <div class="left_img"> <img src="@/assets/img/001.jpg" alt=""></div>
            <div class="portrait" v-for="index in 3">
                <img src="@/assets/img/001.jpg" alt="">
                <a href="">动态</a>
            </div>
        </div>
        <div class="item_menu_right">
            <div class="item_menu_head">新游预告:</div>
            <ul class="item_menu_right_ul">
                <li>第1</li>
                <li>第2</li>
                <li>第3</li>
                <li>第4</li>
                <li>第5</li>
                <li>第6</li>
            </ul>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.item_menu {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    width: 25rem;
    height: 15rem;
    border-radius: .5rem;
    background-color: white;
    box-shadow: 0 0 15px #6a6a6a;
}

.show-tem_menu {
    transition: all 1 linear;
    opacity: 1;
}

.item_menu_left {
    width: 60%;
    padding: .5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
}

.left_img {
    grid-area: 1/1/3/4;
    /* height: 8rem;
    width: 90%; */
}

.left_img>img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}

.item_menu_right {
    width: 40%;
    padding-left: 20px;
}

.item_menu_right_ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
}

.item_menu_right_ul li {
    margin: .5rem 0;
    width: 100%;
}

.item_menu_right_ul li img {
    border-radius: .5rem;
    width: 100%;
    height: 100%;
}

.portrait {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.portrait img {
    border-radius: 20px;
    width: 40px;
    height: 40px;
}
</style>