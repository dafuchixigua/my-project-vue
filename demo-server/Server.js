let http=require('http')
let url=require('url')
let util =require('util')
let fs=require('fs')
let path=require('path')
let server=http.createServer((req,res)=>{
    // res.statusCode=200
    // res.setHeader("Content-Type","text/plain;chatset=utf-8")
   var pathname= url.parse(req.url).pathname
    fs.readFile(pathname.substring(1),(err,data)=>{
        if(err){
            res.writeHead(404,{
                "Content-Type":'text/html'
            })
        }else{
            res.writeHead(200,{
                "Content-Type":"text/html"
            })
            res.write(data.toString())
        }
        res.end()
    })
 
}).listen(3000,'127.0.0.1',()=>{
    console.log('进入Server！！！aaa',path)
})
