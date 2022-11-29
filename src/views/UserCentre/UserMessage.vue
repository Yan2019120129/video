<template>
  <div class="user_message">
    <el-container>
      <el-header>
        <MenuAndSearchTwo/>
      </el-header>
      <el-main>
        <router-view name="router_userMessage"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuAndSearchTwo from "@/components/BiliHead/MenuAndSearch/MenuAndSearchTwo"
import UserMessageMain from "@/views/UserCentre/particular/UserMessageMain";

export default {
  name: "UserMessage",
  components: {
    MenuAndSearchTwo,
    UserMessageMain
  },
  data() {
    return {
      tabPosition: 'left',
      activeName: 'ninth'
    }
  },
}
</script>

<style scoped>
.user_message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}

.box-border {
  border: 1px solid #e3e3e3;
  border-radius: 5px;
}

.el-container {
  height: 100%;
}

.el-header {
  position: sticky;
  z-index:999;
  color: #333;
  padding: 0;
}

.el-main {
  color: #333;
  height: 100%;
  width: 100%;
  overflow-y: visible;
  overflow-x: hidden;
  /*overflow: visible !important;*/

}
</style>