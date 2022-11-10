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
  position: relative;
  /*z-index: 2;*/
  height: 100%;
  /*使用flex解决disNone按钮和菜单的垂直居中的问题*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item-button {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.itemOne:hover .item-button_active {
  animation: itemButton 0.2s;
}

.item-button_active > * {
  /*color: white;*/
  text-decoration: none;
}

.disNone {
  /*菜单左右偏移量*/
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