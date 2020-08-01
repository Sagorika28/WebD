const btn = document.querySelector("button");

/*1 way
let isClicked = false;

btn.addEventListener("click", function() {
	if (isClicked === false) {
		document.body.style.background = "purple";
	}
	else {
		document.body.style.background = "white";
	}
	isClicked = !isClicked;
});*/

//2 way - shorter
btn.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});