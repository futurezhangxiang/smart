<template>
  <div class="comments-list">
    <div class="heading">最新评论({{comments.length}})</div>
    <ul class="list">
      <li class="item clearfix" v-for="(comment, index) in comments" :key="comment.id">
        <span class="pull-right" v-if="comment.isDel" @click="delComment(comment.id, index)">x</span>
        <img class="pull-left" width="40" :src="comment.avatar" alt="">
        <div class="pull-left">
          <div class="comment-heading clearfix">
            <h5 class="pull-left name"><router-link :to="'/user/' + comment.user_id">{{comment.nikiname}}</router-link></h5>
            <span class="pull-left date">{{comment.reply_time}}</span>
          </div>
          <p class="comment-body">
            {{comment.content}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {delComment} from '@/service/getData'

export default {
  props: {
    comments: Array
  },
  methods: {
    delComment (id, index) {
      console.log(id)
      delComment(id).then(res => {
        if (res.data.res_code === 200) {
          // 在删除成功后，告知父组件我们删除的是哪个评论
          this.$emit('send:index', index)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .comments-list {
    margin-top: 30px;
  }
  .heading {
    width: 112px;
    background: #fff;
    color: #ee5044;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
  }


  .list {
    background: #fff;
    padding: 30px 30px 0;
  }

  .list .item {
    padding-bottom: 20px;
  }


  img {
    margin-right: 15px;
  }
  .comment-heading {
    margin-bottom: 10px;
  }
  .comment-body {
    margin: 0;
    color: rgb(112,112,112);
    font-size: 12px;
  }

  .name {
    font-size: 14px; 
    margin-right: 8px; 
    color: #707070;
  }

  .date {
    color: #999;
    font-size: 12px;
    vertical-align: bottom;
  }
</style>
