// Asia handlers


function showTable(){
	
	if(document.getElementsByClassName("wholetable")[0].style.display == 'none'){
		document.getElementsByClassName("wholetable")[0].style.display = "block";
	} else {
		document.getElementsByClassName("wholetable")[0].style.display = "none";
	}
}

(function getProducts () {
	
	var products = [];
	$("#wholetable").find("td:nth-child(2)").each(function () {
		var elem = this;
		products.push(elem.innerHTML);
	});
			console.log(products);
})();

var button = document.getElementById("tablebutton");
button.addEventListener("click", showTable);
