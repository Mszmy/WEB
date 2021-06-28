// 2 command.js的模块规范 导入
const {add, mul} = require('./js/mathUtils.js')

// 3 使用
console.log(add(20, 30))
console.log(mul(20, 30))


//-----------------------
// 2 export --- ES6的模块化规范方法的导入
import {name, age} from './js/info'

console.log(name)
console.log(age)

//-----------------------
// 3 依赖css文件
require('./css/normal.css')


//-----------------------
// 4 依赖less文件
require('./css/special.less')

document.writeln('<div>less test</div>')


//-----------------------
// 5 使用vue进行开发
import Vue from 'vue'  // 需要先引入vue

// import App from './vue/app'  // 引入分离后的template

import App from './vue/App.vue' // 引入分离后的 ---分成三部分书写：template、script、style

new Vue({
    el: '#test',
    template:'<App/>',
    components:{
        App
    },
})
