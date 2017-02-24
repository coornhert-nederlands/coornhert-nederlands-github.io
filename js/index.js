$(document).ready(function() {
	//==============================================Tabs============================================
	$("nav").children().find(".tab-main").children().find("ul").slideUp(0);
	$("nav").children().find(".tab-main").click(function() {
		var button = this;
		if($(button).hasClass("active")) {
			$(button).removeClass("active");
		} else {
			$("nav").children().find(".tab-main").removeClass("active");
			$(button).addClass("active");
			$("nav").children().find(".tab-main").children().find("ul").slideUp();
		}
		$(button).children().find("ul").slideToggle();
	});
	
	//============================================iFrame manipulation==============================================
	var iframe = $("iframe");
	var content = $(".content");
	var buttons = $(".redirect");
	
	$(buttons).click(function() {
		$(content).empty();
		$(content).append("<iframe src=\""+ $(this).attr("rel") +"\" width=\"100%\" height=\"500px\" id=\"iframe\"></iframe>")
	});
});