/*********************功能一*****dom做****************************/

// // 查找触发事件的元素
    var txtUname = document.getElementsByName("uname")[0];
    var txtUpwd = document.getElementsByName("upwd")[0];
    var txtCpwd = document.getElementsByName("cpwd")[0];
    var txtEmail = document.getElementsByName("email")[0];
     
    //绑定事件
    /*功能1：当表单元素获取焦点时给他穿件衣服，给人的印象我正在输入文本框*/
    txtUname.onfocus = txtUpwd.onfocus = txtCpwd.onfocus = txtEmail.onfocus=function(){
        //查找要修改的元素
        var txt = this;
        var span = txt.nextElementSibling.nextElementSibling;
        txt.className = "txt_focus";
        span.className = "";//清空他的class,让他显示
        // span.removeClass("txt_focus");
    }//只有name属性的元素才可以fom.uname找,这是一个福利
    /*功能2：失去焦点进行验证用户输入的格式是否正确*/
    txtUname.onblur = function(){               //失去焦点时，自动调用vali()函数
        vali(this,/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/);
    }
    txtUpwd.onblur = function(){//失去焦点时，自动调用vali()函数
        vali(this,/^[0-9]{6,12}$/);
    }
    txtCpwd.onblur = function(){//失去焦点时，自动调用cpwd()函数
        cpwd();
    }
    txtEmail.onblur = function(){
        vali(this,/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/);
    }

    function vali(txt,reg){
        //查找要修改的元素
        var span = txt.nextElementSibling.nextElementSibling;
        txt.className = "";//00000
        // txt.removeAttribute("txt_focus")
        if(reg.test(txt.value)){
            span.className = "vali_success";
            return true;
        }else{
            span.className = "vali_fail";
            return false;
        }
    }
    //重复密码单独验证
    function cpwd(){
        var reg = /^[0-9]{6,12}$/;
        //查找要修改的元素
        var span = txtCpwd.nextElementSibling.nextElementSibling;
        txtCpwd.className = "";
        if(reg.test(txtCpwd.value) && txtCpwd.value == txtUpwd.value){
            span.className = "vali_success";
            return true;
        }else{
            span.className = "vali_fail";
            span.innerHTML = "两次密码不一致，请重新输入!";
            return false;
        }
}

/*功能3:一旦出错把光标定位到出错的元素上去:一个一个验证，第一个没有通过,第一个定住不要走了,第二个没通过,第二天定住不要走了,只有当全部通过了,才能提交——非常人性化，可以帮你找错*/
 console.log(10111);
$("#btn").click(function(){
    if(!vali(txtUname,/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/)){//如果用户名没通过,让他获取焦点
         console.log('101');
        // txtUname.focus();
        
    }else if(!vali(txtUpwd,/^[0-9]{6,12}$/)){//否则如果密码框验证没通过,让密码框获取焦点
        txtUpwd.focus();
         console.log('102');
    }else if(!vali(txtCpwd,/^[0-9]{6,12}$/)){//否则如果重复密码框验证没通过,让密码框获取焦点
        txtCpwd.focus();
         console.log('103');
    }else if(!vali(txtEmail,/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/)){//否则如果邮箱验证没通过,让邮箱框获取焦点
        txtEmail.focus();
         console.log('104');
    }else{
        // document.forms[0].submit();
       console.log("111");   
        /*********************功能二****jquery做*****************************/
        // 根据后端返回的result的长度判断该用户是否已注册
        var uname = $("#uname").val();//获取uname
        var upwd = $("#upwd").val();//获取upwd
        var email = $("#email").val();

        console.log(uname,upwd,email);
        $.ajax({
            url:"http://localhost:3000/users/isregister",
            type:"post",
            data:{ uname, upwd,email},
            dataType:"json",
            success:function(data){
                console.log(data);
                if(data.code == 0){
                    alert("此用户名已被注册,请更换新的用户名从新注册!");
                }else{
                    alert("注册成功,返回登陆页！");
                    //功能：从哪个页面跳回来的，登陆成功之后还能跳回哪个页面去
                    location.href="http://localhost:3000/login.html";
                }                  
            }
        });
    }
});    