jQuery(document).ready(function($) {

$('#banner-fade').bjqs({
  height: 320,
  width: 1000,
  responsive: true
});
});

$("#codeImports").click(function() {
    $('html, body').animate({
        scrollTop: $("#cImports").offset().top
    }, 1000);
});
$("#codeMain").click(function() {
    $('html, body').animate({
        scrollTop: $("#cMain").offset().top
    }, 1000);
});
$("#codeParse").click(function() {
    $('html, body').animate({
        scrollTop: $("#cParse").offset().top
    }, 1000);
});
$("#codeCompare").click(function() {
    $('html, body').animate({
        scrollTop: $("#cCompare").offset().top
    }, 1000);
});
$("#codeDemo").click(function() {
	$('html, body').animate({
	scrollTop: $("#cDemo").offset().top
	}, 1000);
});
$("#codeSource").click(function() {
	$('html, body').animate({
	scrollTop: $("#site_content").offset().top
	}, 1000);
});
	
	
$("#upMain").click(function() {
    $('html, body').animate({
        scrollTop: $("#uMain").offset().top
    }, 1000);
});
$("#upButtons").click(function() {
    $('html, body').animate({
        scrollTop: $("#uButtons").offset().top
    }, 1000);
});
$("#upLCD").click(function() {
    $('html, body').animate({
        scrollTop: $("#uLCD").offset().top
    }, 1000);
});
$("#upRTC").click(function() {
    $('html, body').animate({
        scrollTop: $("#uRTC").offset().top
    }, 1000);
});
$("#upTimer").click(function() {
	$('html, body').animate({
	scrollTop: $("#uTimer").offset().top
	}, 1000);
});
$("#upBoard").click(function() {
	$('html, body').animate({
	scrollTop: $("#uBoard").offset().top
	}, 1000);
});
	

