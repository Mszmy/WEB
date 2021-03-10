/*
Buffer(缓冲区/缓冲器)
    - buffer的结构和数组很像，操作的方法也和数组类似
    - 数组中不能存储二进制文件，而buffer就是专门用来存储二进制的数据。
    - 使用buffer不需要引入模块，直接使用即可
    - 在buffer中存储的都是二进制数据，但是在显示时以16进制的形式显示
        buffer中每一个元素的范围是从 00 - ff  0-255
        buffer一个元素，占用内存的一个字节。[三个字节代表一个汉字]
    - Buffer 大小一旦确定，则不能修改。 Buffer实际上是对底层内存的直接操作。
    - Buffer的创建方式：
        - Buffer.from(str)  --> 将一个字符串转换成Buffer
            - buf.toString()  --> 将缓冲区中的数据转换成字符串
        - Buffer.alloc(size) --> 创建一个指定大小的Buffer
        - Buffer.allocUnsafe(size) --> 创建一个指定大小的Buffer，但可能含有敏感数据
*/

var str = 'Hello 弓长张';
//--1--将一个字符串保存到buffer中-----
var buf = Buffer.from(str);
console.log(buf)//<Buffer 48 65 6c 6c 6f 20 e5 bc 93 e9 95 bf e5 bc a0>
console.log(buf.length) // 15 --- 占用内存的大小
console.log(str.length) // 9 --- 字符串的长度


//---2-创建一个指定大小的buffer------
var buf2 = Buffer.alloc(10);
console.log(buf2.length)//10
//通过索引为buffer赋值，操作buf中的元素
buf2[0] = 88;
console.log(buf2)//<Buffer 58 00 00 00 00 00 00 00 00 00>
console.log(buf2[0])

//---3--Buffer.allocUnsafe(size);---创建一恶搞指定大小的buffer，但buffer中可能含有敏感数据------
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

