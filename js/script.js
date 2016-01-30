var home = document.getElementById("home");
var conFun = document.getElementById("contentFunctions");
var conForm = document.getElementById("contentForm");
var conLog = document.getElementById("log");
document.getElementById("sideButton1").addEventListener("click", homeJS);
document.getElementById("sideButton2").addEventListener("click", functionJS);
document.getElementById("sideButton3").addEventListener("click", logJS);

function SquareIt(){
     var num = document.getElementById("square");
     var numVal = num.value;

     alert("Square = " + numVal * numVal);
	 event.preventDefault();
	 return false;
 }
function CheckPrime(){
     var num = document.getElementById("prime");
     var numVal = num.value;
     var division = 2;
     while (numVal > division) {
         if (numVal % division === 0) {
			 alert(" The number is not prime ");
			 event.preventDefault();
             return false;
         }
         division++
     }
     alert(" The number is prime ");
	 event.preventDefault();
	 return false;
 }
function Revstring(){
    var num = document.getElementById("string");
    var numVal = num.value;
    numVal = numVal.split("").reverse().join("");
    alert("Reversed string: " + numVal);
	event.preventDefault();
	return false;
}
function switchTe(){
	var num = document.getElementById("te");
	var numVal = num.value;
	numVal = (5/9) * (numVal-32);
	alert("Farenthide : " + numVal + " " + "F");
	event.preventDefault();
	return false;
}
function homeJS(){
home.style.display = "block";
conFun.style.display = "none";
conForm.style.display = "none";
conLog .style.display = "none";
}
function functionJS(){
conFun.style.display = "block";
conForm.style.display = "block";
home.style.display = "none";
conLog.style.display = "none";
}
function logJS(){
conFun.style.display = "none";
conForm.style.display = "none";
home.style.display = "none";
conLog .style.display = "block";
}
function pop(div) {
document.getElementById("popDiv").style.display = 'block';
}
function hide(div) {
	document.getElementById("popDiv").style.display = 'none';
}
document.onkeydown = function(evt) { /* handle excape button */
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('popDiv');
	}
};

