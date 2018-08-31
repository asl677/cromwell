

// Show FAB

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

});

	//$('.loader').addClass('anim')


$(document).ready(function(){

$('.intro-links li').mouseover(function () {
    $(this).toggleClass('show-highlight');
});

$('.intro-links li').mouseout(function () {
    $(this).toggleClass('show-highlight')
});

	// Scroll to

	// $('a[href^="#"]')
	// 	.click(function() {
	//
	// 		var id = $(this)
	// 			.attr("href");
	// 		var offset = $(id)
	// 			.offset()
	// 			.top
	// 		$('html, body')
	// 			.animate({
	// 				scrollTop: offset
	// 			}, '600');
	// 		return false;
	// 	});

  // Scroll body

  // $('a[href*="#"]:not([href="#"])').on('click',function(e) {
  //     e.preventDefault();
  //     var offset =  '';
  //     var target = this.hash;
  //     if ($(this).data('offset') != undefined) offset = $(this).data('offset');
  //     $('html, body').stop().animate({
  //         'scrollTop': $(target).offset().top - offset
  //     }, 1000, 'easeInOutQuint', function() {
  //     });
  // });



	// Pie chart

	var data = [
	   {
	    value: 61,
	    color: "#3fb0ac",
	    label: "UI, UX, Visd"
	}, {
	    value: 11,
	    color: "#fae596",
	    label: "Developer"
	}, {
	    value: 28,
	    color: "#173e43",
	    label: "Prototyper"
	}];

	var options = {
	    segmentShowStroke: false,
	    animateRotate: true,
	    animateScale: false,
	    percentageInnerCutout: 88,
	    tooltipTemplate: "<%= value %>%"
	}

	var ctx = document.getElementById("myChart").getContext("2d");

	var myChart = new Chart(ctx).Doughnut(data, options);

	// Note - tooltipTemplate is for the string that shows in the tooltip

	// legendTemplate is if you want to generate an HTML legend for the chart and use somewhere else on the page

	// e.g:

	document.getElementById('js-legend').innerHTML = myChart.generateLegend();

	// End pie chart

	//$(".fittext3").fitText(2.1);

	$('#content').infinitescroll({
		navSelector: "#next:last",
		nextSelector: "#next:last",
		itemSelector: "#content",
		debug: false,
		dataType: 'html',
    maxPage: 6,
		path: function(index) {
			return "index" + index + ".html";
		}
		// appendCallback	: false, // USE FOR PREPENDING
    }, function(newElements, data, url){
      // used for prepending data
    	// $(newElements).css('background-color','#ffef00');
    	// $(this).prepend(newElements);
    });
});


// Scroll to top

$(".avatar").click(function() {
		$('html, body').animate({
				scrollTop: $("body").offset().top
		}, 450);
});


// Chart

$('.horizontal .progress-fill span').each(function(){
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});


$('.vertical .progress-fill span').each(function(){
  var percent = $(this).html();
  var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
  $(this).parent().css({
    'height' : percent,
    'top' : pTop
  });
});

$(document)
	.scroll(function() {
		var scroll = $(this)
			.scrollTop();
		if (scroll >= 400) {
			setTimeout(function() {
				$('.buy')
					.addClass('active');
			}, 600);
		}
	});


  	// setTimeout(function() {
  	// 	$('.title_home')
  	// 		.addClass('anim_1');
  	// }, 0);
  	// setTimeout(function() {
  	// 	$('.bar_title_home_slice')
  	// 		.addClass('anim');
  	// }, 1100);
  	// setTimeout(function() {
  	// 	$('.avatar')
  	// 		.addClass('anim_1');
  	// }, 1500);
  	// setTimeout(function() {
  	// 	$('.text_title_home_slice')
  	// 		.addClass('anim');
  	// }, 1300);
  	// setTimeout(function() {
  	// 	$('.rectangle_blanc_background_anim')
  	// 		.addClass('anim');
  	// }, 1100);
  	// setTimeout(function() {
  	// 	$('.container_svg_round_img')
  	// 		.addClass('anim');
  	// }, 2000);
  	// setTimeout(function() {
  	// 	$('.container_background_img_home')
  	// 		.addClass('anim');
  	// }, 1000);
  	// setTimeout(function() {
  	// 	$('.container_title_home_slice')
  	// 		.addClass('anim');
  	// }, 1550);
  	// setTimeout(function() {
  	// 	$('.title_home_slice_2')
  	// 		.addClass('white');
  	// }, 2050);
  	// setTimeout(function() {
  	// 	$('.title_home_slice_1')
  	// 		.addClass('white');
  	// }, 2150);
  	// setTimeout(function() {
  	// 	$('.subtitle_home')
  	// 		.addClass('anim');
  	// }, 1700);
  	// setTimeout(function() {
  	// 	$('.slide_home')
  	// 		.addClass('anim');
  	// }, 2100);
  	// setTimeout(function() {
  	// 	$('body')
  	// 		.addClass('active');
  	// }, 1600);


	// 	setTimeout(function() {
  //     //
	// 		// setTimeout(function() {
	// 		// 	$('.anim_box_1')
	// 		// 		.addClass('anim');
	// 		// }, 450);
	// 		// setTimeout(function() {
	// 		// 	$('.anim_box_1-5')
	// 		// 		.addClass('anim');
	// 		// }, 360);
	// 		// setTimeout(function() {
	// 		// 	$('.anim_box_2, .container_trio')
	// 		// 		.addClass('anim');
	// 		// }, 500);
	// 		// setTimeout(function() {
	// 		// 	$('.anim_box_3')
	// 		// 		.addClass('anim');
	// 		// }, 430);
	// 		// setTimeout(function() {
	// 		// 	$('.anim_box_4')
	// 		// 		.addClass('anim');
	// 		// }, 500);
	// 		activeImg();
	// }, 1470);

