(function ($) {
   "use strict";


/*----------------------------
 wow js active
------------------------------ */
	new WOW().init();   


/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
/*----------------------------
 Navbar nav
------------------------------ */

	$(".main-menu ul.navbar-nav li ").on('click', function(){
		$(".main-menu ul.navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});	

/*----------------------------
 Header Images
------------------------------ */
	$(".header-img").height($(window).height());

	$(window).resize(function(){
		$(".header-img").height($(window).height());
	});	

/*----------------------------
Page Scroll
------------------------------ */

	jQuery('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 55
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 

/*----------------------------
 Counter js active
------------------------------ */

	$('.counter').counterUp({
		delay: 40,
		time: 3000
	});
/*---------------------
 mixItUp
--------------------- */	

	$('.awesome-portfolio-content').mixItUp({
		animation: {
		  effects: 'rotateZ',
		  duration: 1000,
		}
	});

/*---------------------
 testimonial-curosel
--------------------- */
	$('.testimonial-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		animateOut: 'slideOutUp',
		animateIn: 'zoomInRight',
		navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

/*---------------------
 Blog-curosel
--------------------- */
	$('.blog-item ').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		animateOut: 'slideOutDown',
		animateIn: 'zoomInLeft',
		navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	

})(jQuery); 
