import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Recommend from '@/contanier/recommend/recommend'//首页
import Search from '@/components/search/search'
import Product from '@/contanier/product/product'//产品
import Orderlist from '@/components/search/orderlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认进入推荐页面
      path: '/',
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
    },
    {
      path: '/orderlist',
      component: Orderlist
    },
  ]
})
