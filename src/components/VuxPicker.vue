<template>
  <div class="pages">
    <!-- <group title="single column" > -->
        <div class="top_all">
      <popup-picker class="picker_all"
        :data="year6"
        :title="title1"
        :columns="3"
        show-name
        @on-show="onShow"
        @on-hide="onHide"
        @on-change="onChange"
        @on-shadow-change="onShadowChange"
        style="padding:0;"
      >

      </popup-picker>
        <!-- <popup-picker value-text-align="left" :title="title1" :data="year6" @on-change="onChange" :columns="3" v-model="value4" show-name></popup-picker> -->
            <slot name="test"></slot>
       <!-- <img
        class="down_icon"
        src="https://xiaochengxu-1257423844.cos.ap-chengdu.myqcloud.com/images/cutimage/navigation/navigation_drop-down%402x.png"
        alt
        >  -->
      <!-- <div class="header"></div> -->
      </div>
    <!-- </group> -->
  </div>
</template>

<script>
import {
  Datetime,
  PopupPicker,
  Group,
  Cell,
  Picker,
  XButton,
  Divider,
  XSwitch
} from "vux";
export default {
  data() {
    return {
      name1:["是你吗"],
      value4:['深圳'],
      list1: [["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"]],
    //   value1: ["深圳"],
      title1: "深圳",
        year6: [
            {
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }
            //  ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'],
        // [{name:'你',value:"33333"}, {name:'我',value:"4444"}, {name:'他',value:"5555"}],
        //  [{name:'天',code:"33333"}, {name:'地',code:"4444"}, {name:'人',code:"5555"}],
        // [{name:'山',code:"33333"}, {name:'河',code:"4444"}, {name:'海',code:"5555"}],
  
     
      ],
        year7: [
            {
        name: '中国',
        value: '中国',
        parent: 0
      }, {
        name: '美国',
        value: '美国',
        parent: 0
      }, {
        name: '广东',
        value: '广东',
        parent: '中国'
      }, {
        name: '广西',
        value: '广西',
        parent: '中国'
      }, {
        name: '美国001',
        value: '美国001',
        parent: '美国'
      }, {
        name: '美国002',
        value: '美国002',
        parent: '美国'
      }, {
        name: '广州',
        value: 'gz',
        parent: '广东'
      }, {
        name: '深圳',
        value: 'sz',
        parent: '广东'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: '广西'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: '广西'
      }, {
        name: '美国001_001',
        value: '美国001_001',
        parent: '美国001'
      }, {
        name: '美国001_002',
        value: '美国001_002',
        parent: '美国001'
      }, {
        name: '美国002_001',
        value: '美国002_001',
        parent: '美国002'
      }, {
        name: '美国002_002',
        value: '美国002_001',
        parent: '美国002'
      }
            //  ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'],
        // [{name:'你',value:"33333"}, {name:'我',value:"4444"}, {name:'他',value:"5555"}],
        //  [{name:'天',code:"33333"}, {name:'地',code:"4444"}, {name:'人',code:"5555"}],
        // [{name:'山',code:"33333"}, {name:'河',code:"4444"}, {name:'海',code:"5555"}],
  
     
      ],

    };
  },
  components: {
    PopupPicker,
    Group,
    Cell
  },
  computed: {},
  methods: {
    onChange(name) {
      console.log("val change", name);
      // console.log(this.value4,'????')
      // this.title1=name[2]
    },
    changeList10() {
      this.list1 = [
        ["小米1", "iPhone1", "华为1", "情怀1", "三星1", "其他1", "不告诉你1"]
      ];
    },
    changeList11() {
      this.list1[0].push("我是push条目");
    },
    changeList20() {},
    changeList21() {
      this.list3.push({
        name: "美国002_007",
        value: "0007",
        parent: "usa002"
      });
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
      if(!type){
        this.title1=this.title2
      }
    },
    onShadowChange(ids,names){
        console.log(ids,'55555')
        console.log(names,'44444')
        let aa=this.title1
        this.title2=this.title1
        this.title1=names[2]
        
    }
  },
  mounted() {}
};
</script>
<style  scoped>
.weui-cell{
  padding: 0;
}
.picker-buttons {
  margin: 0 15px;
}
.picker_all{
    max-width: 1.6rem;
    height: .56rem;
    font-size:.4rem;
    line-height: .56rem; 
    text-align: initial;
    margin-left: .4rem;
      overflow: hidden; /* 多出部分隐藏  */
  display: -webkit-box; /* 定义为自适应布局  */
  text-overflow: ellipsis; /* 超出文字用省略号代替 */
  -webkit-box-orient: vertical; /* 竖直方向的超出和隐藏 */
  -webkit-line-clamp:1; /* 设定行数为 */
}
.weui-label{
  height: .56rem
}
.header{
 width: 7.613333rem;
 height: .746667rem;
     margin-left: .16rem;
     border-radius:.373333rem;
     background: #eceeef; 
}
.top_all{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    /* margin-top: .746667rem; */

}
.weui-cell[data-v-2a15bf1b]{
  padding: 0;
}
.weui-cell_access{
  padding: 0
}
div{
  padding: 0;
}
</style>