$(".nav-link").click(function(){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = "admin=" + "" + "; path=/" + "; expires=" + d.toUTCString();
	location.href = "http://localhost:3000";
})
