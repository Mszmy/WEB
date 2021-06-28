const path = require('path')
module.exports = {
    // 入口
    entry:'./src/main.js',
    // 出口
    output:{
        path: path.resolve(__dirname,'dist'), // path要为绝对路径
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // css-loader 只负责将css文件进行加载
                // style-loader 负责将样式添加到DOM中
                // 使用多个loader，是从右向左
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:['url-loader'],
            },
        ]
    },
}
