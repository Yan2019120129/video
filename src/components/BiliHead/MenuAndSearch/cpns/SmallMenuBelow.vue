<template>
    <div class="bt">
        <div class="BMOutSide">
            <!--      <div class="buttonMenu">-->
            <slot name="menuButton"></slot>
            <!--      </div>-->
        </div>
        <slot name="button"></slot>
    </div>
</template>
<style scoped>
.bt {
    width: 100%;
    height: 100%;
    position: relative;
}

.bt button {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    align-content: center;
    border: transparent;
    border-radius: 5px;
    cursor:pointer;
}

.bt:hover button {
    background-color: #dedede;
}

.buttonMenu > * {
    white-space: nowrap;
}

.BMOutSide {
    z-index: 2;
    padding: 10px;
    top: 100%;
    align-items: center;
    display: none;
    position: absolute;
    left: -80%;
}

.buttonMenu {
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #4a4a4a;
    background-color: white;
}

.bt:hover > .BMOutSide {
    display: block;
    animation: menuShow .5s;
}

/* .bt:hover .buttonMenu {
    animation: menuShow .5s;
} */

@keyframes menuShow {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.buttonMenu > button {
    white-space: nowrap;
}
</style>