import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// 消除 移动端点击300ms延迟 fastclick
import fasclick from 'fastclick'
// img lazyload
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'
// Vue.config.productionTip = false

fasclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
