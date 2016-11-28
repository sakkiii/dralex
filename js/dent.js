$(function() {
    $('a').on('click', function() {
        var href = $(this).attr('href');
        if (href && href.indexOf("#") == 0) {
            href = href.substring(1);
        }
         
        ga('send', 'pageview', href);
        clicky.log(href, "Click");
    });
});


$(function() {
    (function() {
      var _fbq = window._fbq || (window._fbq = []);
      if (!_fbq.loaded) {
        var fbds = document.createElement('script');
        fbds.async = true;
        fbds.src = '//connect.facebook.net/en_US/fbds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(fbds, s);
        _fbq.loaded = true;
      }
      _fbq.push(['addPixelId', '1434339160202706']);
    })();
    window._fbq = window._fbq || [];
    window._fbq.push(['track', 'PixelInitialized', {}]);
});

$(function() {
    window.fbAsyncInit = function() {
        FB.init({
                appId      : '1167837603301313',
                xfbml      : true,
                version    : 'v2.8'
            });
    };

    (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
});