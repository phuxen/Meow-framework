document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("hgroup");  
document.createElement("nav");

/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:2,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

//Pixel density script
(function($) {

	var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
	$.highdpi_init = function() {
	    $('img').each(function () {
	        console.log('highdpi_init');
	        if (pixelRatio > 1) {           
	            var src = $(this).attr("src");
	            $(this).attr("src", src.replace(/(@2x)*.png/i, "@2x.png").replace(/(@2x)*.jpg/i, "@2x.jpg"));
	            $(this).removeClass('replace-2x');
	            console.log('retina');
	        }else{
	            console.log('not retina');
	        }
	    });
	}
})(jQuery);


$(document).ready(function($){

	// Here's our iosSlider
	$('.iosSlider').iosSlider({		
		scrollbar: false,
		snapToChildren: true,
		desktopClickDrag: true,
		scrollbarLocation: 'bottom',
		scrollbarMargin: '5px 10px 0 10px',
		scrollbarBorderRadius: 4,
		scrollbarHeight: '5px',
		responsiveSlideWidth: true,
		navNextSelector: $('.next'),
		navPrevSelector: $('.prev'),
		navSlideSelector: $('.iosSliderButtons .button'),
		infiniteSlider: false,
		keyboardControls: true,
		onSlideChange: slideContentChange,
		onSlideComplete: slideContentComplete,
		onSliderLoaded: slideContentLoaded,
	});
	function slideContentChange(args) {
		// Indicator
		$('.iosSliderButtons .button').removeClass('selected');
		$('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
	}
	function slideContentComplete(args) {
	}
	function slideContentLoaded(args) {
		$('.iosSliderButtons .button').removeClass('selected');
		$('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
	}
	
	// Drop our retina detection script
	$.highdpi_init();
	   
   setInterval(updateLayout, 100); 
	//Add a listener to check the size of the document when you load
	$(document).resize(checkSize);
	checkSize();
	
});
