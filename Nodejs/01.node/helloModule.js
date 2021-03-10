// module.exports.name = 'zmy';
// exports.age = 18;
// exports.sayName = function () {
//     console.log('我是zmy')
// };


/*module.exports可以批量进行*/
module.exports = {
    name:'zzz',
    age:'20',
    sayName:function () {
        console.log('wo shi zzz')
    },
}


/*---------报错--------------*/
// exports = {
//     name:'zzz',
//     age:'20',
//     sayName:function () {
//         console.log('wo shi zzz')
//     },
// }
