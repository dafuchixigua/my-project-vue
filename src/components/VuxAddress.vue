<template>
  <div class="pages">
      <div @click="doShowAddress" class="top_left">
        <span class="address_text">{{top_title}}</span> 
      <img
        class="down_icon"
        src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_drop-down%402x.png"
        alt
      >
      </div>
      <x-address style="display:none"  @on-hide="logHide"  :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange"   :show.sync="showAddress"></x-address>
    

  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data} from 'vux'
export default {
  data(){
    return {
     title: '默认为空',
      value_0_1: [],
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳市', '南山区'],
      showAddress: false,
      top_title:'东城区',
      top_tittle_faker:'',
    }
  },
  components:{
 
    XAddress,
  
  },
  computed:{},
  methods:{
       doShowAddress () {
      this.showAddress = !this.showAddress
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
      this.top_tittle_faker=names[2]
    },

    logHide (str) {
      console.log('on-hide', str)
      if(str){
          this.top_title=this.top_tittle_faker
          if(!this.top_title){
              this.top_title='东城区'
          }
      }
    },
  },
  mounted(){
      let str=true
      this.logHide(str)
  }
}
</script>
<style  scoped>
.address_text{
  font-size: .4rem;
  line-height: .56rem
}
.top_left{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    
}
</style>