<template>
  <div class="bili-main">
    <slot>
      <Home></Home>
    </slot>
  </div>
</template>
<script>
import Home from '@/views/Home/Home.vue'

export default {
  name: 'BiliMain',
  components: {
    Home
  }, data() {
    return {
      videoData: null,
    }
  },
  mounted() {
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>