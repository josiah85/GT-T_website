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
//load appropriate content when called
function loadContent(page){
  content_preload();
  $('#contentid').load('content/' + page + '.html');
}