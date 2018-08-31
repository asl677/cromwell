
$(window).ready(function(){

//$('body').addClass('black-canvas');

	// Rotate homepage intro text

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

	// Override container to slide in on load

	setTimeout(function() {
		$('.container_box, .container_box_2').addClass('anim');
	}, 2000);

	// Fade body color on load

	// $('.showbox').addClass('black-canvas');
	//
	// setTimeout(function() {
	// 	$('.showbox').removeClass('black-canvas');
	// }, 5000);

	// Fade body content in if viewport is above or below a point

	var height = $(window).height();
	var width = $(window).width();

	$(window).resize(function() {
		if (height > 700) {

			$('div').addClass("anim");

			setTimeout(function() {
				//$('div').addClass("anim");
			}, 100);
		}
		else {
			//alert('More than 960');
		}
	});

	if (height > 700) {

		//alert('More than 960');

		setTimeout(function() {

			$('div').addClass("anim");

		}, 3100);

	}
	else {
		//alert('More than 960');
		//$('.box_in_style_3.box_in_style_4.anim_box_1-5.introduction').addClass("anim");
	}

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

		// scroll to top at same time

		// $('html, body').animate({
		//     scrollTop: $($(this).attr('href')).offset().top
		// }, 500, 'linear');

		//event.preventDefault();

	});

	// scroll to top of filter set after filtering

	$('#filter-cat li a[href*="#"]').on('click', function (e) {

		e.preventDefault();

		//$('#top-of-work').toggleClass("dissapear");

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 230 - 55
		}, 300);

			// if (width < 950) {
			//
			// 		$('html, body').animate({
			// 			scrollTop: $($(this).attr('href')).offset().top + 230 - 55
			// 		}, 300);
			// 	};
	});

	// Quote fader

	var quotes = $(".quotes");
	var quoteIndex = -1;

	function showNextQuote() {
		++quoteIndex;
		quotes.eq(quoteIndex % quotes.length).fadeIn(1500).delay(2700).fadeOut(1500, showNextQuote);

	}

	showNextQuote();

	// function setInvisible() {
	// 	$(this).css('margin-top', '140px');
	// }

	// Hover text for images

