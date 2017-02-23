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
	
	//============================================READ==============================================
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
	
	
});