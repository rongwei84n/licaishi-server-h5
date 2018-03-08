import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'FastClick'
import VueLazyload from 'vue-lazyload'
import store from './store'
<<<<<<< HEAD
import { Cell, Spinner, Popup, Header, Button } from "mint-ui"
=======
import { Cell, Spinner, Popup, Header, Button, Navbar, TabItem, TabContainer, TabContainerItem} from "mint-ui"
>>>>>>> deb1b8f743019afb11b7c084c6dba67419b66ecc

import 'common/stylus/index.styl'
import 'common/css/reset.css'
import 'common/css/cover_mint.css' // mint-ui覆盖文件

import ajax from "api/ajax"

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
Vue.component(Cell.name, Cell)
Vue.component(Spinner.name, Spinner)
Vue.component(Popup.name, Popup)
<<<<<<< HEAD
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
=======
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
>>>>>>> deb1b8f743019afb11b7c084c6dba67419b66ecc

FastClick.attach(document.body)

Vue.use(VueLazyload, {
  // loading: require('common/image/wangzai.jpg')
})
// Vue.use(ajax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.prototype.$ajax = ajax