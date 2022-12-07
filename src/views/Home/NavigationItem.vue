<template>
  <div class="item">
    <slot></slot>
    <br>
  </div>
</template>
<script>
export default {
  name: "NavigationItem",
}
</script>

<style scoped>
.item {
  border: 1px solid #ffe5e5;
  height: 70px;
}

.item:hover {
  background: #eef6ff;
}

.item > * {
  padding-left: 22%;
  line-height: 70px;
}
</style>