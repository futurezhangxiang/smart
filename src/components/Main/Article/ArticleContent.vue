<template>
  <div class="pull-left article">
    <div class="article-info">
      <h2>{{article.title}}</h2>
      <div class="info">
        <span>{{article.author}}</span>
        <span>{{article.podcast}}</span>
        <span>{{article.duration}}</span>
        <span class="pull-right">播放 <i>{{article.play_time}}</i> 次</span>
      </div>
      <img width="100%" :src="article.img_url" alt="">
    </div>
    <div class="article-content clearfix">
      <div :class="['content', {close: close}]" v-html="article.content"></div>
      <a href="javascript:;" class="pull-right" @click="changeContent">{{close ? '展开全文' : '收起'}}</a>
    </div>
    <div class="label">
      <strong>标签: </strong>
      <a href="javascript" v-for="label in formatLabels" :key="label">{{label}}</a>
    </div>
    <div class="page clearfix">
      <!-- <a href="javascript" class="pull-left">上一篇</a> -->
      <!-- <a href="javascript" class="pull-right">下一篇</a> -->
      <router-link :to="{name: 'article', params: {id: article.id - 1}}" class="pull-left">上一篇</router-link>
      <router-link :to="{name: 'article', params: {id: article.id + 1}}" class="pull-right">下一篇</router-link>

    </div>

    <CommentApp></CommentApp>
  </div>
</template>

<script>
import CommentApp from '../CommentApp.vue'

export default {
  components: {
    CommentApp
  },
  props: {
    article: Object
  },
  data () {
    return {
      close: true
    }
  },
  computed: {
    formatLabels () {
      return this.article.labels ? this.article.labels.split(',') : []
    }
  },
  methods: {
    changeContent () {
      this.close = !this.close
    }
  }
} 
</script>

<style lang="scss" scoped>
  .article {
    width: 620px;
  }

  .article-info {
    padding: 30px;
    background: #fff;
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
      margin-bottom: 8px;
      font-weight: normal;
      color: #707070;
    }

    .info {
      margin-bottom: 25px;
      color: #999;
      font-size: 12px;
      line-height: 20px;
      span {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
        i {
          font-size: 16px;
          font-style: normal;
        }
      }
    }


  }
  .article-content {
    padding: 20px 30px;
    font-size: 12px;
    color: #707070;
    background: #fff;
    margin-bottom: 30px;

    .close {
      height: 280px; 
    }
    .content {
      overflow: hidden;

      line-height: 22px;
    }

    a {
    }
    
    
  }

  .label {
    background: #fff;
    padding: 10px 30px;
    font-size: 12px;
    color: #707070;
    margin-bottom: 30px;
    a {
      margin-right: 10px;
    }
  }

  .page {
    padding: 0 30px;
  }
</style>
