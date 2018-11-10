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
	$.ajax({
		url: "http://localhost:3000/index/one",
		type: "get",
		dataType: "json", //ajax可自动将json转为obj
		success: function(res) {
			
			//console.log(res)
				
			$(".inner").children(":first-child").attr('src',res[0].img).next()
			.attr('src',res[1].img).next()
			.attr('src',res[2].img).next()
			.attr('src',res[3].img).next()
			.attr('src',res[4].img)
//			console.log(html)
						
		}
	})	
	
})

	
