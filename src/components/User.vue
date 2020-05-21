<template>
  <div class="pull-right user">
    <router-link v-if="!user.nikiname" to="/login">登录</router-link>
    <router-link v-else :to="'/user/' + user.id">{{user.nikiname}}</router-link>
    <button @click="logout">退出</button>
  </div>
</template>

<script>
import bus from '@/bus'
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.user = {}
    }
  },
  activated () {
  },
  created () {
    // 尝试获取localStorage中是否有user
    /* const user = localStorage.getItem('user')

    if (user) {
      this.user = JSON.parse(user)
    }
*/
    bus.$on('sendUser', (user) => {
      // console.log(user)
      if (user) {
        this.user = JSON.parse(user)
      }
    })

  }
  
}
</script>

<style>
  .user {
    line-height: 106px;
  }
</style>
