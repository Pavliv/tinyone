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


//smoothscroll
$(document).ready(function () {
	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 1000, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.header a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#menu-center ul li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}


