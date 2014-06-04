//redirect to proper content page on reload
$(function()
{
    //window.location.hash="";
    if(window.location.hash && (window.location.hash != "#nav_features" || window.location.hash != "#nav_about") ) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        $("#navbarid").load("content/navbar_content.html");
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
    if(window.location.hash != "#nav_features" && window.location.hash != "#nav_about"){
       if(window.location.hash) {
            $("#navbarid").load("content/navbar_content.html");
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
    } else {
        $("#navbarid").load("content/navbar.html");
    }
});