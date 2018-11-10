$(function() {
	$.ajax({
		url: "http://localhost:3000/productlist/two",
		type: "get",
		dataType: "json", //ajax可自动将json转为obj
		success: function(res) {
			var html2 = "";
			for(var item of res) {
				var {
					img,
					title,
					content,
					price,
					img2,
					href
				} = item;
				html2 += `<div class="mp_cp left">
							<span class="mp_cp_bg">
                                <img src=${img} width="240" height="170" />
						    </span>
							<span class='mp_title2'>${title}</span>
							<div class='mp_cp_cont2 fontYH'>
								<span style="height:90px;">
                                    ${content}
							    </span>
								<div>
									<span class="left" style="color: #e33745; font-size: 14px;">${price}&nbsp;</span>
									<span class="right">
									    <a href=${href}><img src=${img2}></a>
								    </span>
								</div>
							</div>
						</div>`
			}
			//console.log(html2)
			$("#mp_cp").children(":first-child").after(html2);
			$("#mp_cp").children(":first-child").remove();

		}
	})
	
	$.ajax({
		url: "http://localhost:3000/productlist/one",
		type: "get",
		dataType: "json", //ajax可自动将json转为obj
		success: function(res) {			
			//console.log(res)				
			$(".LB1").children(":first-child")
			.attr('src',res[0].img)
			$(".LB2").children(":first-child")
			.attr('src',res[1].img)
			$(".LB3").children(":first-child")
			.attr('src',res[2].img)
			$(".LB4").children(":first-child")
			.attr('src',res[3].img)
			
//console.log(html)
						
		}
	})

})