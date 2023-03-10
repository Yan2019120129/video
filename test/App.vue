<template>
  <div class="grid-container">
    <div v-for="(item, index) in gridItems" :key="index" class="grid-item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gridItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'],
      itemWidth: 100, // 每个网格项的宽度
      numColumns: 3 // 每行默认显示的网格数量
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateGridItems)
    this.updateGridItems()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateGridItems)
  },
  computed: {
    // 根据窗口大小动态计算每行可以显示的网格数量
    numColumns() {
      const screenWidth = window.innerWidth
      if (screenWidth < 768) {
        return 1
      } else if (screenWidth < 1024) {
        return 2
      } else {
        return 3
      }
    },
    // 计算每行可以容纳的网格数量
    itemsPerRow() {
      const containerWidth = this.$el.clientWidth
      return Math.floor(containerWidth / this.itemWidth)
    },
    // 根据每行可以容纳的网格数量重新计算网格数据
    visibleGridItems() {
      const itemsPerRow = this.itemsPerRow
      const numItems = this.gridItems.length
      const visibleItems = []
      for (let i = 0; i < numItems; i += itemsPerRow) {
        visibleItems.push(this.gridItems.slice(i, i + itemsPerRow))
      }
      return visibleItems
    }
  },
  methods: {
    // 更新网格数据
    updateGridItems() {
      const itemsPerRow = this.itemsPerRow
      if (itemsPerRow !== this.numColumns) {
        this.numColumns = itemsPerRow
      }
    }
  }
}
</script>

<style>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.grid-item {
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
