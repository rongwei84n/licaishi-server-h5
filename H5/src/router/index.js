import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Recommend from 'contanier/recommend/recommend'
import Search from 'contanier/search/search'
import Product from 'contanier/product/product'
import Orderlist from 'contanier/search/orderlist'

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
      name: 'Orderlist',
      path: '/Orderlist',
      component: Orderlist
    },
  ]
})
