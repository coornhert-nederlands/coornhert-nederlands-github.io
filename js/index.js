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
	var buttons = $(".redirect");
	
	$(buttons).click(function() {
		$(iframe).attr("src", $(this).attr("rel"));
	});
});