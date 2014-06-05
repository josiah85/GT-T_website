//initial load of homepage
$(function()
{
  if(!window.location.hash) {
    //$("#carouselid").load("content/carousel_home.html");
    $("#navbarid").load("content/navbar.html");
    $("#contentid").load("content/content_home.html");
    $("#wellid").load("content/well_home.html");
    $("#bottomid").load("content/sitemap.html");
    //carousel turn interval
    $('.carousel').carousel({interval: 8000});
  }
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
  $('#bottomid').load('content/sitemap.html');
}
//load appropriate content when called
function loadContent(page){
  content_preload();
  $('#contentid').load('content/' + page + '.html');
}
//redirect to proper content page on reload
$(function()
{
    //window.location.hash="";
    if(window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        $("#navbarid").load("content/navbar.html");
        $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
        $('#carouselid').load('content/empty.html');

        $('#contentid').load('content/' + hash + '.html');

        $('#wellid').load('content/empty.html');
        $('#bottomid').load('content/sitemap.html');
        $('.nav-link').hide();
        // hash found
    }
});
//added back button functionality for jquery load hashes
$(window).bind('hashchange', function() {
   if(window.location.hash) {
        $("#navbarid").load("content/navbar.html");
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
        $('#carouselid').load('content/empty.html');

        $('#contentid').load('content/' + hash + '.html');

        $('#wellid').load('content/empty.html');
        $('#bottomid').load('content/sitemap.html');
        // hash found
        $('.nav-link').hide();
        $('html, body').animate({ scrollTop: 0 }, 0);
    } else {
        // No hash found
        location.reload();
    }
});