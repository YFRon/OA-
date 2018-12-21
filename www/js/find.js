$("#queryProduct").click(function() {
	$key = $("#select option:selected").text();
	$val = $("#validationServer02").val();
	if($key && $val) {
		$("#validationServer02").val("");
		$(".find1")[0].style.display = "none";
		$(".find2")[0].style.display = "block";
		
		$.ajax({
			type: "post",
			url: "http://localhost:3000/users/find",
			async: true,
			data: {
				title: $key,
				value: $val
			},
			success: function(data) {
				if(data.product.length>0){
					var html = data.product.map(function(item, idx) {
						return `<tr>
						<td>${idx+1}</td>
						<td>${item.年级}</td>
						<td>${item.学号}</td>
						<td>${item.姓名}</td>
						<td>${item.性别}</td>
						<td>${item.身份证号}</td>
						<td>${item.联系电话}</td>
						<td>${item.宿舍号}</td>
						<td>${item.床位号}</td>
						<td>${item.入住时间}</td>
					</tr>`
					}).join("");
					$("#productList").html(html);
				}else{
					$("#productList").children("tr").children("td").html("没有找到相关内容");
				}
			}
		});
	}

})

$("#requeryProduct").click(function() {
	$(".find2")[0].style.display = "none";
	$(".find1")[0].style.display = "block";
	var tr = `<tr>
				<td colspan="10" style="height: 200px;background: white;line-height: 200px;font-size: 30px;">加载中...</td>
			</tr>`
	$("#productList").html(tr);
})