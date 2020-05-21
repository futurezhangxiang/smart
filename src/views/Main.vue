<template>
  <div>
    <!-- 导航 -->
    <Menu></Menu>
    <!-- router-view -->
    <div class="container main">
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import Menu from '@/components/Main/Menu'

export default {
  components: {
    Menu
  }
}
</script>

<style>
  .main {
    padding-top: 30px;
  }
</style>
