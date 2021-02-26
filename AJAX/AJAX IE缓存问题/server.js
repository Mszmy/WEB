// 1.引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
//request是请求报文的封装
//response是响应报文的封装

//专门针对IE缓存问题的 get 规则
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应
    response.send('HELLO IE');

});


//4. 监听端口启动服务
app.listen(8000,()=>{
    console.log('start')
});
