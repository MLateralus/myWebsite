// Asia handlers
var buttonTable = document.getElementById("tablebutton");
var buttonFilter = document.getElementById("goFilter");
var buttonFilter2 = document.getElementById("leadFilter");
var t = [];
var column = 0;

buttonTable.addEventListener("click", showTable);
buttonFilter.style.display = "none";
buttonFilter2.style.display = "none";

buttonFilter.addEventListener("click", function(){
	column = 3;
	showSuppliers();
	priceFilter();
}, false);

buttonFilter2.addEventListener("click", function(){
	column = 4;
	showSuppliers();
	priceFilter();
}, false);

function showButtons(){
	buttonFilter.style.display = "block";
	buttonFilter2.style.display = "block";
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function showTable() {
    if (document.getElementsByClassName("wholetable")[0].style.display == 'none') {
        document.getElementsByClassName("wholetable")[0].style.display = "block";
    } else {
        document.getElementsByClassName("wholetable")[0].style.display = "none";
    }
}

(function getProducts() {
    var A = [];
    $("#wholetable").find("td:nth-child(2)").each(function() {
        var elem = this;
        A.push(this.innerHTML);
    });
    A = A.filter(onlyUnique);
    for (var i = 0; i < A.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = A[i];
        document.getElementById("selectbasic").appendChild(option);
    }
})();

function showSuppliers() {
	t = [];
    clearFilterTable();
    hideFilterTable();
	showButtons();

    while (resultTable.childElementCount > 1) {
        resultTable.removeChild(resultTable.lastChild);
    }

    $.each($("#wholetable tbody").find("tr"), function() {
        if ($(this).text().toLowerCase().indexOf(getCurrentProduct().toLowerCase()) > -1) {
            var tmp = this.cloneNode(true);
            document.getElementById("resultTable").appendChild(tmp);
        }
    });
    document.getElementById("resultSupplier").style.display = "block";
    t = document.getElementById("resultTable").children;
}

function getCurrentProduct() {
    var suppDropdown = document.getElementById("selectbasic");
    return suppDropdown.options[suppDropdown.selectedIndex].value
}

function priceFilter() {

    var A = t;
    var o = document.getElementById("filterResult")
    var elem = A[1];
    var min = A[1].children[column].innerHTML;
    var resultFilterTable = document.getElementById("filterResult");

    for (var i = 2; i < A.length; i++) {
        if (A[i].children[column].innerHTML < min) {
            min = A[i].children[column].innerHTML;
            elem = A[i];
        }
    }
    o.appendChild(elem);
	
    for (var v = 0; v < t.length - 1; v++) {
        priceFilter();
    }
    document.getElementById("resultSupplier").style.display = "none";
    document.getElementById("resultFilter").style.display = "block";
}

function clearFilterTable() {
    var filterTable = document.getElementById("filterResult");
    while (filterTable.childElementCount > 1) {
        filterTable.removeChild(filterTable.lastChild);
    }
}

function hideFilterTable() {
    var filterTable = document.getElementById("resultFilter");
    filterTable.style.display = "none";
}