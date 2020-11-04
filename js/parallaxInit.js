// PARALLAX CALLING
//====================================================================
//====================================================================
( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
			$('.banner').parallax("50%", 0.5);
			$('.getInTouch-bg').parallax("50%", 0.5);
			$('.twitter-bg').parallax("50%", 0.5);
			//$('.twitter-feed').parallax("50%", 0.5);

			
			//$('.parallax .work-teaser-bg').parallax("50%", 0.5);
			//$('.parallax .about-teaser-bg').parallax("50%", 0.5);
			//$('.parallax .team-teaser-bg').parallax("50%", 0.5);
			//$('.parallax .service-teaser-bg').parallax("50%", 0.5);
			//$('.parallax .blog-teaser-bg').parallax("50%", 0.01);
		}
	}	
	parallaxInit();	 
});	
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));