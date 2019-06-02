<template>
    <div>
    <nav-header></nav-header>
  <nav-bread>
      <span slot="one">Goods/</span>
  </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <!-- <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='All'}" @click="priceChecked='All'">All</a></dd> -->
                <dd v-for="(price,index) in priceFilter" :key="index">
                  <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="setPriceFilter(index)">{{price.startPrice}}</a>
                </dd>
              </dl>
            </div>
            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodsList" :key="index">
                    <div class="pic">
                      <a href="#"><img :key="'static/'+item.productImage"  v-lazy="'static/'+item.productImage"  alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li> 
                </ul>

              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                <img src="./../../static/loading-svg/loading-spinning-bubbles.svg" alt="" srcset="" v-if="loading">
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLay" @click="closePop"></div>
    <nav-footer></nav-footer>
    </div>
</template>
<script>
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import NavHeader from './../components/NavHeader.vue'
    import NavFooter from './../components/NavFooter.vue'
    import NavBread from './../components/NavBread.vue'
    import axios from 'axios'
    export default{
        data(){
            return {
              goodsList:[],
              priceFilter:[{
                startPrice:'All'
              },{
                  startPrice:'0-100'
              },{
                  startPrice:'100-500'
              },{
                  startPrice:'500-1000'
              },{
                  startPrice:'1000-5000'
              }],
              priceChecked:'0',
              loading:false,
              filterBy:"",
              overLay:'',
              sortFlag:true,
              page:1,
              pageSzie:8,
              busy:false,

            }
        },
        components:{
            NavHeader,
            NavFooter,
            NavBread
        },
        mounted(){
          this.getGoodsList()
        },
        methods:{
          getGoodsList(flag){
            let params={
              page:this.page,
              pageSize:this.pageSzie,
              sort:this.sortFlag?1:-1,
              priceLevel:this.priceChecked
            }
            this.loading=true
            axios.get("/goods",{
              params
            }).then(res=>{
              this.loading=false
              if(flag){
                this.goodsList=this.goodsList.concat(res.data.result.list)
                if(res.data.result.count===0){
                  this.busy=true
                }
                else if(res.data.result.count<8){
                  this.busy=true
                }
                else{
                  this.busy=false
                }
              }else{
                this.goodsList=res.data.result.list
              }
             
            })
          },
          loadMore(){
            this.busy=true
            setTimeout(() => {
               this.page++
               this.getGoodsList(true)
            }, 500);
          },
          sortGoods(){
            this.sortFlag=!this.sortFlag
            this.page=1
            this.getGoodsList()
          },
          showFilterPop(){
            this.filterBy=true
            this.overLay=true
          },
          setPriceFilter(index){
            this.priceChecked=index
            this.closePop()
            this.getGoodsList()
          },
          closePop(){
            this.filterBy=false
            this.overLay=false
          }
        }
    }
</script>
