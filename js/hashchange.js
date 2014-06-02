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
        $('#bottomid').load('content/empty.html');
        //alert (hash);
        // hash found
    }
});
//added back button functionality for jquery load hashes
$(window).bind('hashchange', function() {
   if(window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        $('head').append('<link rel="stylesheet" href="css/content.css" type="text/css" />');
        $('#carouselid').load('content/empty.html');

        $('#contentid').load('content/' + hash + '.html');

        $('#wellid').load('content/empty.html');
        $('#bottomid').load('content/empty.html');
        //alert (hash);
        // hash found
    } else {
        // No hash found
        location.reload();
    }
});