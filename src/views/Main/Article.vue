<template>
  <div class="clearfix">
    <!-- 文章详情 -->
    <ArticleContent v-if="article.id" :article="article"></ArticleContent>
    <NotFound v-else></NotFound>

    <!-- 其他文章 -->
    <div class="pull-right articles">
      <!-- banner -->
      <ArticlesBanner :articles="articles"></ArticlesBanner>
      <!-- 列表 -->
    </div>
    <!-- 悦读频道其他节目-->
    <div class="pull-right articles">
      <ChannelListTop10 
      :articles="inform"
      :type="'悦读频道其他节目'"
       val='toggle'
    ></ChannelListTop10>
    </div>
  </div>
</template>

<script>
import ArticleContent from '@/components/Main/Article/ArticleContent.vue'
import NotFound from '@/components/404.vue'

import ArticlesBanner from '@/components/Main/Article/ArticlesBanner'
import  ChannelListTop10 from  '@/components/Main/Channel/ChannelListTop10'
import { getArticle, getArticles, getArticlesRand5 } from "@/service/getData";

export default {
  components: {
    ArticleContent,
    NotFound,
    ArticlesBanner,
    ChannelListTop10
  },
  data () {
    return {
      article: {},
      articles: [],
      inform: [],
      toggle: true
    }
  },
  created () {
    /* 
      axios.get().then(res => {

        return axios.get()

      }).then(res => {

      })
    
    
    */


    // 获取文章id
    const id = this.$route.params.id
    // 获取文章的数据
    getArticle(id).then(res => {
      this.article = res.data.res
      this.article.content = this.article.content.replace(/\s/g, '<br>')

      // 发起下次请求
      return getArticlesRand5(this.article.type_id)

    }).then(res => {
       this.inform= res.data.res
    })

    getArticles().then(res => {
      console.log(res.data)
      this.articles = res.data.res
    })
  }
}
</script>

<style lang="scss" scoped>
  .articles {
    width: 360px;
  }

</style>