$('.container_like').click(function(e){
	event.stopPropagation();
})

function activeImg(){

	$('.photo_min').on('click',function(){
      var photomin=$(this).data('photo');
      $('.lightbox').fadeIn(600);
      $('.photo_style').fadeOut(0);
      $('.'+photomin).fadeIn(0).addClass('active').prev().addClass('anim_1').next().next().addClass('anim_3');

      if ($('.photo_style.first').hasClass('active')) {
        $(this).next().addClass('anim_3');
        $('.bottom_button').fadeOut(0);
      } else if ($('.photo_style.last').hasClass('active')) {
        $(this).prev().addClass('anim_1');
        $('.top_button').fadeOut(0);
      } else {
        $(this).prev().addClass('anim_1').next().next().addClass('anim_3');
        $('.bottom_button').fadeIn(0);
		$('.top_button').fadeIn(0);
      };
    })
}

$('.top_button').click(function() {
	$('.container_photo_style').addClass('anim');

	$('.photo_style.active').removeClass('anim_3').removeClass('active').addClass('anim_1').fadeOut(400).next().fadeIn(0).removeClass('anim_3').removeClass('anim_1').addClass('active');

	if ($('.photo_style.first').hasClass('active')) {
		//$('.bottom_button').fadeOut(0);
	}else{
		$('.bottom_button').fadeIn(0);
	}

	if ($('.photo_style.last').hasClass('active')) {
		$('.top_button').fadeOut(0);
	}else{
		$('.top_button').fadeIn(0);
	}

	setTimeout(function() {
			$('.container_photo_style')
				.removeClass('anim');
		}, 500);
})

$('.bottom_button').click(function() {
	$('.container_photo_style').addClass('anim');

	$('.photo_style.active').removeClass('anim_1').removeClass('active').addClass('anim_3').fadeOut(400).prev().fadeIn(0).removeClass('anim_1').removeClass('anim_3').addClass('active');

	if ($('.photo_style.first').hasClass('active')) {
		$('.bottom_button').fadeOut(0);
	}else{
		$('.bottom_button').fadeIn(0);
	}

	if ($('.photo_style.last').hasClass('active')) {
		$('.top_button').fadeOut(0);
	}else{
		$('.top_button').fadeIn(0);
	}


	setTimeout(function() {
			$('.container_photo_style')
				.removeClass('anim');
		}, 500);
})

$('.close_button').click(function() {
	$('.lightbox').fadeOut(400);
	$('.photo_style').removeClass('anim_1').removeClass('anim_3');

	setTimeout(function() {
		$('.photo_style').removeClass('active');
	}, 500);
})

/* LIKE */
$('.container_like').click(function() {
	$(this).toggleClass('active');
})


$('.button_active_menu').click(function() {

	if ($('.button_active_menu').hasClass('active')) {

		$('.button_active_menu').removeClass('active');

		$('.container_menu').removeClass('show');
		setTimeout(function() {
			$('.content_menu').removeClass('active');
		}, 800);

	} else {

		$('.button_active_menu').addClass('active');

		$('.container_menu').addClass('show');
		setTimeout(function() {
			$('.content_menu').addClass('active');
		}, 600);

	}
})

$('.content_on_menu').click(function() {

	$('.button_active_menu').removeClass('active');

	$('.container_menu').removeClass('show');
	setTimeout(function() {
		$('.content_menu').removeClass('active');
	}, 1000);
})

$('.content_on_menu_1').click(function() {
	$('.home').removeClass('hide');
	$('.container_box').fadeIn(400);

	$('.container_about_us').fadeOut(0);

	$('.container_story').fadeOut(0);
})

$('.content_on_menu_2').click(function() {
	$('.home').addClass('hide');
	$('.container_box').fadeOut(0);

	$('.container_about_us').fadeIn(400);

	$('.container_story').fadeOut(0);
})

$('.content_on_menu_3').click(function() {
	$('.home').addClass('hide');
	$('.container_box').fadeOut(0);

	$('.container_about_us').fadeOut(0);

	$('.container_story').fadeIn(400);
})
