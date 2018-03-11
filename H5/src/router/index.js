import Vue from 'vue'
import Router from 'vue-router'
/* 首页模块 */
import Recommend from 'contanier/recommend/recommend' //
/* 产品模块 */
import Product from 'contanier/product/product'     //产品模块
import pDetails from 'contanier/pDetails/pDetails'  //产品详情
import pOrder from 'contanier/pOrder/pOrder'  //产品预约
import pOrderSuccess from 'contanier/pOrderSuccess/pOrderSuccess'  //产品提交成功

/* 工作室模块 */
import Rank from '@/components/rank/rank'
/* 我的模块 */
import Search from 'contanier/search/search'
import Orderlist from 'contanier/search/orderlist'
import Workroominfo from '@/components/workRoomInfo/workRoomInfo'
import Mycustom from '@/components/myCustom/myCustom'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 默认进入推荐页面
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        { path: '/rank/workroominfo',
          component: Workroominfo
        },
        { path: '/rank/mycustom',
          component: Mycustom
        }
      ]
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
      path: '/pOrder',
      component: pOrder
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
    {
      name: 'pDetails',
      path: '/pdetails',
      component: pDetails
    },
    {
      name: 'pOrderSuccess',
      path: '/pOrderSuccess',
      component: pOrderSuccess
    },
  ]
})
