$(function(){
	//1.动态创建link引用footer.css
	$("<link rel='stylesheet' href='../css/footer.css'>").appendTo("head")
	//2.ajax请求footer.html片段
	
	$.ajax({
		url:"http://localhost:3000/footer.html",
		type:"get",
		success:function(res){
			$("footer").replaceWith(res)
			//1.查找触发事件的元素
			
			//2.绑定事件
			//3.查找要修改的元素
			//4.修改元素
			
		}
	})
	
})