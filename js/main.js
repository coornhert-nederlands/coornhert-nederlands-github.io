var clickbox = document.getElementsByClassName("checkbox-mobile")
for(i = 0; i < clickbox.length; i++) {
	clickbox[i].addEventListener("click", function() {
		var checkboxes = document.getElementById("checkmob");
		checkboxes.checked = !checkboxes.checked;
		updateDisplays();
	});
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

function updateDisplays() {
	var info = document.getElementById("info");
	var embed = document.getElementById("embed");
	var chkbox = document.getElementById("checkmob");
	if(chkbox.checked) {
		removeClass(info, "full");
		removeClass(embed, "none");
		addClass(info, "half");
		addClass(embed, "half");
	} else {
		removeClass(embed, "half");
		removeClass(info, "half");
		addClass(info, "full");
		addClass(embed, "none");
	}
}

function srcDisplays(infourl, embedurl) {
	var info = document.getElementById("info");
	var embed = document.getElementById("embed");
	
	info.setAttribute("src", infourl);
	embed.setAttribute("src", embedurl);
}

var navbuttons = document.getElementsByClassName("nav-button");
for(i = 0; i < navbuttons.length; i++) {
	navbuttons[i].addEventListener("click", function(event) {
		var button = event.target;
		if(button.getAttribute("data-embedtype") === "valid") {
			srcDisplays(button.getAttribute("data-info"), button.getAttribute("data-embed"));
		} else {
			srcDisplays(button.getAttribute("data-info"), "html/mixed-active-content-warning.html");
		}
	});
}