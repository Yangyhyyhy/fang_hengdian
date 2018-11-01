$(function() {

	//1.动态创建link引用header.css
	$("<link rel='stylesheet' href='../css/header.css'>").appendTo("head")
	//2.ajax请求header.html片段

	$.ajax({
		url: "http://localhost:3000/header.html",
		type: "get",
		success: function(res) {
			$("header").replaceWith(res)
			//1.查找触发事件的元素

			//2.绑定事件
			//3.查找要修改的元素
			//4.修改元素	
			$("#btnLogin").click(function() {
				location.href="login.html?back="+location.href;
			})

			$.ajax({
				url: "http://localhost:3000/users/islogin",
				type: "get",
				dataType: "json",
				success: function(res) {
					if(res.ok == 0) {
						$("#signout").show().next().hide();
					} else {
						$("#uname").html(res.uname);
						$("#signout").hide().next().show();
					}
				}
			})

			$("#btnSignout").click(function() {
				$.ajax({
					url: "http://localhost:3000/users/signout",
					type: "get",
					success: function() {
						location.reload();
					}
				})
			})

		}

	})

})