
window.onload = function(){


// var safeColors = ['00','33','66','99','cc','ff'];
// var rand = function() {
//     return Math.floor(Math.random()*6);
// };
// var randomColor = function() {
//     var r = safeColors[rand()];
//     var g = safeColors[rand()];
//     var b = safeColors[rand()];
//     return "#"+r+g+b;
// };

//     $('body').css('background',randomColor());


// Add social links on load, override dribbble API

// $('ul.portfolio li:nth-child(5)').addClass('facebook');
// $('ul.portfolio li:nth-child(9)').addClass('dribbble');
// $('ul.portfolio li:nth-child(19)').addClass('linkedin');
// $('ul.portfolio li:nth-child(30)').addClass('instagram');


window.allowTeaserRollovers = false;

setTimeout(function () {

    $('#avatar-wrap-2').removeClass('cubic');
    //$('.cover-image.cubic').removeClass('cubic');
    $('.portfolio').removeClass('black-white');
    $('#nav-toggle').addClass('show-nav');

}, 3500)

// Create grid on load

var options =
{
srcNode: '.portfolio .teaser',         // grid items (class, node)
margin: '0',             // margin in pixel, default: 0px
width: '500',             // grid item width in pixel, default: 220px
max_width: '500',              // dynamic gird item width if specified, (pixel)
resizable: true,            // re-layout if window resize
transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
}
document.querySelector('.portfolio').gridify(options);
}


