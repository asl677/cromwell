

$(window).ready(function(){

	// ---------------- HOMEPAGE -------------------

	// Typing text

	var TxtRotate = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		var that = this;
		var delta = 300 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
	};

	window.onload = function() {
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i= 0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.05em solid #fff }";
		document.body.appendChild(css);
	};

	// ---------------- QUOTES ----------------------

	var quotes = $(".quotes");
	var quoteIndex = -1;

	function showNextQuote() {
		++quoteIndex;
		quotes.eq(quoteIndex % quotes.length).fadeIn(1500).delay(2700).fadeOut(1500, showNextQuote);

	}

	showNextQuote();

	// ---------------- THUMB HOVERS ----------------------


	//$('.filler_link').siblings('.project_text').find('.project_snippet:after').addClass('dropOut2')

	$('.filler_link').hover(function() {
		//$(this).siblings('.project_text').find('.project_snippet').toggleClass('dropOut')

		// setTimeout(function() {
		// 	$(this).siblings('.project_text').find('.project_snippet:after').toggleClass('dropOut2')
		// }, 30);

		//$(this).siblings('.project_text').find('.scrim').toggleClass('show')
		//$(this).parents('.photo_min').toggleClass('zoom')
		//$(this).parents('.float-left').toggleClass('fadey')

		if ($(window).width() > 1024) {

			$(this).siblings('.project_text').find('.project_snippet').toggleClass('dropOut')
			//$('.photo_min').toggleClass('blackout');
		} else {
			//$(this).siblings('.project_text').find('.project_snippet').addClass('anim anim_1')

		}

	});

	// ---------------- NAVIGATION ----------------------

	// Redirect HOMEPAGE from logo

	$('.logo').click(function() {
    window.location.href = 'http://www.alexlakas.com/';
    return false;
});


	// Show central nav stuff

	//$(".logo, .intro-links.mobile-links").on('click', function() {
	$(".fixed-nav span svg").on('click', function() {

		$('.logo.trigger.bitmoji.anim_1.fast').toggleClass('slide_logo');
		$('.footer-social-icons').addClass('out');
		$('.intro-links li a.current_page').addClass('highlight');
		$('.intro-links li').addClass('staggerIn');
		//$(this).children().second('.line').toggleClass('rotate');

		setTimeout(function() {
			$('.intro-links.mobile-links').toggleClass('show-nav');
		}, 300);

		//e.preventDefault();

		// Fade nav wrapper

		setTimeout(function() {
			//$('.intro-links.mobile-links ul').toggleClass('show-nav-inner');
			$('.intro-links.mobile-links li').toggleClass('show-links');
		}, 600);

	});

	// $(".intro-links.mobile-links").mouseleave(function() {
	//
	// 	$('.intro-links.mobile-links.show').removeClass('show-nav');
	// 	$('.footer-social-icons').removeClass('out');
	// 	$('.intro-links li a.current_page').toggleClass('highlight');
	// 	$('.intro-links.mobile-links').toggleClass('show-nav');
	//
	// });

	// ---------------- FRAMEWORK ----------------------

	// Fade between pages

	$('a.filler_link, .ftr-link, .mobile-links a, a.social-icon, .case-study-nav ul li a').click(function(e) {
		e.preventDefault();
		newLocation = this.href;
		$('body').fadeOut('fast', newpage);
		$('.anim_box_1-5.client-wrap.first').addClass('slideMeOut');
		$('.box_in_style_3.box_in_style_4.anim_box_1-5.introduction').addClass('slideMeOut');
	});
	function newpage() {
		window.location = newLocation;
	}

	// Load upper content

	// setTimeout(function() {
	// 	$('div').addClass('anim_1');
	// }, 10);

	setTimeout(function() {
		//$('.details').addClass('anim_1');
	}, 2300);

	setTimeout(function() {
		$('.links').addClass('anim_1');
	}, 0);

	setTimeout(function() {
		$('.container_box, .container_box_2').addClass('anim');
	}, 900);

	setTimeout(function() {
		$('.showbox').addClass('hide');
	}, 1000);

	setTimeout(function() {
		//$('.showbox.hide').addClass('fadeIn');
	}, 1200);
	//
	// setTimeout(function() {
	// 	$('.fixed-nav + div').addClass('anim');
	// }, 1000);

	//$('.loader').removeClass('anim').fadeOut(300);
	//$('.showbox').fadeOut(700);

	setTimeout(function() {
		$('.introduction.top-intro .white-links').addClass('show');
	}, 1200);

	// setTimeout(function() {
	// 	$('span:after').addClass('anim anim_1');
	// }, 2000);

	setTimeout(function() {
		$('.social-icons.upper_nav').addClass('anim_1');
	}, 1500);
	//
	setTimeout(function() {
		$('span.section').addClass('openline');
	}, 1300);

	setTimeout(function() {
		$('.ftr-link').addClass('anim_1');
	}, 2200);
	//
	setTimeout(function() {
		$('.logo').addClass('anim_1');
	}, 1000);
	//
	// setTimeout(function() {
	// 	$('.center.subby').addClass('anim_1');
	// }, 2800);
	//
	setTimeout(function() {
		$('.fixed-nav').addClass('anim');
	}, 1200);

	setTimeout(function() {
		$('hr').addClass('open');
	}, 1400);

	setTimeout(function() {
		$('.arrow').addClass('hide');
	}, 100);

	// setTimeout(function() {
	// 	$('div').removeClass('anim_1');
	// }, 3800);


	// ---------------- WORK FILTERS ----------------------


	// Toggle categories on work page

	$("li.all_work").click(function() {

		$(this).addClass("active");
		$('li.ux_work, li.illo_work, li.proto_work, li.photo_work, li.visual_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_ux, .photo_min.x_illo, .photo_min.x_photo, .photo_min.x_proto, .photo_min.x_visual, .photo_min.x_case').removeClass("fadeOut");

		event.preventDefault();

	});


	$("li.ux_work").click(function() {

		$(this).toggleClass("active");
		$('li.visual_work, li.illo_work, li.proto_work, li.photo_work, li.all_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_illo, .photo_min.x_photo, .photo_min.x_proto, .photo_min.x_visual, .photo_min.x_case').addClass("fadeOut");
		$('.photo_min.x_ux').removeClass("fadeOut");

		event.preventDefault();

	});

	$("li.case_work").click(function() {

		$(this).toggleClass("active");
		$('li.visual_work, li.illo_work, li.proto_work, li.photo_work, li.all_work, li.ux_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_illo, .photo_min.x_photo, .photo_min.x_proto, .photo_min.x_visual, .photo_min.x_ux').addClass("fadeOut");
		$('.photo_min.x_case').removeClass("fadeOut");

		event.preventDefault();

	});

	$("li.visual_work").click(function() {

		$(this).toggleClass("active");
		$('li.ux_work, li.illo_work, li.proto_work, li.photo_work, li.all_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_illo, .photo_min.x_photo, .photo_min.x_proto, .photo_min.x_ux, .photo_min.x_case').addClass("fadeOut");
		$('.photo_min.x_visual').removeClass("fadeOut");

		event.preventDefault();

	});

	$("li.photo_work").click(function() {

		$(this).toggleClass("active");
		$('li.ux_work, li.illo_work, li.proto_work, li.visual_work, li.all_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_illo, .photo_min.x_visual, .photo_min.x_proto, .photo_min.x_ux, .photo_min.x_case').addClass("fadeOut");
		$('.photo_min.x_photo').removeClass("fadeOut");

		event.preventDefault();

	});

	$("li.proto_work").click(function() {

		$(this).toggleClass("active");
		$('li.ux_work, li.illo_work, li.photo_work, li.visual_work, li.all_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_illo, .photo_min.x_visual, .photo_min.x_photo, .photo_min.x_ux, .photo_min.x_case').addClass("fadeOut");
		$('.photo_min.x_proto').removeClass("fadeOut");

		event.preventDefault();

	});

	$("li.illo_work").click(function() {

		$(this).toggleClass("active");
		$('li.ux_work, li.proto_work, li.photo_work, li.visual_work, li.all_work, li.case_work').removeClass("active");
		//$('.photo_min.x_proto.fadeIn').toggleClass("fadeOut");

		$('.photo_min.x_proto, .photo_min.x_visual, .photo_min.x_photo, .photo_min.x_ux').addClass("fadeOut");
		$('.photo_min.x_illo').removeClass("fadeOut");

	});

	// scroll to top of filter set after filtering

	// $('#filter-cat li a[href*="#"]').on('click', function (e) {
	//
	// 	e.preventDefault();
	//
	// 	$('html, body').animate({
	// 		scrollTop: $($(this).attr('href')).offset().top + 230 - 55
	// 	}, 300);
	//
	// });

	// Load content on scroll and depending on viewport size

	//ScrollReveal().reveal('div').toggleClass('anim anim_1');
	//ScrollReveal().reveal('div', { delay: 150 }).addClass('anim_1');
	//ScrollReveal().reveal('div', { distance: '30px' });
	//ScrollReveal().reveal('div', {distance: '100' });

	var height = $(window).height();
	var width = $(window).width();

	$('.black-everything.anim').removeClass('anim');

	if ($(window).width() > 900) {

		setTimeout(function() {
			ScrollReveal().reveal('div', { origin: 'left', distance: '20px' });
			//$('section, a').removeClass('anim anim_1');
			//$('.details').removeClass('anim anim_1');
		}, 920);
		//ScrollReveal().reveal('div', { distance: '30px' });
		//$('div').addClass('anim anim_1');
	} else {
		//ScrollReveal().reveal('div', { origin: 'left', distance: '30px' });

		setTimeout(function() {
			$('div, .cap_label').addClass('anim show');
			$('span, a').removeClass('anim anim_1');
		}, 920);
	}

	$(window).resize(function() {

			if (width > 900) {
				//$('a, span, div').addClass('anim anim_1');
				//ScrollReveal().reveal('div', { origin: 'left', distance: '30px' });
			} else {
				//$('div, .cap_label').addClass('anim show');
				//$('section, a, span, div').addClass('anim anim_1');

						setTimeout(function() {
						}, 0);
			}

		});


	// 	ScrollReveal.prototype.handler = function( event ) {
	//   if ( !sr.blocked ) {
	// -    sr.blocked = true;
	// -    _requestAnimationFrame( sr.animate );
	// +    _requestAnimationFrame(function(){
	// +      sr.blocked = true;
	// +      sr.animate();
	//
	// 	 $('div').addClass('anim');
	//
	// +
	// } else {
	// 		ScrollReveal().reveal('div', { distance: '30px' });
	//
	// };


  // ---------------- CASE NAVI ----------------------


	// Show central nav stuff

	// $(".fixed-nav span").on('click', function(e) {
	//
	// 	$('.case-study-nav').toggleClass('show-case-nav');
	// 	$(this).children().first().toggleClass('rotate');
	// 	$(this).toggleClass('shift_arrow');
	//
	// });

	$(".case-study-nav").on('mouseleave', function(e) {

		//e.preventDefault();
		setTimeout(function() {
			$('.case-study-nav').toggleClass('show-case-nav');
			$(this).children().first().toggleClass('rotate');
			$('.fixed-nav span').toggleClass('shift_arrow');
		}, 300);


	});



})
