<template>
    <div class="itemOne">
        <div class="item-button">
            <div class="item-button_active">
                <slot name="button_active"></slot>
            </div>
            <slot name="button_text"></slot>
        </div>
        <div class="disNone">
            <div ref="sm" class="item_menu">
                <div class="item_menu_left">
                    <div class="item_menu-head">热点直播:</div>
                    <ul class="item_menu_left_ul">
                        <li v-for="index in 6">
                            <div class="portrait">
                                <img src="@/assets/img/001.jpg" alt="">
                                <a href="">动态</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item_menu_right">
                    <div class="item_menu-head">热门活动:</div>
                    <ul class="item_menu_right_ul">
                        <li><img src="@/assets/img/001.jpg" alt=""></li>
                        <li><img src="@/assets/img/001.jpg" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemOne',
    data() {
        return {
            opacity: 0,
            stoop: null,
        }
    }, mounted() {
    }, methods: {
    },
}
</script>
<style scoped>
.itemOne {
    position: relative;
    font-size: 10px;
}

.item-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.itemOne:hover .item-button_active {
    animation-duration: .2s;
    animation-name: itemButton;
}

.item-button a {
    font-size: 1.2rem;
}

.item-button svg {
    height: 1.2rem;
    width: 1.2rem;
}


.disNone {
    position: absolute;
    top: 3rem;
    display: none;
}

.itemOne:hover .disNone {
    display: block;
}

.item_menu {
    position: absolute;
    padding: 1rem;
    width: 30rem;
    height: 15rem;
    display: flex;
    flex-direction: row;
    background-color: white;
    color: black;
    border-radius: .5rem;
}

.itemOne:hover .item_menu {
    animation: hideIndex 0.3s;
}

.show-tem_menu {
    transition: all 1 linear;
    opacity: 1;
}

.item_menu-head {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

.item_menu_left {
    width: 60%;
}

.item_menu_left_ul {
    padding: 0;
    list-style-type: none;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-flow: row wrap;
}

.item_menu_left_ul li {
    flex: 0 0 20%;
    margin: 1rem;
}

.item_menu_right {
    width: 40%;
}

.item_menu_right_ul {
    width: 80%;
    padding: 0;
    margin: auto;
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

@keyframes itemButton {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(0px);
    }
}

@keyframes hideIndex {

    /* < !--具体细节自己可以调整--> */
    0% {
        opacity: 0;
        transform: translate(0, -1rem)
    }

    100% {
        opacity: 1;
        transform: translate(0, 0)
    }
}
</style>