$(document).ready(function () {


 // Spin.js Loader


 var opts = {
    lines: 1, // The number of lines to draw
    length: 0, // The length of each line
    width: 11, // The line thickness
    radius: 0, // The radius of the inner circle
    corners: 300, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#fff', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 80, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById('spin');
var spinner = new Spinner(opts).spin(target);
function spin_stop()
{
    spinner.stop();
}
function spin_start()
{
    spinner.spin(target);
}


$(window).on('resize', window.rectifyLayout);

  // Teaser hovers

  $('.portfolio')
  .on('mouseover','.teaser img',function(){
      if(window.allowTeaserRollovers == true) //stops the rollover happening while images are loaded - look at getShots.js
        $(this).parents('li').find('.views').addClass('caption');
    $(this).parents('li').find('.count').addClass('show-count');
    $(this).parents('.teaser').find('.scrim').addClass('fade');
    $(this).parents('li').find('.fadeMeIn').addClass('zoom');
})
  .on('mouseout','.teaser img',function(){
    $(this).parents('li').find('.views').removeClass('caption');
    $(this).parents('li').find('.count').removeClass('show-count');
    $(this).parents('.teaser').find('.scrim').removeClass('fade');
    $(this).parents('li').find('.fadeMeIn').removeClass('zoom');

});


// Make sure header is gone after scrolling

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 1000) {
//         $(".hdr, #avatar-wrap-2").addClass("other-gone");
//     } else {
//         $(".hdr, #avatar-wrap-2").removeClass("other-gone");
//     }
// });


var timer;
var delay = 40;
var delay2 = 800;

// Avatar hover visd

$('#avatar-wrap-2').hover(function() {
// on mouse in, start a timeout
$(this).removeClass('transition').addClass('hover-avatar');

}, function() {
// on mouse out, cancel the timer

$('.more-avatar').removeClass('hover-avatar').addClass('cubic');

timer = setTimeout(function() {
    // do your stuff here

    timer = setTimeout(function() {
                // do your stuff here
                $('.show-face.more-avatar').addClass('transiton').removeClass('cubic');
            }, delay2);
}, delay);


//clearTimeout(timer);
});

//var percent = '100%'

// Scroll to



// Animate loader

//$('body').find('.spinner, .fetching').addCass("kerning");
$('body').find('#spin').addClass("show");

// Get shots from Dribbble

function getShots(page,per_page) {

//add generated html to page
//$('.portfolio img').shots(shots.join(''));
//animate that bitch
//$('.portfolio').imagesLoaded(function(e){
    window.images = $('.portfolio img');
//window.intro = $('#intro ul');
window.imageIndex = 0;

// });

// Define variables

var shots = [],
container = $('.portfolio'),
template = '<li><a href="{{link}}" target="_self" class="teaser disable"><div class="imgcontainer"><span class="views"><span class="count">{{title}}</span><span class="hide count">{{views}}</span><span class="scrim"></span></span><img class="work-img" src="{{shot}}"/></div></a></li>';
data = {page: page || 1, per_page: per_page || 37};

// Get data from Dribbble

$.ajax({
    type: 'GET',
    url: 'https://api.dribbble.com/players/alex2pt0/shots',
    data: data || {},
    dataType: 'jsonp',
    success: function (data) {
        shots = data.shots;

// Loop thru data

container.append($.map(shots, function (obj, index) {
    var shot = obj.image_url,
    views = obj.views_count;
    title = obj.title;
    link = obj.url;

//return template.replace(/{{shot}}/, shot).replace(/{{title}}/, title);
return template.replace(/{{shot}}/, shot).replace(/{{title}}/, title).replace(/{{views}}/, views).replace(/{{link}}/, link);
}).join(''));

window.images = $('.portfolio img');
//window.rectifyLayout();
window.imageIndex = 0;
$('.portfolio').imagesLoaded( function ($image){

    $('body').find('#spin').addClass("spin-gone");
    $('body').find('.portfolio').addClass("spin-remove");
    $('body').find('.mobile').addClass("spin-remove");
    $('.hdr').delay(1000).queue(function(){$(this).removeClass('hide-hdr')});

    setTimeout(function () {

        //$('.hdr, #cover, #avatar-wrap-2').addClass('transition');

    }, 7500)



    $("#cover").delay(350).queue(function(){$(this).addClass('show-face show-cover move-intro')});
    animateImages();

});
}

});
}

// self invoking anonymous function

(function ($) {

// call getShots()

getShots(1,37);

})(jQuery);

});


function animateImages( ){
    var images      = window.images,
//intro     = window.intro,
index       = window.imageIndex,
$elem       = $( images[index] ),
$nextElem   = $( images[index + 1] );

$elem.delay(1780).queue(function(){$(this).addClass('fadeMeIn')});
$("#creds-wrap, #social-nav, section").delay(0).queue(function(){$(this).removeClass('hide')});
$("#avatar-wrap-2").delay(2550).queue(function(){$(this).addClass('show-face more-avatar')});
$("#social-nav").delay(3000).queue(function(){$(this).addClass('show')});
$(".cover-image").delay(100).queue(function(){$(this).addClass('show-face')});
$('.section-two p').delay(2700).queue(function(){$(this).addClass('show-intro')});
//$('body').find('.portfolio').delay(3000).queue(function(){$(this).addClass('shadow')});
//$(".rule").delay(600).queue(function(){$(this).addClass('grow')});
//$(".fetching").delay(10000).queue(function(){$(this).addClass('reverse')});
//$('section').removeClass('hide').addClass('fade');
//$('*[class^="prlx"]').delay(1800).queue(function(){$(this).addClass('no-trans')});

//window.allowTeaserRollovers = false;

if( $nextElem.length ){

    setTimeout( animateImages , 140);

//setTimeout( animateImagesComplete , 700);


}
else{
    //animateImagesComplete();


$("ul.portfolio li").delay(1900).queue(function(){$(this).addClass('fast')});
//$(".views").delay(200).queue(function(){$(this).addClass('views-mobile')});
//$("section").delay(800).queue(function(){$(this).addClass('no-trans')});
}

window.imageIndex = window.imageIndex + 1;
animateImagesComplete();
}

//this function will be called after animateImages is done animating all images

function animateImagesComplete(){

//$('.scrim').removeClass('scrim-white');
window.allowTeaserRollovers = true;

setTimeout(function () {

        $('.teaser').removeClass("disable");

    }, 2000)

// Social link outs

$('ul.portfolio li.facebook a').click(function(e) {
    e.preventDefault();
//do other stuff when a click happens

window.location.href = "https://www.facebook.com/alex.s.lakas";
});

$('ul.portfolio li.dribbble a').click(function(e) {
    e.preventDefault();
//do other stuff when a click happens

window.location.href = "https://dribbble.com/alex2pt0";
});

$('ul.portfolio li.instagram a').click(function(e) {
    e.preventDefault();
//do other stuff when a click happens

window.location.href = "https://www.instagram.com/thelakas";
});

$('ul.portfolio li.linkedin a').click(function(e) {
    e.preventDefault();
//do other stuff when a click happens

window.location.href = "https://www.linkedin.com/in/latenights";
});

// Show overlay thing

$('#nav-toggle').click(function(e) {
    e.preventDefault();
//do other stuff when a click happens

    $(this).toggleClass("active");
    $('#cover .overlay-wrap').toggleClass("open-overlay");
    $('#cover .overlay-wrap .overlay-bg').toggleClass("show-bg");
    $('#cover .overlay-wrap p.hdr').toggleClass("open-text");
    $('#cover .main.hdr').toggleClass("open-main");
});


}
