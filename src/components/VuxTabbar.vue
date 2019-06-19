<template>
  <div class="pages">
    <!-- <tabbar class="tabbar">
      <tabbar-item :link="{name:'Address',params:{name:'大福'}}">
        <img slot="icon" src="./../../static/tab/home_default.png">
        <img slot="icon-active" src="./../../static/tab/home_focus.png">
        <span class="word" slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="./../../static/tab/library_default.png">
        <img slot="icon-active" src="./../../static/tab/library_focus.png">
        <span class="word" slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="./../../static/tab/circle_default.png">
        <img slot="icon-active" src="./../../static/tab/circle_focus.png">
        <span class="word" slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="./../../static/tab/my_default.png">
        <img slot="icon-active" src="./../../static/tab/my_focus.png">
        <span class="word" slot="label">News</span>
      </tabbar-item>
    </tabbar>-->
    <tabbar class="tabbar">
      <tabbar-item
        v-for="(item,index) in tablist"
        :key="index"
        @on-item-click="tabClick(index)"
        :selected="index==0"
      >
        <img slot="icon" :src="item.src">
        <img slot="icon-active" :src="item.srcActive">
        <span class="word" slot="label">{{item.labal}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  props: ['tablist'],
  data() {
    return {

    };
  },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
      
  },
  methods: {
      tabClick(index){
          if(index==0){
              this.$router.push('/address')
          }
      }
  },
  mounted() {
      console.log(this.tablist,'2222222222222')
  }
};
</script>
<style  scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  padding-bottom: .666667rem;

}
/* .word{
    color: red
} */
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: red;
}
</style>