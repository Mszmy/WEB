//require引入外部模块
/*
* 使用require() 引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
* * */
// var md = require('./02.module.js')
// console.log('x:',md.x,'y:',md.y)



/*-----------------------------------------------*/
//小练习 ------ math.js
var pra = require('./math.js')
console.log(pra.add(1,3))
console.log(pra.mul(1,3))

