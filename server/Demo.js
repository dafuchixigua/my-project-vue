let user= require('./User')
console.log(`userName:${user.userName}`)
console.log(`say:${user.sayHellow()}`)
let http=require('http')
let url =require('url')
let util=require('util')
let server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader("content-type","text/plain;chartset=utf-8")

    // console.log(url.parse(req.url),'11')
    // console.log(req.url,'22')
    // console.log(util.inspect(url.parse(req.url)),'333')
    res.end(util.inspect(url.parse(req.url)))
}).listen(3000,'127.0.0.1',()=>{
    console.log('服务器以打开hahahaha')
})