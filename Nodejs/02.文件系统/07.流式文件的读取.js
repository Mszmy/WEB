/*
流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中

创建可读流
    - fs.createReadStream(path);

读取数据
    - rs.on('data',function (data) {});  参数为data


*/

// var fs = require('fs');
// //创建一个可读流
// var rs = fs.createReadStream('hello.txt');
//
// //监听流的开启和关闭
// rs.once('open',function () {
//     console.log('可读流打开了。。。')
// });
//
// rs.on("close",function () {
//     console.log('可读流关闭了。。。')
// });
//
//
// //如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// rs.on('data',function (data) {
//     console.log(data.toString())
// });


/*-----------------------------*/
var fs = require('fs');
//创建一个可读流
var rs = fs.createReadStream('hello.txt');
//创建一个可写流
var ws = fs.createWriteStream('hello1.txt');  //将hello.txt文件中的内容写入到hello1.txt中
//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
