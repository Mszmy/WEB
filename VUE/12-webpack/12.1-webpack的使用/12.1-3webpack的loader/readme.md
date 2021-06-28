dist 文件夹 为 webpack 打包后生成的js --> 用于 index.html 去引用

src 文件夹 放置 主要的 js 和 css 等代码
    - css-normal.css --> 用于讲解css-loader  其实主要处理 css文件
    - css-special.less --> 用于讲解less-loader  其实主要处理less文件

main.js --> 进行各种依赖

webpack.config.js --> 配置文件
    -1 entry:'./src/main.js',
        output:{
              path: path.resolve(__dirname,'dist'), // path要为绝对路径
              filename:'bundle.js',
          },
    --> 配置 webpack的入口 出口
     -2 css文件
     module:{
                rules:[
                    {
                        test:/\.css\$/,
                        // css-loader 只负责将css文件进行加载
                        // style-loader 负责将样式添加到DOM中
                        // 使用多个loader，是从右向左
                        use:['style-loader','css-loader']
                    },
                }
     -3 less文件
     module:{
                rules:[
                    {
                        test:/\.less\$/,
                        use:['style-loader','css-loader','less-loader']
                    },
                }        

    


