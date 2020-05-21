<template>
  <div class="clearfix">
    <textarea class="pull-left content" v-model="content"></textarea>
    <button class="comment-btn pull-left" @click="comment">评论</button>
  
  </div>
</template>

<script>
import {checkToken, addComment} from '@/service/getData'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    comment () {
      // 获取articleid
      const {id} = this.$route.params



      const token = localStorage.getItem('token')
      if (token) {
        checkToken(token).then(res => {
          if (res.data.res_code === 401) {
            this.$router.push({
              path: '/login',
              query: {
                returnurl: this.$route.path
              }
            })
          } else {
            // 如果成功则调用接口
            addComment(id, this.content).then(res => {
              console.log(res.data)
              this.$emit('send:comment', res.data.res)
            })
          }
        }) 

      } else {
        this.$router.push({
          path: '/login',
          query: {
            returnurl: this.$route.path
          }
        })
      }
    }
  }
}
</script>

<style>
.content {
  width: 550px;
  padding: 10px;
  border: none;
  resize: none;
}

.comment-btn {
  color: #fff;
  background-color: #ee5044;
  border: none;
  width: 70px;
  height: 50px;
}

</style>
