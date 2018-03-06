import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'FastClick'
import VueLazyload from 'vue-lazyload'
import store from './store'
import { Cell } from "mint-ui";

import 'common/stylus/index.styl'
import 'common/css/reset.css'

import ajax from "api/ajax"

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
Vue.component(Cell.name, Cell)

FastClick.attach(document.body)

Vue.use(VueLazyload, {
  // loading: require('common/image/wangzai.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.prototype.ajaxs = ajax
