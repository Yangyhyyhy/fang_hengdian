const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.post("/signin",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  console.log(uname,upwd);
  pool.query(
    "select * from hd_user where uname=? and upwd=?",
    [uname,upwd],
    (err,result)=>{
      if(err) console.log(err);
      if(result.length>0){
        res.writeHead(200);
        var user=result[0]
        req.session.uid=user.uid
        res.write(JSON.stringify({
          ok:1
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"用户名或密码错误！"
        }))
      }
      res.end();
    }
  )
})
router.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from hd_user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uname:user.uname
      }))
      res.end()
    })
  }
  
})
router.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})
//测试：
//http://localhost:3000/users/islogin ok:0
//.../users/signin?uname=dingding&upwd=123456 ok:1
//.../users/islogin ok:1
//.../users/signout
//.../users/islogin ok:0

module.exports=router;