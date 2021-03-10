/*
同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出

创建一个可写流
    - fs.createWriteStream(path[,options])
        - 可以用来创建一个可写流
        - path --> 文件路径
        - options --> 配置的参数

向文件中写入内容
ws.write(内容)

*/
var fs = require('fs');

//流式文件写入
//创建一个可写流
var ws = fs.createWriteStream('hello.txt')

ws.once('close',function () {

});
//通过ws向文件中输出内容
ws.write('aaaaa')
ws.write('bbbbb')
ws.write('bbbbb')
ws.write('bbbbb')
ws.write('bbbbb')
ws.write('bbbbb')

ws.close()