$('.filler_link').siblings('.project_text').find('.project_snippet:after').addClass('dropOut2')

	$('.filler_link').hover(function() {
		$(this).siblings('.project_text').find('.project_snippet').toggleClass('dropOut')

		// setTimeout(function() {
		// 	$(this).siblings('.project_text').find('.project_snippet:after').toggleClass('dropOut2')
		// }, 30);

		$(this).siblings('.project_text').find('.scrim').toggleClass('show')
		//$(this).parents('.photo_min').toggleClass('zoom')
		$(this).parents('.float-left').toggleClass('fadey')

		if ($(window).width() > 1024) {
			//$('.photo_min').toggleClass('blackout');
		}

	});

	// Fade between pages

	$('a.filler_link, .ftr-link, .mobile-links a, .social-icon').click(function(e) {
			e.preventDefault();
			newLocation = this.href;
				$('body').fadeOut('fast', newpage);
				$('.anim_box_1-5.client-wrap.first').addClass('slideMeOut');
				$('.box_in_style_3.box_in_style_4.anim_box_1-5.introduction').addClass('slideMeOut');
			});
			function newpage() {
				window.location = newLocation;
			}

	// Show central nav stuff

	$(".logo, .intro-links.mobile-links").on('click', function() {

		//$('.logo.trigger.bitmoji.anim_1.fast').toggleClass('slide_logo');
		$('.footer-social-icons').toggleClass('out');
		$('.intro-links li a.current_page').toggleClass('highlight');
		$('.intro-links li').toggleClass('staggerIn');

		setTimeout(function() {
			$('.intro-links.mobile-links').toggleClass('show-nav');
		}, 200);

		setTimeout(function() {
			//$('.bg_cover.anim').toggleClass('fadey');
			//$('.intro-links li').toggleClass('staggerIn');
			//$('.footer-social-icons.hide-title.show').toggleClass('add_blur receed');
		}, 400);

		setTimeout(function() {
			//$('.intro-links li a.current_page').toggleClass('highlight');
		}, 600);

		//e.preventDefault();

		// Fade nav wrapper

		setTimeout(function() {
			$('.intro-links.mobile-links li').toggleClass('show-links');
		}, 600);

		// Individually show nav links with offset

		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li a.link.one').toggleClass('staggerIn');
		// }, 300);
		//
		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li a.link.two').toggleClass('staggerIn');
		// }, 400);
		//
		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li a.link.three').toggleClass('staggerIn');
		// }, 500);
		//
		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li a.link.four').toggleClass('staggerIn');
		// }, 600);
		//
		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li a.link.five').toggleClass('staggerIn');
		// }, 700);
		//
		// setTimeout(function() {
		// 	$('.intro-links.mobile-links li.current_page').toggleClass('show-indicator');
		// }, 900);
	});

	$(".intro-links.mobile-links").mouseleave(function() {

		setTimeout(function() {
			$('.intro-links.mobile-links.show').removeClass('show-nav');
			$('.footer-social-icons').removeClass('out');
			$('.intro-links li a.current_page').toggleClass('highlight');
			//$('.intro-links li a.current_page').toggleClass('highlight');
		}, 600);

		// setTimeout(function() {
		// 	$('.intro-links li a.current_page').toggleClass('highlight');
		// }, 1200);

		//$('.intro-links.mobile-links li').toggleClass('show-links');
		//$('.intro-links li').toggleClass('staggerIn');
		//$('.container_box,.container_box_2').removeClass('collapse');
		//$('.intro-links.mobile-links li').removeClass('show-links');
	});

	$(document).scroll(function () {
		var y = $(this).scrollTop();

		if (y > 0) {
			//$('.logo.bitmoji').addClass('scale_logo');
			//$('.fixed-nav .social-icon').addClass('scale_nav');
		} else {
			// $('.footer-social-icons').removeClass('shadow');
			// $('.fab').removeClass('show');
			//$('.logo.bitmoji').removeClass('scale_logo');
			//$('.fixed-nav .social-icon').removeClass('scale_nav');
		}

		// Fade in all the content when scrolling through it

		if (y > 250) {
			$('.anim_box_1-5.client-wrap.first').addClass("anim");
		} if (y > 500) {
			$('.anim_box_1-5.client-wrap.first + hr + div').addClass("anim");
		} if (y > 550) {
			$('.anim_box_1-5.client-wrap.first + hr + div + div').addClass("anim");
			//$('.first.expand-filters').addClass("expanded");
			//$('.box_in_style_3.box_in_style_4.anim_box_1-5.introduction.pinning').addClass("fixed-filter");
		} if (y > 800) {
			$('.anim_box_1-5.client-wrap.first + hr + div + div + div').addClass("anim");
			//$('.homepage hr, .homepage div').addClass("anim");
		}  if (y > 1000) {
			$('.anim_box_1-5.client-wrap.first + hr + div + div + div + div').addClass("anim");
		}  if (y > 1200) {
			$('.anim_box_1-5.client-wrap.first + hr + div + div + div + div + div').addClass("anim");
		}  if (y > 1400) {
			$('.anim_box_1-5.client-wrap.first + hr + div + div + div + div + div + div').addClass("anim");
		}  if (y > 1500) {
			$('div').addClass("anim");
		}  if (y < 800) {
			// $('.box_in_style_3.box_in_style_4.anim_box_1-5.introduction.pinning').removeClass("fixed-filter");
			// $('.first.expand-filters').removeClass("expanded");
		} else {

			//$('.all-work hr, .all-work div').addClass("anim");

			//$('div').addClass("anim");

			// setTimeout(function() {
			//    $('.anim_box_3, .introduction + .photo_min').addClass("anim");
			// }, 2900);
			// if (y > 110) {
			// 		// $('.footer-social-icons').addClass('shadow');
			// 		$('.fab').addClass('show');
			// } else {
			// 		// $('.footer-social-icons').removeClass('shadow');
			// 		$('.fab').removeClass('show');
			// }
		}
	});

	//$('.loader').removeClass('anim').fadeOut(300);
	//$('.showbox').fadeOut(700);


	//var percent = '100%'

	// Left side of page

	setTimeout(function() {
		$('.showbox')
		.addClass('hide');
	}, 2000);
	setTimeout(function() {
		$('.social-icons.upper_nav')
		.addClass('anim_1');
	}, 2400);
	setTimeout(function() {
		$('span.snip')
		.addClass('anim_1');
	}, 2900);
	setTimeout(function() {
		$('.center.subby')
		.addClass('anim_1');
	}, 2800);
	setTimeout(function() {
		$('a.ftr-link')
		.addClass('anim_1');
	}, 2600);
	setTimeout(function() {
		$('.arrow')
		.addClass('hide');
	}, 6400);
	setTimeout(function() {
		$('.title_home')
		.addClass('anim_1');
	}, 0);
	setTimeout(function() {
		$('.bar_title_home_slice')
		.addClass('anim');
	}, 2900);
	// setTimeout(function() {
	// 	$('.intro-links')
	// 		.addClass('anim_1');
	// }, 1350);
	// setTimeout(function() {
	// 	$('.fixed-nav .logo.trigger.bitmoji')
	// 	.addClass('anim_1');
	// }, 1150);
	setTimeout(function() {
		$('.avatar, .ftr-copy')
		.addClass('anim_1');
	}, 600);
	setTimeout(function() {
		$('.links, .details')
		.addClass('anim_1');
	}, 20);
	setTimeout(function() {
		$('.logo')
		.addClass('anim_1');
	}, 3100);
	setTimeout(function() {
		$('.text_title_home_slice')
		.addClass('anim');
	}, 1300);
	setTimeout(function() {
		$('.rectangle_blanc_background_anim')
		.addClass('anim');
	}, 700);
	setTimeout(function() {
		$('.container_svg_round_img')
		.addClass('anim');
	}, 2400);
	// setTimeout(function() {
	// 	$('.fixed-nav')
	// 	.addClass('anim');
	// }, 3010);
	setTimeout(function() {
		$('.fixed-nav .social-icon')
		.addClass('anim');
	}, 2800);
	setTimeout(function() {
		$('.container_background_img_home')
		.addClass('anim');
	}, 2600);
	setTimeout(function() {
		$('.container_title_home_slice')
		.addClass('anim');
	}, 2350);
	setTimeout(function() {
		$('.title_home_slice_2')
		.addClass('white');
	}, 2850);
	setTimeout(function() {
		$('.title_home_slice_1')
		.addClass('white');
	}, 3050);
	setTimeout(function() {
		$('.subtitle_home')
		.addClass('anim');
	}, 2800);
	// setTimeout(function() {
	// 	$('.project_text .project_snippet')
	// 	.addClass('show');
	// }, 2800);
	setTimeout(function() {
		$('.slide_home')
		.addClass('anim');
	}, 3200);
	setTimeout(function() {
		$('body')
		.addClass('active');
	}, 4000);
	// setTimeout(function() {
	// 	$('.bg_cover')
	// 	.addClass('anim');
	// }, 0);

	// Right side of page

	// setTimeout(function() {
	// 	$('body')
	// 	.addClass('color');
	// }, 2760);

	setTimeout(function() {
		$('.fixed-nav')
		.addClass('anim');
	}, 2600);

	setTimeout(function() {
		$('.fixed-nav + div')
		.addClass('anim');
	}, 2700);

	setTimeout(function() {
			$('.all-work hr, .all-work div, .all-work .photo_min, .second').addClass("anim");
	}, 2900);

	//
	// setTimeout(function() {
	// 	$('.anim_box_1-5.client-wrap')
	// 	.addClass('anim');
	// }, 2800);

	// setTimeout(function() {
	// 	$('.anim_box_1-5.introduction')
	// 		.addClass('anim');
	// }, 2800);

	setTimeout(function() {
		$('.footer-social-icons')
		.addClass('show');
	}, 400);

	// setTimeout(function() {
	// 	$('.name')
	// 	.addClass('show');
	// }, 1200);

	setTimeout(function() {
		$('.intro-links')
		.addClass('show');
	}, 2950);
	// setTimeout(function() {
	// 	$('.intro-links li a')
	// 	.addClass('open-links');
	// }, 700);
	// setTimeout(function() {
	// 	$('.intro-links li a')
	// 		.addClass('open-height');
	// }, 1400);
	setTimeout(function() {
		$('hr')
		.addClass('open');
	}, 2700);
	setTimeout(function() {
		$('span.section')
		.addClass('openline');
	}, 2800);
	setTimeout(function() {
		$('.intro_main')
		.addClass('show');
	}, 2100);
	// setTimeout(function() {
	// 	$('.fa.fa-angle-down')
	// 	.addClass('show');
	// }, 3850);
	// setTimeout(function() {
	// 	$('.photo_min')
	// 	.addClass('greyscale');
	// }, 1200);
	setTimeout(function() {
		$('.introduction.top-intro .white-links')
		.addClass('show');
	}, 400);
	setTimeout(function() {
		$('.rounded .progress-track,.rounded .progress-fill')
		.addClass('animate');
	}, 1250);
	// setTimeout(function() {
	// 	$('.intro_main')
	// 		.addClass('show');
	// }, 2000);

	// setTimeout(function() {
	// 	$('.anim_box_1')
	// 	.addClass('anim');
	// }, 600);
	// setTimeout(function() {
	// 	$('.container_trio')
	// 	.addClass('anim');
	// }, 700);
	// setTimeout(function() {
	// 	$('.box_style_2')
	// 	.addClass('anim');
	// }, 6000);
	setTimeout(function() {
		//$('.anim_box_3.full-width.hero7.first').addClass('anim');
	}, 2250);
	// setTimeout(function() {
	// 	$('.indexy .fixed-nav + div + .box_style_2, .indexy .fixed-nav + div + .box_style_2 + div, .all-work div')
	// 	.addClass('anim');
	// }, 3100);
	// setTimeout(function() {
	// 	$('.anim_box_4')
	// 	.addClass('anim');
	// }, 3000);

	// setTimeout(function() {
	// 	$('.project_text .scrim')
	// 	.addClass('show');
	// }, 2000);
	//activeImg();

	// hoverinnng

	// $(".filler_link").hover(function () {
	//   $('.project_text .scrim', this).toggleClass('blackwhite');
	// 		});

})
