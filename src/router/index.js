import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../views/GoodsList.vue'
import Cart from './../views/Cart.vue'
import Address from './../views/Address.vue'
import OrderConfirm from './../views/OrderConfirm.vue'
import OrderSuccess from './../views/OrderSuccess.vue'
import artIndex from './../views/artIndex'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'GoodsList',
    //   component: GoodsList,
    
    // },
    {
      path: '/',
      name: 'artIndex',
      component: artIndex,
      meta:{
        title:"首页"
      }
    
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address,
    //   children:[{
    //  path: '/orderConfirm/:addressId/:id',
    //   name: 'OrderConfirm',
    //   component: OrderConfirm
    //   }]
    },
    {
      path: '/orderConfirm/:addressId/:id',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },

  ]
})
