<template>
  <div class="page">
    <router-link :to="{name: 'channel', params: {
      id, 
      page: page - 1
    }}" href="#" v-if="page > 1">上一页</router-link>
    <router-link active-class="cur" :to="{name: 'channel', params: {
      id, 
      page: index + start
    }}" href="#" v-for="(p, index) in (end - start + 1)" :key="index">{{index + start}}</router-link>
    <router-link :to="{name: 'channel', params: {
      id, 
      page: page + 1
    }}" href="#" v-if="page < total">下一页</router-link>
  </div>
</template>

<script>
/* 
  一个分页要显示多少个页码
  一共能分多少页
  开始页码
  结束页码


  v-for如何遍历分页

  // 如果总页码不够 7 个 处理
  end total
  start 1

  // 如果当前页小于4 处理
  start 1 
  end 7 或者 total

  // 如果当前页 + 3 大于总页码 处理
  end total
  start total - 6 或者 1

  计算start
    Math.max(1, page - interval)

    如果当前页  
    if (this.page + this.interval > this.total) {
      return this.total - this.interval * 2 < 1 ? 1 : this.total - this.interval * 2
    }

  计算end
    Math.min(page + interval, total)

    如果页码 小于等于 interval 总显示的页码不够 7 个
    if (page < interval + 1) {
      // 如果只写2* inteval + 1 如果当前页只有3页，会出现页码最后显示7页
      return 2 * interval + 1 > total ? total : 2 * interval + 1

    }

*/
export default {
  props: {
    count: Number
  },
  data () {
    return {
      interval: 3,
      id: 1,
      page: 1,
    }
  },
  computed: {
    total () {
      return this.count ? Math.ceil(this.count / 10) : 1
    },
    start () {
      if (this.page + this.interval > this.total) {
        return this.total - this.interval * 2 < 1 ? 1 : this.total - this.interval * 2
      }

      return Math.max(1, this.page - this.interval)

    },
    end () {
      if (this.page < this.interval + 1) {
        return this.interval * 2 + 1 > this.total ? this.total : this.interval * 2 + 1
      }

      return Math.min(this.total, this.page + this.interval)
    }
  },
  created () {
    const {id, page = 1} = this.$route.params
    this.id = id
    this.page = +page
  }
}
</script>

<style>
  .page {
    text-align: center;
    padding: 30px;
  }

  .page a {
    padding: 3px 10px;
  }

  .cur {
    color: #ee5044;
  }
</style>
