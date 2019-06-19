<template>
  <div class="page">
    <vux-header></vux-header>
    <div class="top">
      <!-- <vux-picker class="top_left">
        <template v-slot:test>
          <img
            class="down_icon"
            src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_drop-down%402x.png"
            alt
          >
        </template>
      </vux-picker> -->
      <!-- <span class="header_left">深圳</span>
      <img
        class="down_icon"
        src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_drop-down%402x.png"
        alt
      >-->
      <vux-address class="address_pick"></vux-address>
      <div class="search">
        <img
          class="search_icon"
          src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_search%402x.png"
          alt
        >
        <span class="place_holder">搜索你感兴趣的内容</span>
      </div>
      <img
        src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/%E6%89%AB%E7%A0%81.png"
        class="code"
      >
    </div>
    <vux-swiper :list="list" @toOhters="toOhters"></vux-swiper>
    <div class="kim">
      <div v-for="(item,index) in kimList" :key="index">
        <div class="kim_chunk">
          <img class="kim_img" :src="item.src" alt>
          <span class="kim_labal">{{item.labal}}</span>
        </div>
      </div>
    </div>
    <div>
      
      <swiper
        auto
        :interval="2000"
        class="text-scroll"
        :show-dots="false"
        height="50px"
        direction="vertical"
      >
        <swiper-item class="swiper_item">
          <p class="swiper_item_p">义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
        </swiper-item>
        <swiper-item>
          <p class="swiper_item_p">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
        </swiper-item>
        <swiper-item>
          <p class="swiper_item_p">零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
        </swiper-item>
        <swiper-item>
          <p class="swiper_item_p">做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
        </swiper-item>
        <swiper-item>
          <p class="swiper_item_p">只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
        </swiper-item>
        <swiper-item>
          <p class="swiper_item_p">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
        </swiper-item>
      </swiper>
   </div>
   
   <!-- <vux-cell></vux-cell> -->
    <vux-tabbar :tablist="tablist"></vux-tabbar>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Picker } from "vux";
import { constants } from "fs";
import VuxPicker from "./../components/VuxPicker";
import VuxTabbar from "./../components/VuxTabbar";
import VuxSwiper from "./../components/VuxSwiper";
import VuxCell from './../components/VuxCell'
import VuxAddress from './../components/VuxAddress'
import VuxHeader from './../components/VuxHeader'
export default {
  data() {
    return {
      kimList: [
        {
          src:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/kongkim/course%402x.png",
          labal: "慕课"
        },
        {
          src:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/kongkim/course%402x.png",
          labal: "慕课"
        },
        {
          src:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/kongkim/course%402x.png",
          labal: "慕课"
        },
        {
          src:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/kongkim/course%402x.png",
          labal: "慕课"
        },
        {
          src:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/kongkim/course%402x.png",
          labal: "慕课"
        }
      ],
      tablist: [
        {
          labal: "首页",
          src: "./../../static/tab/home_default.png",
          srcActive: "./../../static/tab/home_focus.png"
        },
        {
          labal: "一库",
          src: "./../../static/tab/library_default.png",
          srcActive: "./../../static/tab/library_focus.png"
        },
        {
          labal: "艺圈",
          src: "./../../static/tab/circle_default.png",
          srcActive: "./../../static/tab/circle_focus.png"
        },
        {
          labal: "我的",
          src: "./../../static/tab/my_default.png",
          srcActive: "./../../static/tab/my_focus.png"
        }
      ],
      list: [
        {
          url: "javascript:",
          img:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png",
          title: "送你一次旅行",
          fallbackImg:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png"
        },
        {
          url: "javascript:",
          img:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png",
          title: "送你一次旅行",
          fallbackImg:
            "https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/index/team5.png"
        }
      ]
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Picker,
    VuxPicker,
    VuxTabbar,
    VuxSwiper,
    VuxCell,
    VuxAddress,
    VuxHeader
  },
  mounted() {},
  computed: {},
  methods: {
    toOhters() {
  
      this.$router.push({path:'/vuxHeader'});
    }
  }
};
</script>

<style >
.top_left {
  flex-shrink: 0;
}
.code {
  width: 0.56rem;
  height: 0.56rem;
  margin-left: 0.4rem;
  flex-shrink: 0;
  margin-right: 0.4rem;
}
.title1 {
  height: 0.56rem;
}
.page {
  background: #fff;
}
.top {
  padding-top: 0.32rem;
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

/* kim 5小金刚 */
.kim {
  display: flex;
  display: -webkit-flex;
  width: 9.2rem;
  margin: 0.4rem auto 0;
  align-items: center;
  justify-content: space-between;
}
.kim_img {
  width: 1.28rem;
  height: 1.28rem;
}
.kim_labal {
  font-size: 0.32rem;
  line-height: 0.453333rem;
}
.kim_chunk {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
}
/* swiper 垂直 */
.swiper_item{
  height:.533333rem;
}
.swiper_item_p{
  font-size: .373333rem;
  line-height: .533333rem;
  text-align: center
  
}
.text-scroll{
  height: .533333rem!important;
  margin-top: .293333rem;
  /* width: 6.32rem; */
}
/* address_pick */
.address_pick{
  flex-shrink: 0;
  margin-left: .4rem;
}
</style>
