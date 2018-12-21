function getList() {
	return new Promise(function(resolve,reject) {
		$.ajax({
			type: "get",
			url: "http://localhost:3000/users/showlist",
			async: true,
			success: function(data) {
				resolve(data);
			}
		});
	})

}

function renderTable(data) {
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
}
getList().then(renderTable);
