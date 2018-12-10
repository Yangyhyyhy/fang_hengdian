//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session=require('express-session');
const path=require('path');
/*引入路由模块*/
const index=require("./routes/index");
const productlist=require("./routes/productlist");
//const details=require("./routes/details");
const users=require("./routes/users");


var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static(path.join(__dirname, '/')+'public'));
app.use(session({
	secret:'128位随机字符串',
	resave:false,
	saveUninitialized:true,
}))
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/productlist",productlist);
app.use("/users",users);
//接口地址http://localhost:3000/index/getIndexProducts
//app.use("/details",details);
//接口地址http://localhost:3000/details/?lid=5

