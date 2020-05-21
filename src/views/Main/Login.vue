<template>
  <div class="login">
    <div class="input-group">
      <input type="text" placeholder="请输入邮箱" v-model="email">
    </div>
    <div class="input-group">
      <input type="text" placeholder="请输入密码" v-model="password">
    </div>
    <button @click="loginHandler">登录</button>
  </div>
</template>

<script>
import { login } from '@/service/getData'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginHandler () {
      login(this.email, this.password).then(res => {
        console.log(res)
        // 把 token存储在localstrage
        localStorage.setItem('token', res.data.res.token)
        localStorage.setItem('user', JSON.stringify(res.data.res.user))
        const path = this.$route.query.returnurl || '/'
        console.log(path)
        this.$router.replace(path)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 300px;
 
    .input-group {
      // width: 100%;
      margin-bottom: 20px;
      input {
        display: block;
        width: 100%;
        border: none;
        background: #fff;
        height: 30px;
        padding: 0 10px;
      }
    }
    button {
      background: #ee5044;
      color: #fff;
      border: none;
      height: 30px;
      padding: 0 15px;
    }
 }
</style>
