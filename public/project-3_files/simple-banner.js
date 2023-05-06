jQuery(document).ready(function ($) {
    var isSimpleBannerTextSet = simpleBannerScriptParams.simple_banner_text != "";
    var isSimpleBannerEnabledOnPage = !simpleBannerScriptParams.pro_version_enabled || 
        (simpleBannerScriptParams.pro_version_enabled && !simpleBannerScriptParams.disabled_on_current_page);
    var isSimpleBannerVisible = isSimpleBannerTextSet && isSimpleBannerEnabledOnPage;

    if (isSimpleBannerVisible) {
        if (!simpleBannerScriptParams.wp_body_open || !simpleBannerScriptParams.wp_body_open_enabled) {
            var closeButton = simpleBannerScriptParams.close_button_enabled ? '<button aria-label="Close" id="simple-banner-close-button" class="simple-banner-button">&#x2715;</button>' : '';
            var prependElement = document.querySelector(simpleBannerScriptParams.simple_banner_insert_inside_element || 'body');
            $('<div id="simple-banner" class="simple-banner"><div class="simple-banner-text"><span>' 
                + simpleBannerScriptParams.simple_banner_text 
                + '</span></div>' + closeButton + '</div>')
            .prependTo(prependElement || 'body');
        }

        var bodyPaddingLeft = $('body').css('padding-left')
        var bodyPaddingRight = $('body').css('padding-right')

        if (bodyPaddingLeft != "0px") {
            $('head').append('<style type="text/css" media="screen">.simple-banner{margin-left:-' + bodyPaddingLeft + ';padding-left:' + bodyPaddingLeft + ';}</style>');
        }
        if (bodyPaddingRight != "0px") {
            $('head').append('<style type="text/css" media="screen">.simple-banner{margin-right:-' + bodyPaddingRight + ';padding-right:' + bodyPaddingRight + ';}</style>');
        }

        // Add scrolling class
        function scrollClass() {
            var scroll = document.documentElement.scrollTop;
            if (scroll > $("#simple-banner").height()) {
                $("#simple-banner").addClass("simple-banner-scrolling");
            } else {
                $("#simple-banner").removeClass("simple-banner-scrolling");
            }
        }
        document.addEventListener("scroll", scrollClass);
    }

    // Add close button function to close button and close if cookie found
    function closeBanner() {
        if (!simpleBannerScriptParams.keep_site_custom_css && document.getElementById('simple-banner-site-custom-css')) document.getElementById('simple-banner-site-custom-css').remove();
        if (!simpleBannerScriptParams.keep_site_custom_js && document.getElementById('simple-banner-site-custom-js')) document.getElementById('simple-banner-site-custom-js').remove();
        if (document.getElementById('simple-banner-header-margin')) document.getElementById('simple-banner-header-margin').remove();
        if (document.getElementById('simple-banner-header-padding')) document.getElementById('simple-banner-header-padding').remove();
        if (document.getElementById('simple-banner')) document.getElementById('simple-banner').remove();
    }
    
    if (isSimpleBannerVisible) {
        var sbCookie = "simplebannerclosed";

        if (simpleBannerScriptParams.close_button_enabled){
            if (getCookie(sbCookie) === "true") {
                closeBanner();
                // Set cookie again here in case the expiration has changed
                setCookie(sbCookie, "true", simpleBannerScriptParams.close_button_expiration);
            } else {
                document.getElementById("simple-banner-close-button").onclick = function() {
                    closeBanner();
                    setCookie(sbCookie, "true", simpleBannerScriptParams.close_button_expiration);
                };
            }
        } else {
            // disable cookie if it exists
            if (getCookie(sbCookie) === "true") {
                document.cookie = "simplebannerclosed=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    }

    // Cookie Getter/Setter
    function setCookie(cname,cvalue,expiration) {
        var d;
        if (expiration === '' || expiration === '0' || parseFloat(expiration)) {
            var exdays = parseFloat(expiration) || 0;
            d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
        } else {
            d = new Date(expiration);
        }
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Debug Mode
    // Console log all variables
    if (simpleBannerScriptParams.pro_version_enabled && simpleBannerScriptParams.debug_mode) {
        console.log(simpleBannerScriptParams);
    }
});
