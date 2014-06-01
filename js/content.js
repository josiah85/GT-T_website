//initial load of homepage
$(function()
{
  //$("#carouselid").load("content/carousel_home.html");
  $("#navbarid").load("content/navbar.html");
  $("#contentid").load("content/content_home.html");
  $("#wellid").load("content/well_home.html");
  $("#bottomid").load("content/about_home.html");
});
function service_rates(){
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").fadeOut(0).load('content/navbar.html').fadeIn(0);
  $('#carouselid').load('content/empty.html');

  $('#contentid').load('content/content_services_rates.html');

  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}
function phoneCards(){
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").fadeOut(0).load('content/navbar.html').fadeIn(0);
  $('#carouselid').load('content/empty.html');

  $('#contentid').load('content/phoneCards.html');

  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}
function landLineFAQ(){
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").fadeOut(0).load('content/navbar.html').fadeIn(0);
  $('#carouselid').load('content/empty.html');

  $('#contentid').load('content/landLineFAQ.html');

  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}
function residentialApplication(){
  $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
  //collapse navbar
  $("#navbarid").fadeOut(0).load('content/navbar.html').fadeIn(0);
  $('#carouselid').load('content/empty.html');

  $('#contentid').load('content/residentialApplication.html');

  $('#wellid').load('content/empty.html');
  $('#bottomid').load('content/empty.html');
}