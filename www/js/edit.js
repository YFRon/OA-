
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
		return `<tr data-id=${item._id}>
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
					<td><button class="edit">修改</button> <button class="remove">删除</button></td>
				</tr>`
	}).join("");
	$("#productList").html(html);
}
getList().then(renderTable);

$("tbody").click(function(e){
	if(e.target.className == "edit"){
		var tr = e.target.parentElement.parentElement;
		var arr = tr.children;
		var newTd = `<td>${tr.children[0].innerHTML}</td>`;
		for(var i=1;i<arr.length-1;i++){
			newTd += `<td><input type="text" value="${arr[i].innerHTML}" /></td>`;
		}
		tr.innerHTML = newTd + "<td><button class='save'>保存</button></td>";
	}
	
	if(e.target.className == "save"){
		var tr = e.target.parentElement.parentElement;
		var arr = tr.children;
		var id = tr.dataset.id
		console.log(id)
		
		var newTd = `<td>${tr.children[0].innerHTML}</td>`;
		for(var i=1;i<arr.length-1;i++){
			newTd += `<td>${arr[i].children[0].value}</td>`;
		}
		tr.innerHTML = newTd + '<td><button class="edit">修改</button> <button class="remove">删除</button></td>';
		
		$.ajax({
			type:"post",
			url:"http://localhost:3000/users/edit",
			data:{
					"年级":arr[1].innerHTML,
					"学号":arr[2].innerHTML,
					"姓名":arr[3].innerHTML,
					"性别":arr[4].innerHTML,
					"身份证号":arr[5].innerHTML,
					"联系电话":arr[6].innerHTML,
					"宿舍号":arr[7].innerHTML,
					"床位号":arr[8].innerHTML,
					"入住时间":arr[9].innerHTML,
					"id":id
			},
			async:true,
			success:function(data){
				console.log(data);
			}
		});
		
	}
	
	if(e.target.className == "remove"){
		var tr = e.target.parentElement.parentElement;
		console.log(tr)
		var id = tr.dataset.id;
		console.log(id)
		tr.remove();
		$.ajax({
			type:"post",
			url:"http://localhost:3000/users/remove",
			data:{
				"id":id
			},
			async:true,
			success:function(data){
				console.log(data)
			}
		});
	}
	
})