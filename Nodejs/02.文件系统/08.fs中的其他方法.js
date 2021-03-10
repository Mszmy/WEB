var fs = require('fs');

/*
-----------1-----------------
    fs.existsSync(path)
        - 检查一个文件是否存在
*/
var isExists = fs.existsSync('hello.txt');
// console.log(isExists)

/*
-----------2-----------------
    fs.stat(path,callback)
    fs.statSync(path)
        - 获取文件的状态
        - 会返回一个对象，这个对象中保存了当前对象状态的相关信息
*/
fs.stat('hello.txt',function (err,stats) {
    /*
        - size 文件的大小
        - isFile() 是否是一个文件
        - isDirectory() 是否是一个文件夹（目录）
    * */
    // console.log(stats.isFile())
    // console.log(stats.isDirectory())
});

/*
-----------3-----------------
    fs.unlink(path,callback)
    fs.unlinlSync(path)
        - 删除文件
*/

// fs.unlinkSync('hello1.txt')

/*
-----------4-----------------
    fs.readdir(path[,options],callback)
    fs.readdirsSync(path[,options])
        - 读取一个目录的目录结构
            - files是一个字符串数组，每一个元素就是一个文件夹或文件的名字。
*/
fs.readdir('.',function (err,files) {
    if(!err){
        // console.log(files);
    }
});

/*
-----------5-----------------
    fs.truncate(path,len,callback)
    fs.truncateSync(path,len)
        - 截断文件
*/
fs.truncateSync('hello.txt',2)

/*
-----------6-----------------
    fs.mkdir(path[,mode],callback)
    fs.mkdirSync(path[,mode])
        - 创建一个目录
*/
// fs.mkdirSync('hello')

/*
-----------7-----------------
    fs.rmdir(path[,mode],callback)
    fs.rmdirSync(path[,mode])
        - 删除一个目录
*/
// fs.rmdirSync('hello')

/*
-----------8-----------------
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        - 对文件重命名
*/
// fs.renameSync('hello1.txt','hello2.txt')

