const pre_element = document.getElementById("status");

function textChange() {
const new_h1 = document.createElement("h1");

new_h1.textContent = "Entered Metaverse";
pre_element.parentNode.replaceChild(new_h1,pre_element)	
	
}

