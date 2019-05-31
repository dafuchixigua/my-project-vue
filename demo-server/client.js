let http=require('http')
let https=require('https')
let util=require('util')
https.get('https://www.imooc.com/index/getstarlist',(res)=>{

    let data=''
    res.on("data",chunk=>{
        data+=chunk
    })
    res.on('end',()=>{
   
        let result=JSON.parse(data)
    
        console.log("result:"+util.inspect(result))
    })
})