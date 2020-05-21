<template>
  <div class="pull-right channel-list-top10">
    <div class="box">
    <h3>{{type}}</h3>  
    <router-link to="/channel/1"
     v-if="val"
     class='show-all'
    >
    查看全部<i>></i>
    </router-link>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'article', params: {id: article.id}}">{{article.title}}</router-link>
        <div class="info">
          <span>文：{{article.author}}</span>
          <span>主播：{{article.podcast}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    articles: Array,
    val: Boolean

  }
}
</script>

<style lang="scss" scoped>
.channel-list-top10 {
  width: 360px;
  background: #fff;
  padding: 30px;
  h3 {
    margin: 0;
    font-size: 14px;
    color: #707070;
    border-left: 3px solid #ee5044;
    padding-left: 8px;
    line-height: 16px;
  }
  ul {
    margin-top: 30px;
    font-size: 12px;

    li {
      list-style: decimal;
      color: #707070;
      padding-bottom: 10px;
      margin-left: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    .info {
      margin-top: 8px;
      color: #999; 
      font-size: 12px;
      span {
        margin-right: 20px;
      }
    }
  }
}
.box{
  display: flex;
}
.show-all{
margin-left: 110px
}
</style>

