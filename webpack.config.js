/**
 * Created by lenovo on 2017/7/31.
 */
var htmlwp=require("html-webpack-plugin");
module.exports={
    entry:"./src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"bulid.js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/.vue$/,loader:"vue-loader"},
            {test:/\.js$/,loader:"babel-loader",exclude:/node_modules/},
            {test:/\.(png|jpg|jif|ttf|svg)$/,loader:"url-loader?limit=40000"}
        ]
    },
    babel:{
        presets:["es2015"],
        plugins:["transform-runtime"]
    },
    plugins:[
        new htmlwp({
            title:"首页",
            filename:"index.html",
            template:"template.html"
        })
    ]
};