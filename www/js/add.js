$("#addProduct").click(function(){
	$.ajax({
		type:"post",
		url:"http://localhost:3000/users/add",
		async:true,
		data:{
			"年级":$("#validationServer01").val(),
			"学号":$("#validationServer02").val(),
			"姓名":$("#validationServerUsername").val(),
			"性别":$("#validationServer03").val(),
			"身份证号":$("#validationServer04").val(),
			"联系电话":$("#validationServer05").val(),
			"宿舍号":$("#validationServer06").val(),
			"床位号":$("#validationServer07").val(),
			"入住时间":$("#validationServer08").val()
		},
		success:function(data){
			alert(data)
			for(let i=0;i<$(".form-control").length;i++){
				$(".form-control")[i].value = "";
			}
		}
	});
})