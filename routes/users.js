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

//
router.post('/isregister',(req,res)=>{
  //浏览器发送的数据
  //console.log(req.body);
  var obj=req.body;
  //验证表单提交的内容是否为空
  //验证用户名为空
  var $uname=obj.uname;
  if($uname==''){
    res.send({code:401,msg:'uname required'});
	return;//终止函数中的代码继续执行
  }
  //验证密码为空
  var $upwd=obj.upwd;
  if($upwd==''){
    res.send({code:402,msg:'upwd required'});
    return;
  }
  //验证邮箱和电话
  var $email=obj.email;
  if($email==''){
    res.send({code:404,msg:'email required'});
	return;
  }


  //以上验证都通过了，执行插入数据库操作
  var sql='INSERT INTO hd_user VALUES(NULL,?,?,?)';
  pool.query(sql,[$uname,$upwd,$email],(err,result)=>{
    if(err) throw err;
    //如何判断插入成功————affectedRows
	if(result.affectedRows>0){
	  res.send({code:200,msg:'reg success'});
	}else{
	  res.send({code:301,msg:'reg error'})
	}
  });
  
});

//测试：
//http://localhost:3000/users/islogin ok:0
//.../users/signin?uname=dingding&upwd=123456 ok:1
//.../users/islogin ok:1
//.../users/signout
//.../users/islogin ok:0

module.exports=router;