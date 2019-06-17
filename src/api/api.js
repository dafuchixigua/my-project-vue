    import axios from 'axios'

    function allapi(data){
        
    return  axios({
        url:data.url,
        params:data.params,
        method:data.type,
        headers: {"Content-Type": "application/json"},
        data:data.params,
    })
            
}
const testApi={
    test:params=>allapi({params:params,url:'/goods/addCart',type:'post'}),
    test2:params=>allapi({params:params,url:'/goods/list',type:'get'})
}

export default {
    testApi
}