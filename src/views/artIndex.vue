<template>
  <div class="page">
    <div class="top">
      <span class="header_left">深圳</span>
      <img
        class="down_icon"
        src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_drop-down%402x.png"
        alt
      >
      <div class="search">
        <img
          class="search_icon"
          src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_search%402x.png"
          alt
        >
        <span class="place_holder">搜索你感兴趣的内容</span>
      </div>
    </div>
    <div class="swiperOne_all">
      <swiper height="4.506667rem" class="swiperOne" :show-desc-mask='false' dots-position="center" loop>
        <swiper-item class="slide_item" v-for="(item,index) in list" :key="index" >
          <img  class="slide-img" :src="item.img" alt="" @click="toOhters(index)">
          </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem,Picker} from 'vux'
import { constants } from 'fs';
export default {
  
  data() {
    return {

      list:[{
  url: 'javascript:',
  img: 'https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png',
  title: '送你一朵fua',
}, {
  url: 'javascript:',
  img: 'https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png',
  title: '送你一次旅行',
  fallbackImg: 'https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png'
}, {
  url: 'javascript:',
  img: 'https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png',
  title: '送你一次旅行',
  fallbackImg: 'https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png'
}
]
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Picker
  },
  mounted() {},
  computed: {},
  methods: {
    toOhters(index){
      console.log(index)
      this.$router.push("cart")
    }
  }
};
</script>

<style >
.page{
background: #fff
}
.top {
  padding-top: .32rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  background: #fff;
  margin-bottom: 0.226667rem;
}
.header_left {
  font-size: 0.4rem;
  line-height: 0.56rem;
  margin-left: 0.373333rem;
}
.down_icon {
  width: 0.346667rem;
  height: 0.2rem;
  margin-left: 0.066667rem;
}
.search {
  width: 7.613333rem;
  height: 0.746667rem;
  background: #eceeef;
  font-size: 0.346667rem;
  line-height: 0.48rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.373333rem;
  margin-left: 0.32rem;
}
.search_icon {
  width: 0.386667rem;
  height: 0.426667rem;
  margin: 0 0.173333rem 0 0;
}
/* swiper start */
.swiperOne_all{

}
.swiperOne{

}
.slide-img{
  height: 4.506667rem;
  /* width:10rem */
  width: 9.2rem;

}
.slide_item{
  height: 4.506667rem;
  /* width: 10rem; */
  margin-right: .133333rem;
  width: 9.2rem;
  margin-left: .4rem;
}
</style>
