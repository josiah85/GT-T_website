//initial load of homepage
$(function()
{
  //$("#carouselid").load("content/carousel_home.html");
  $("#navbarid").load("content/navbar.html");
  $("#contentid").load("content/content_home.html");
  $("#wellid").load("content/well_home.html");
  $("#bottomid").load("content/about_home.html");
  //carousel turn interval
  $('.carousel').carousel({interval: 8000});
});
//smooth transition for nav link anchor
$(".nav-link").click(function(e) {
  e.preventDefault();
  var link = $(this);
  var href = link.attr("href");
  $("html,body").animate({scrollTop: $(href).offset().top - 80}, 500);
  link.closest(".navbar").find(".navbar-toggle:not(.collapsed)").click();
});
function content_preload() {
  $('#carouselid').load('content/empty.html');
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").load('content/navbar.html');
  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}
//load appropriate content when called
function loadContent(page){
  content_preload();
  $('#contentid').load('content/' + page + '.html');
}