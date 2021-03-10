/*
异步文件写入
打开文件
    - fs.openSync(path, flags[,mode], callback)
        - 异步调用的方法，结果都是通过回调函数返回的
        - 回调函数两个参数：
            err: 错误对象，如果没有错误就是null
            fd : 文件的描述符

向文件中写入内容
    - fs.writeSync(fd,string[,position[,encoding]], callback)
        - 回调函数要三个参数

保存并关闭文件
    -fs.closeSync(fd,callback)

*/

var fs = require('fs');
//打开文件
fs.open('hello.txt','w',function (err,fd) {
    if(!err){
        //写入文件
        fs.write(fd,'这是异步写的内容',function (err) {
            if(!err){
                console.log('写入成功～～～～')
            }
            // 关闭文件
            fs.close(fd,function (err) {
                if(!err){
                    console.log('文件已关闭～～～～')
                }
            });
        });
    }else{
        console.log(err)
    }
});


