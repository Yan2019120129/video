<template>
  <!-- 插入slot="button_active"属性为动态效果 -->
  <!-- 插入slot="button_text" 为静态效果 -->
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
export default {
  name: 'ItemOne',
  components: {},
}
</script>
<style scoped>
.itemOne {
  z-index: 12;
  position: relative;
  height: 100%;
  cursor: pointer;
}

.item-button {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img_path g {
  fill: blue;
}

.itemOne:hover .item-button_active {
  animation: itemButton 0.2s;
}

.item-button_active > * {
  height: 1rem;
  width: 1rem;
  /*color: white;*/
  text-decoration: none;
}

.disNone {
  left: -3rem;
  display: none;
  color: black;
  position: absolute;
  top: 100%;
}

.itemOne:hover .disNone {
  display: block;
  animation: ShowBlock .7s;
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

@keyframes ShowBlock {

  /* < !--具体细节自己可以调整--> */
  0% {
    opacity: 0;
    transform: translateY(-10px)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
}
</style>