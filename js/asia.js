// Asia handlers

var buttonTable = document.getElementById("tablebutton");
var buttonSupplier = document.getElementById("suppliersB");
buttonTable.addEventListener("click", showTable);
buttonSupplier.addEventListener("click", showSuppliers);

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

function showSuppliers(){
	
	while (resultTable.childElementCount > 1) {
		resultTable.removeChild(resultTable.lastChild);
	}
	
	$.each($("#wholetable tbody").find("tr"), function() {
		if($(this).text().toLowerCase().indexOf(getCurrentProduct().toLowerCase()) > -1){
			var tmp = this.cloneNode(true);
			document.getElementById("resultTable").appendChild(tmp);
		}               
    });
	document.getElementById("resultSupplier").style.display = "block";
}

function getCurrentProduct(){
	
	var suppDropdown = document.getElementById("selectbasic");
	console.log(suppDropdown.options[suppDropdown.selectedIndex].value);
	return suppDropdown.options[suppDropdown.selectedIndex].value
}
