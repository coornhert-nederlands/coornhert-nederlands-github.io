$(document).ready(function() {
	
	function toggleCheckmob() {
		var chkbox = $("#checkmob");
		chkbox.prop("checked", !chkbox.prop("checked"));
		updateDisplaysMob();
	}
	
	$(".checkbox-mobile").click(function() {
		toggleCheckmob();
	});
	
	function updateDisplaysMob() {
		var chkbox = $("#checkmob");
		var frames = $(".infoframe");
		if(chkbox.prop("checked")) {
			frames.removeClass("none");
			frames.removeClass("full");
			frames.addClass("half");
		} else {
			frames.removeClass("half");
			$("#embed").addClass("none");
			$("#info").addClass("full");
		}
	}
	
	
	//---------------------iFrame Manipulation------------------------------
	
	function srcDisplays(infourl, embedurl) {
		$("#info").attr("src", infourl);
		$("#embed").attr("src", embedurl);
	}
	
	$(".nav-button").click(function() {
		var button = $(this).children().eq(0);
		$("#checkmob").slideToggle();
		
		if(button.attr("data-embedtype") === "valid") {
			srcDisplays(button.attr("data-info"), button.attr("data-embed"));
			//alert("displays");
		} else {
			srcDisplays(button.attr("data-info"), "html/mixed-active-content-warning.html");
		}
	});
});