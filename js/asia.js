// Asia handlers


function showTable(){
	
	if(document.getElementsByClassName("wholetable")[0].style.display == 'none'){
		document.getElementsByClassName("wholetable")[0].style.display = "block";
	} else {
		document.getElementsByClassName("wholetable")[0].style.display = "none";
	}
}

(function getProducts () {
	
	$("#wholetable").find("td:nth-child(2)").each(function () {
		var elem = this;
		
		var option = document.createElement("option")
		option.innerHTML = elem.innerHTML;
		document.getElementById("selectbasic").appendChild(option)
	});
})();

function getCurrentProduct(){
	
	var suppDropdown = document.getElementById("selectbasic");
	console.log(suppDropdown.options[suppDropdown.selectedIndex].value);
	return suppDropdown.options[suppDropdown.selectedIndex].value
}

var button = document.getElementById("tablebutton");
button.addEventListener("click", showTable);

