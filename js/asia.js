// Asia handlers
var buttonTable = document.getElementById("tablebutton");
var buttonFilter = document.getElementById("goFilter");
var t = [];
buttonFilter.addEventListener("click", gogoFilter);
buttonTable.addEventListener("click", showTable);


function showTable() {

    if (document.getElementsByClassName("wholetable")[0].style.display == 'none') {
        document.getElementsByClassName("wholetable")[0].style.display = "block";
    } else {
        document.getElementsByClassName("wholetable")[0].style.display = "none";
    }
}

(function getProducts() {

    $("#wholetable").find("td:nth-child(2)").each(function() {
        var elem = this;
        var option = document.createElement("option")
        option.innerHTML = elem.innerHTML;
        document.getElementById("selectbasic").appendChild(option)
    });
})();

function showSuppliers() {

    clearFilterTable();
    hideFilterTable();

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
    console.log(suppDropdown.options[suppDropdown.selectedIndex].value);
    return suppDropdown.options[suppDropdown.selectedIndex].value
}

function gogoFilter() {

    var A = t;
    var o = document.getElementById("filterResult")
    var elem = A[1];
    var min = A[1].children[3].innerHTML;
    var resultFilterTable = document.getElementById("filterResult");

    for (var i = 2; i < A.length; i++) {
        if (A[i].children[3].innerHTML < min) {
            min = A[i].children[3].innerHTML;
            elem = A[i];
        }
    }
    o.appendChild(elem);
    for (var v = 0; v < t.length - 1; v++) {
        console.log(t);
        gogoFilter(t);
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
    filterTable.style.display = "none"
}