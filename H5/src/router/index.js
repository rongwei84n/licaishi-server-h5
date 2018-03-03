import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Recommend from '@/components/recommend/recommend'
import Search from '@/components/search/search'
import Product from '@/components/product/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 默认进入推荐页面
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/product',
      component: Product

    },
    {
      path: '/search',
      component: Search
    }
  ]
})
