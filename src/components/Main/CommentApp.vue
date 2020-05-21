<template>
  <div class="comments">
    <CommentInput @send:comment="getComment"></CommentInput>
    <CommentList :comments="comments" @send:index="getIndex"></CommentList>
  </div>
</template>

<script>
import { getComments } from '@/service/getData'

import CommentInput from './Comment/CommentInput'
import CommentList from './Comment/CommentList'

export default {
  components: {
    CommentInput, CommentList
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    getIndex (index) {
      this.comments.splice(index, 1)
    },
    getComment (comment) {
      this.comments.unshift(comment)
    }
  },
  created () {
    const id = this.$route.params.id

    console.log(id)

    // 调用获取评论的函数
    getComments(id).then(res => {
      if (res.data.res_code === 200) {
        console.log(res)
        this.comments = res.data.res
      }
    })
  }
}
</script>

<style>
.comments {
  margin-top: 30px;
}
</style>
