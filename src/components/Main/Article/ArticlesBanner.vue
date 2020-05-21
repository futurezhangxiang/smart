<template>
  <div class="articles-banner">
    <div class="article-heading clearfix">
      <h3 class="pull-left">其他相关节目</h3>
      <div class="ctrl pull-right">
        <i @click="prev" :class="{disabled: index === 0}">&lt;</i>
        <i @click="next" :class="{disabled: index === articles.length / 4 - 1}">&gt;</i>
      </div>
      
    </div>
    <div class="articles-body" ref="box" >
      <ul class="banner" :style="{transform: 'translate(' + (-330 * index) + 'px, 0)'}">
        <li class="item" v-for="article in articles" :key="article.id">
          <router-link :to="{name:'article',params:{id: article.id}}">
          <img width="135" height="90" :src="article.img_url" alt="">
          <span class="ellipsis">{{article.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  data () {
    return {
      index: 0,
      width: 0
    }
  },
  methods: {
    next () {
      if (this.index < this.articles.length / 4 - 1) {
        this.index++
      }
    },
    prev () {
      if (this.index > 0) {
        this.index--
      }
    }
  },
  created () {
    // 如果我们给一个元素添加ref属性 那么在这个组件中就可以获取到this.$refs.xxx 为这个DOM的对象
    this.$nextTick(() => { // nextTick 当DOM加载完成后才执行对应的函数
      // console.log(this.$refs.box.offsetWidth)
      this.width = this.$refs.box.offsetWidth + 30
    })
  }
}
</script>

<style lang="scss" scoped>
.articles-banner {
  background: #fff;
  padding: 30px;
  h3 {
    font-size: 14px;
    color: #707070;
    border-left: 3px solid #ee5044;
    padding-left: 8px;
  }
}

.item {
  width: 135px;
  margin-right: 30px;
  padding-top: 30px;
  span {
    font-size: 12px;
    color: #707070;
    padding-top: 10px;
  }
}

.banner {
  display: flex;
  flex-wrap: wrap;
  width: 1650px;
  transition: transform .5s linear;
}

.articles-body {
  overflow: hidden;

}

.disabled {
  color: #ddd;
}
</style>
