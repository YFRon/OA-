$("#signIn").click(function(){
	console.log(123)
	
	$.ajax({
		type:"post",
		url:"http://localhost:3000/users/signIn",
		data:{
			"用户名":$("#username").val(),
			"密码":$("#password").val()
		},
		success:function(data){
			if(data.product.length>0){
				console.log(data)
				document.cookie = "admin=" + data.product[0]._id +"; path=/";
				location.href = "http://localhost:3000/html/home.html"
			}else{
				$(".erro").css("display","block")
			}
		},
		async:true
	});
})

$("#username").focus(function(){
	$(".erro").css("display","none")
})

$("#password").focus(function(){
	$(".erro").css("display","none")
})
