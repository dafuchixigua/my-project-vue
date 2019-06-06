var express = require('express');
var router = express.Router();
let User=require('./../models/user')
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
module.exports = router;
