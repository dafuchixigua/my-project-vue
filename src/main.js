// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from './utils/currency'
import vuex from 'vuex'
import testApi from './api/api'

import  './utils/lib-flexible-min'
import VueWechatTitle from 'vue-wechat-title'
import { AlertPlugin, ToastPlugin } from 'vux'



Vue.use(VueWechatTitle) //vue设置标题组件
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:'/static/loading-svg/loading-bars.svg'
})
Vue.prototype.$testApi=testApi
Vue.use(infiniteScroll)
Vue.use(vuex)

Vue.filter("currency",currency)
const store=new vuex.Store({
  state:{
    nickName:"",
    cartCount:0
  },
  mutations:{
    updateUserInfo(state,nickName){
      return state.nickName=nickName
    },
    updateCount(state,cartCount){
      return state.cartCount+=cartCount
    },
    initCount(state,cartCount){
      return state.cartCount=cartCount
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
