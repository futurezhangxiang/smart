<template>
  <div class="wrapper navbar">
    <div class="container clearfix">
      <div class="logo pull-left">
        <span class="mlogo">
          <span class="logo-a fl"></span>
          <span class="logo-b fl"></span>
          <span class="logo-c fl"></span>
        </span>
        <p>悦读FM</p>
      </div>
      
      <nav class="menu pull-left">
        <router-link
          v-for="item in types"
          :key="item.id"
          :to="{name: 'channel', params: {id: item.id, page: 1}}"
          active-class="cur"
          >
            {{item.type}}
          </router-link>
      </nav>
      <User></User>
    </div>
  </div>
</template>

<script>
// 引入请求数据的函数
import { getMenu } from "@/service/getData";
import User from '../User'
export default {
  components: {
    User
  },
  data () {
    return {
      types: []
    }
  },
  created () {
    getMenu().then(res => {
      this.types = res.data.res
    })
  }
}
</script>

<style scoped>
  .logo {width:120px; line-height:30px;display: flex;}
  .logo p{position: relative;top: 20px}
  .logo a {display:block; width:100%; height:100%; font-size:14px;}
  .logo a:hover {color:#F30;}
  .mlogo {width:20px; height:30px; display:block; margin-right:15px;display: flex;margin-top: 35px}
  .mlogo span {width:4px; background:#ee5044; display:block; border-radius:2px;}
  .logo-a {height:18px; margin:6px 4px 0 0;}
  .logo-b {height:28px; margin:0 4px 0 0;}
  .logo-c {height:18px; margin:6px 0 0 0;}
  .menu {
    height: 106px;
    line-height: 106px;
  }

  .menu a {
    margin: 0 20px;
  }

  .cur {
    color: #ee5044;
  }
  
</style>
