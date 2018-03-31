$(document).ready(function() {

// About page vertical menu
$("#myTab a").on("click", function (event) {
  event.preventDefault();
  $(this).tab("show");
});

$('#about a[href="#about"]').tab('show');
$('#where a[href="#where"]').tab('show');
$('#faq a[href="#faq"]').tab('show');
$('#contact a[href="#contact"]').tab('show');

$("#collapse-button").on("click", function() {
	$("#collapsed-area").removeClass("collapse");
    $('html, body').animate({
        scrollTop: $("#collapsed-area").offset().top
    }, 1000);
});

});

