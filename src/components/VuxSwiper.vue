<template>
  <div class="pages">
    <div class="swiperOne_all">
      <swiper
        height="4.506667rem"
        class="swiperOne"
        :show-desc-mask="false"
        dots-position="center"
        loop
      >
        <swiper-item class="slide_item" v-for="(item,index) in list" :key="index">
          <img class="slide-img" :src="item.img" alt @click="toOhters(index)">
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem,Picker} from 'vux'
export default {
    props:['list'],
  data() {
    return {};
  },
  components: {
      Swiper,
      SwiperItem,
      Picker
  },
  computed: {},
  methods: {
      toOhters(index){
          // let name="你好"
          // this.$emit('toOhters',index,name)
            this.$router.push({path:'/vuxHeader'});
      }
  },
  mounted() {}
};
</script>
<style  scoped>
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
  /* margin-right: .133333rem; */
  width: 9.2rem;
  margin-left: 0.4rem;
  
}
</style>