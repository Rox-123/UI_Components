//     Tabs

let tabButtonLink = document.getElementsByClassName("tab-btn-style");
let tabContent = document.getElementsByClassName("tab-content");


function openTabContent(elementIndex) {
	displayNone();
	neuterButtonColor()
	tabContent[elementIndex].style.display = "block";
	// tabButtonLink[elementIndex].classList.add("linkColor");
	addColorClass(elementIndex);

}

 // Cross-browser solution for adding a class
function addColorClass(elementIndex) {
  var element, className, arr;
  element = tabButtonLink[elementIndex];
  name = "linkColor";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
}

//it can be done with Array.prototype.forEach() instead of for
function displayNone() {
	for(let i=0; i<tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
}

function neuterButtonColor() {
	for(let i=0; i<tabButtonLink.length; i++) {
		// tabButtonLink[i].classList.remove("linkColor");
		// Cross-browser solution for removing a class
		tabButtonLink[i].className = tabButtonLink[i].className.replace(/\blinkColor\b/g, "");
	}
}

//     Accordion Functions

let accordionSectionContent = document.getElementsByClassName("accordion-content");

function displayAccordionContent(elementIndex) {

	if (accordionSectionContent[elementIndex].style.display === "block") {
		accordionSectionContent[elementIndex].style.display = "none";
		// console.log("first click if: ", elementIndex);
	}
	else {
		accordionSectionContent[elementIndex].style.display = "block";
		// console.log("first click else: ", elementIndex);
	}
}

//    Range Slider 

let slider = document.getElementsByClassName("range-slider")[0];
let output = document.getElementsByClassName("slider-value")[0];

output.innerHTML = slider.value; //display the default slider value;

slider.oninput = function () {
	output.innerHTML = this.value;
}

// Popover

let popoverClickText = document.getElementsByClassName("popover-click-text");
let popoverContent = document.getElementsByClassName("popover-content");

popoverClickText[0].addEventListener("click", displayPopoverContent);

 function displayPopoverContent() {
 	if (popoverContent[0].style.display === "block") {
 		popoverContent[0].style.display = "none";
 	}
 	else {
 		popoverContent[0].style.display = "block";
 	}
 }
