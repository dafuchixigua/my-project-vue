var express = require('express');
var router = express.Router();
let User=require('./../models/user')
require('./../util/util')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//登录接口
router.post('/login',(req,res,next)=>{

  let param={
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  User.findOne(param,(err,doc)=>{

    if(err){
      res.json({
        status:"1",
        err:err.message
      })
    }else{
      if(doc){
        res.cookie("userId",doc.userId,{
          path:"/",
          maxAge:1000*60*60
        })   
        res.cookie("userName",doc.userName,{
          path:"/",
          maxAge:1000*60*60
        })
        res.json({
          status:"0",
          msg:"",
          result:{
              userName:doc.userName
          }
        })
      }

    }
  })
})
//登出接口
router.post("/logout",(req,res,next)=>{
  res.cookie("userId","",{
    path:"/",
    maxAge:-1
  })
  res.json({
    status:"0",
    msg:"",
    result:""
  })
})
//检查是否登录
router.get("/checkLogin",(req,res,next)=>{
    if(req.cookies.userId){
      res.json({
        status:"0",
        msg:"",
        result:req.cookies.userName
      })
    }
})
//查询用户购物车数据
router.get("/cartList",(req,res,next)=>{
  let userId=req.cookies.userId
  User.findOne({userId},(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message,
        result:"0"
      })
    }else{
      res.json({
        status:"0",
        msg:"",
        result:doc.cartList
      })
    }
  })
})
//购物车删除
router.post("/cart/del",(req,res,next)=>{
  let userId=req.cookies.userId
  let productId=req.body.productId
  User.update({userId},{$pull:{'cartList':{'productId':productId}}},(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message,
        result:""
      })
    }else{
      res.json({
        status:"0",
        msg:"",
        result:'suc'
      })
    }
  })
})
//购物车修改
router.post("/cartEdit",(req,res,next)=>{
  let userId=req.cookies.userId,
      productId=req.body.productId,
      productNum=req.body.productNum
      checked=req.body.checked
      User.update({userId,"cartList.productId":productId},{
        "cartList.$.productNum":productNum,
        "cartList.$.checked":checked
      },(err,doc)=>{
        if(err){
          res.json({
            status:"1",
            msg:err.message,
            result:""
          })
        }else{
          res.json({
            status:"0",
            msg:"",
            result:'suc'
          })
        }
      })
})
//商品全选
router.post("/editCheckAll",(req,res,next)=>{
  let userId=req.cookies.userId,
      checkAll=req.body.checkAll?'1':'2'
   User.findOne({userId},(err,doc1)=>{
    
      if(err){
        res.json({
          status:"1",
          msg:err.message,
          result:""
        })
      }else{
        for(let v of doc1.cartList){
          v.checked=checkAll
        }
        doc1.save((err1,doc2)=>{
          if(err1){
            res.json({
              status:"1",
              msg:err1.message,
              result:""
            })
          }else{
            res.json({
              status:"0",
              msg:"",
              result:'suc'
            })
          }
        })
      } 
     
   })   

})
//查询用户地址接口
router.get("/addressList",(req,res,next)=>{
  let userId=req.cookies.userId
  User.findOne({userId},(err,doc)=>{
   
      if(err){
        res.json({
          status:"1",
          msg:err.message,
          result:""
        })
      }else{
        res.json({
          status:"0",
          msg:"",
          result:doc.addressList
        })
      }
    
  })
})
//设置默认地址
router.post("/setDefault",(req,res,next)=>{
  let userId=req.cookies.userId,
      addressId=req.body.addressId
  User.findOne({userId},(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message,
        result:""
      })
    }else{
      let addressList=doc.addressList
      for(let v of addressList){
        if(v.addressId==addressId){
          v.isDefault=true
        }else{
          v.isDefault=false
        }
      }
      doc.save((err1,doc1)=>{
        if(err1){
          res.json({
            status:"1",
            msg:err1.message,
            result:""
          })
        }else{
          res.json({
            status:"0",
            msg:"",
            result:''
          })
        }
      })
    }
  })
})
//删除地址接口
router.post("/addressDel",(req,res,next)=>{
  let userId=req.cookies.userId
      addressId=req.body.addressId
      // console.log(req,'0000000001212')
  User.update({userId},{$pull:{'addressList':{'addressId':addressId}}},(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message,
        result:""
      })
    }else{
      res.json({
        status:"0",
        msg:"",
        result:'suc'
      })
    }
  })
})
router.post("/payMent",(req,res,next)=>{
  let userId=req.cookies.userId,
      orderTotal=req.body.orderTotal,
      addressId=req.body.addressId
      User.findOne({userId},(err,doc)=>{
        if(err){
          res.json({
            status:"1",
            msg:err.message,
            result:""
          })
        }else{
          //获取用户当前地址信息
          let address=''
          doc.addressList.forEach(item => {
            if(item.addressId==addressId){
              address=item
            }
          });
          
          //获取用户购物车购买商品
        let goodsList = doc.cartList.filter(item=>{
          return item.checked=='1'
        })
        let platForm="622"
        let r1=Math.floor(Math.random()*10)
        let r2=Math.floor(Math.random()*10)
        let sysDate=new Date().Format('yyyyMMddhhmmss')
        let createDate=new Date().Format('yyyy-MM--dd hh:mm:ss')
        let orderId=platForm+r1+sysDate+r2
        let order={
          orderId:orderId,
          orderTotal:orderTotal,
          addressInfo:address,
          goodsList:goodsList,
          addressStatus:"1",
          createDate:createDate
        }
        doc.orderList.push(order)
        doc.save((err1,doc1)=>{
          if(err1){
            res.json({
              status:"1",
              msg:err1.message,
              result:""
            })
          }else{
            res.json({
              status:"0",
              msg:"",
              result:{
                  orderId:order.orderId,
                  orderTotal:order.orderTotal
              }
            })
          }
        })
      
        }
      })
})
//根据订单id查询订单信息  
router.get("/orderDetails",(req,res,next)=>{
  let userId=req.cookies.userId,
      orderId=req.query.orderId
 
      User.findOne({userId},(err,doc)=>{
        if(err){
          res.json({
            status:"1",
            msg:err.message,
            result:""
          })
        }else{
          let orderList=doc.orderList
          if(orderList.length>0){
            let orderTotal=0
            for(let v of orderList){
              if(v.orderId==orderId){
                orderTotal=v.orderTotal
              }
            } res.json({
              status:"0",
              msg:'',
              result:{
                orderId:orderId,
                orderTotal:orderTotal
              }
            })
          }else[
            res.json({
              status:"12001",
              msg:'该用户无订单',
              result:""
            })
          ]
        }
      })
})
router.get("/getCartCount",(req,res,next)=>{
    let userId=req.cookies.userId
    User.findOne({userId},(err,doc)=>{
      if(err){
        res.json({
          status:"1",
          msg:err.message,
          result:""
        })
      }else{
        let cartList=doc.cartList
        let  cartCount=0
        cartList.forEach(item=>{
          cartCount+=parseInt(item.productNum)
        })
        res.json({
          status:"0",
          msg:'',
          result:cartCount
        })
      }
    })
})
module.exports = router;
