// 1.引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
//request是请求报文的封装
//response是响应报文的封装

//get
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应
    response.send('HELLO AJAX');

});

//post
app.post('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO AJAX POST');

});

//JSON响应
app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

    //响应一个数据
    const data = {
        name:'zmy',
        age:18
    };
    // 设置响应体
    // response.send('HELLO AJAX JSON');
    response.send(data);
});

//专门针对IE缓存问题的 get 规则
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应
    response.send('HELLO IE');

});

//专门针对延时响应的 get 规则
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        // 设置响应
        response.send('延时响应');
    },3000);
});

//jQuery 服务
app.all('/jQuery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

    //响应一个数据
    const data = {
        name:'zmy',
        age:18
    };
    // 设置响应
    response.send('HELLO jQuery AJAX');
    // response.send(data);
});

//axios 服务
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')

    //响应一个数据
    const data = {
        name:'zmy',
        age:18
    };
    // 设置响应
    response.send('HELLO Axios AJAX');
    // response.send(data);
});

//fetch 服务
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')

    //响应一个数据
    const data = {
        name:'zmy',
        age:18
    };
    // 设置响应
    response.send('HELLO fetch AJAX');
    // response.send(data);
});



//4. 监听端口启动服务
app.listen(8000,()=>{
    console.log('start')
});
