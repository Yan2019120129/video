<template>
    <div class="itemOne">
        <div class="item-button">
            <div class="item-button_active">
                <slot name="button_active"></slot>
            </div>
            <slot name="button_text"></slot>
        </div>
        <div class="disNone">
            <slot name="menu"></slot>
        </div>
    </div>
</template>
<script>
import NavigationMenu from '@/components/BiliHead/NavigationMenu.vue'
export default {
    name: 'ItemOne',
    components: {
        NavigationMenu,
    },
}
</script>
<style scoped>
.itemOne {
    position: relative;
    height: 100%;
}

.item-button {
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.itemOne:hover .item-button_active {
    animation: itemButton 0.2s;

}

.item-button_active>* {
    height: 1rem;
    width: 1rem;
}

.disNone {
    left: -3rem;
    display: none;
    color: black;
    position: absolute;

}

.itemOne:hover .disNone {
    display: block;
    animation: hideIndex 0.7s;
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
        transform: translate(0, -10px)
    }

    100% {
        opacity: 1;
        transform: translate(0, 0)
    }
}
</style>