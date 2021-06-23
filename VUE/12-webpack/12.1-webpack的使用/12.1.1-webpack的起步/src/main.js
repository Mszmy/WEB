// 2 command.js的模块规范 导入
const {add,mul} = require('./mathUtils.js')

// 3 使用
console.log(add(20,30))
console.log(mul(20,30))



//-----------------------
// 2 export --- ES6的模块化规范方法的导入
import {name,age} from './info'
console.log(name)
console.log(age)
