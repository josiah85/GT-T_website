//initial load of homepage
$(function()
{
  //$("#carouselid").load("content/carousel_home.html");
  $("#navbarid").load("content/navbar.html");
  $("#contentid").load("content/content_home.html");
  $("#wellid").load("content/well_home.html");
  $("#bottomid").load("content/about_home.html");
});
function content_preload() {
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").load('content/navbar.html');
  $('#carouselid').load('content/empty.html');
  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}
function service_rates(){
  content_preload();
  $('#contentid').load('content/content_services_rates.html');
}
function phoneCards(){
  content_preload();
  $('#contentid').load('content/phoneCards.html');
}
function landLineFAQ(){
  content_preload();
  $('#contentid').load('content/landLineFAQ.html');
}
function residentialApplication(){
  content_preload();
  $('#contentid').load('content/residentialApplication.html');
}