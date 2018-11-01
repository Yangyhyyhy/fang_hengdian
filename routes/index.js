const express=require("express")
const router=express.Router()
const pool=require("../pool")


router.get("/two",(req,res)=>{
  var sql="SELECT * FROM hd_index_newslist";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})

router.get("/one",(req,res)=>{
  var sql="SELECT * FROM hd_index_yingshi";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})
//接口地址: http://localhost:3000/index/getIndexProducts
module.exports=router;