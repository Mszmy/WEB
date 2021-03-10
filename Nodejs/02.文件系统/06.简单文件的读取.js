/*
简单文件读取
    - fs.readFile(path[,options],callback)
    - fs.readFile(path[,options])
        - path --> 要读取的文件的路径
        - options --> 读取的选项
        - callback --> 回调函数，通过回调函数将读取到内容返回  参数(err,data)
            - err 错误对象
            - data 读取到的数组，会返回一个Buffer
*/

var fs = require('fs');

fs.readFile('hello.txt',function (err,data) {
    if(!err){
        console.log(data.toString())
    }
});
