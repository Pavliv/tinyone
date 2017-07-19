// menu for mobile
$(".menu-item").click(function() {
	$("header li").hide(1);
	$("header ul").css("position", "relative");
	$("header ul").css("text-align", "center");
	$("header ul").css("width", "100%");
	$("header ul").css("margin", "0 auto");
	$("header li").css("display", "block");
	$("header li").css("margin", "0");
	$("header li").css("padding", "5px 0 10px 0");
	$("header ul").css("z-index", "1");
});