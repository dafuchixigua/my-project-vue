<template>
  <div class="pages">
   <!-- <group> -->
       <cell
      :title="'动画效果'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004" class="tittle"></cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
  <!-- </group> -->
  </div>
</template>

<script>
import { Cell} from 'vux'
export default {
  data(){
    return {
              showContent004: false,
    }
  },
  components:{
       Cell,
       
  },
  computed:{},
  methods:{},
  mounted(){}
}
</script>
<style  scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 .266667rem;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;

}
.animate {
  max-height: 133.32rem;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
  font-size: .4rem;
  line-height: .56rem
}
.group_one{
  
}
.weui-cell{
    padding: 0
}
.tittle{
    height: .56rem;
      font-size: .4rem;
    line-height: .56rem
}
</style>