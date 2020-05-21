<template>
<div class="pull-left ">
  

  <ul class="channel-list">
    <li v-for="article in articles" :key="article.id" class="article clearfix">
      <div class="img pull-left">
        <img :src="article.img_url" height="210">  
      </div>
      <div class="article-info pull-left">
        <h3><router-link :to="'/article/' + article.id">{{article.title}}</router-link></h3>
        <p class="info">
          <span>{{article.author}}</span>  
          <span>{{article.podcast}}</span>  
          <span>{{article.duration}}</span>  
          <span>{{article.play_time}}次</span>  
        </p>
        <p class="content">{{article.content.slice(0, 60)}}……</p> 
      </div>
    </li>
  </ul>
  <!-- 分页 -->
  <page :count="count"></page>
</div>
  
</template>

<script>
// 引入分页组件
import Page from '@/components/Main/Channel/Page'

export default {
  // 注册组件
  components: {
    Page
  },
  props: {
    articles: Array,
    count: [String, Number]
  }
}
</script>

<style scoped>
.article {
  background: #fff;
  margin-bottom: 30px;
  color: #707070;
}

.article .img {
  width: 210px;
  overflow: hidden;
}

.article .img img {
  display: block;
}

.article .article-info {
  width: 410px;
  padding: 30px;
  padding-bottom: 0;
}

.article h3 {
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 10px;
}

.article .info {
  font-size: 12px;
  color: #999;
  margin-bottom: 25px;
}

.article .info span {
  margin-right: 15px;
}

.article .content {
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 1px;
}
</style>
