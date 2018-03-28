$(document).ready(function() {

// About page vertical menu
$('#myTab a').on('click', function (event) {
  event.preventDefault();
  $(this).tab('show');
});

$('#about a[href="#about"]').tab('show');
$('#where a[href="#where"]').tab('show');
$('#faq a[href="#faq"]').tab('show');
$('#contact a[href="#contact"]').tab('show');

});

