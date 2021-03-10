/*
文件系统（File System）
    - 文件系统简单来说就是通过Node来操作系统中的文件。
    - 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载

打开文件
    - fs.openSync(path, flags[,mode])
        - path --> 要打开文件的路径
        - flags --> 打开文件要做的操作的类型【r:只读；w：可写】
        - mode --> 设置文件的操作权限，一般不传
        - 该方法会返回一个文件的描述符作为结果，可以通过该描述符来对文件进行各种操作。

向文件中写入内容
    - fs.writeSync(fd,string[,position[,encoding]])
        - fd --> 文件的描述符，需要传递要写入的文件的描述符
        - string --> 要写入的内容
        - position --> 写入的起始为止
        - encoding --> 写入的编码

保存并关闭文件
    -fs.closeSync(fd)
        - fd --> 要关闭的文件的描述符

*/

var fs = require('fs');
//打开文件
var fd = fs.openSync('hello.txt','w')
//写入文件
fs.writeSync(fd,'3333');
//关闭文件
fs.closeSync(fd);
