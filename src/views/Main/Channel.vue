<template>
  <div class="clearfix">
    <!-- 普通列表 -->
    <ChannelList 
      :articles="articles.articles"
      :count="articles.count"
    ></ChannelList>
    <!-- top10列表 -->
    <ChannelListTop10 
      :articles="articlesTop10.articles"
      :type="articlesTop10.type+'频道 TOP10'"
    ></ChannelListTop10>
  </div>
</template>

<script>
import ChannelList from '@/components/Main/Channel/ChannelList'
import ChannelListTop10 from '@/components/Main/Channel/ChannelListTop10'

// 引入数据请求函数
import {getChannelList, getChannelListTop10} from '@/service/getData'

export default {
  components: {
    ChannelList,
    ChannelListTop10
  },
  data () {
    return {
      articles: {},
      articlesTop10: {}
    }
  },
  created () {
    // 获取typeid 
    const {id, page = 1} = this.$route.params

    getChannelList(id, page).then(res => {
      this.articles = res.data.res
    })

    getChannelListTop10(id).then(res => {
      this.articlesTop10 = res.data.res
    })
  }
}
</script>

<style>

</style>
