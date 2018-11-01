$(function() {
	$.ajax({
		url: "http://localhost:3000/index/two",
		type: "get",
		dataType: "json", //ajax可自动将json转为obj
		success: function(res) {
			var html = "";
			for(var item of res) {
				var {
					title,
					showtime,
					showtitle
				} = item;
				html += `<li>
			<a href="#" title=${title}><span class="sp1">${showtime}</span>${showtitle}</a>
				</li>`
			}
//			console.log(html)
			$(".newslist").children(":first-child").children().after(html);
			$(".newslist").children(":first-child").children(":first-child").remove();
			
		}
	})
	
})