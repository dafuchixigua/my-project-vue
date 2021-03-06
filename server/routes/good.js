let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let Goods = require('./../models/goods')

//连接MongoDB数据库
mongoose.connect("mongodb://127.0.0.1:27017/imoocmall",{useNewUrlParser: true})

mongoose.connection.on('connected',()=>{
    console.log("MongoDB connected connected")
})
mongoose.connection.on('error',()=>{
    console.log("MongoDB connected error")
})
mongoose.connection.on('disconnected',()=>{
    console.log("MongoDB connected disconnected")
})
//查询商品列表
router.get('/list',(req,res,next)=>{
    // res.send('hellow,world')
    let page=parseInt(req.param("page")) 
    let pageSize=parseInt(req.param("pageSize"))
    let sort=req.param("sort")
    let skip=(page-1)*pageSize
    let params={}
    let priceLevel=req.param("priceLevel")
    let priceGt=''
    let priceLte=''
    if(priceLevel!='0'){
        switch(priceLevel){
            case '1':priceGt=0;priceLte=100;break;
            case '2':priceGt=100;priceLte=500;break;
            case '3':priceGt=500;priceLte=1000;break;
            case '4':priceGt=1000;priceLte=5000;break;
        }
        params={
            salePrice:{
                $gt:priceGt,
                $lte:priceLte
            }
        }
    }
 
    let goodModel=Goods.find(params).skip(skip).limit(pageSize)
    goodModel.sort({"salePrice":sort})
    goodModel.exec((err,doc)=>{
        if(err){
            res.json({
                status:"1",
                msg:err.message
            })
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc 
                }
            })
        }
    })
})
//加入购物车接口
router.post('/addCart',(req,res,next)=>{
    let userId='100000077'
    let productId=req.body.productId
    let User=require('../models/user')
    User.findOne({userId},(err,userDoc)=>{
        if(err){
            res.json({
                status:"1",
                msg:err.message
            })
        }else{
            // console.log('userDoc:'+userDoc)
            if(userDoc){
                let goodsItem=''
                userDoc.cartList.forEach(item => {
                    if(item.productId==productId){
                        goodsItem=item
                        item.productNum++

                    }
                });
                if(goodsItem){
                            userDoc.save((err2,doc2)=>{
                                    if(err2){
                                        res.json({
                                            status:"1",
                                            msg:err2.message
                                        })
                                    }else{
                                        res.json({
                                            status:"0",
                                            msg:'',
                                            result:"suc"
                                        })
                                    }
                                })
                }else{
                    Goods.findOne({productId},(err1,doc)=>{
                        if(err1){
                            res.json({
                                status:"1",
                                msg:err1.message
                            })
                        }else{
                            if(doc){
                                let obj=doc.toObject()
                                obj.productNum=1
                                obj.checked=1 
                                // console.log(obj,'商品信息')         
                                userDoc.cartList.push(obj)
                                userDoc.save((err2,doc2)=>{
                                    if(err2){
                                        res.json({
                                            status:"1",
                                            msg:err2.message
                                        })
                                    }else{
                                        res.json({
                                            status:"0",
                                            msg:'',
                                            result:"suc"
                                        })
                                    }
                                })
                            }
                        }
                    })
                }
             
            }
        }
    })
})
module.exports=router