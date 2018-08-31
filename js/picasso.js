$(document).ready(function(){

  // Blur background on scroll

  // $(window).scroll(function() {

  //   var scrollTop = $(window).scrollTop();
  //   var divam = 320;
  //   var blurstr = "blur("+scrollTop/divam+"px)";
  //   $("#background").css({
  //     "-webkit-filter": blurstr,
  //     "filter": blurstr   
  //   });

  // });


  $('html, body').animate({scrollTop:0}, 1);


// assign 50 non-cache-able images via an image generator
var imagesArray = new Array(250).join(',').split(',');
imagesArray = imagesArray.map(function(el, i){
  return 'http://dummyimage.com/600x400/000/' + (255 - i) + '?' + +new Date();
    //return 'http://dummyimage.com/600x400/000/';
  });

// create a HTML5 progress element
var progress = document.createElement('progress');
progress.setAttribute('max', imagesArray.length);
progress.setAttribute('value', 0);
document.body.appendChild(progress);

var legend = document.createElement('span');
document.body.appendChild(legend);
var imageContainer = document.getElementById('background');

// instantiate the pre-loader with an onProgress and onComplete handler
new preLoader(imagesArray, {
  onProgress: function(img, imageEl, index){
        // fires every time an image is done or errors. 
        // imageEl will be falsy if error
        console.log('just ' +  (!imageEl ? 'failed: ' : 'loaded: ') + img);
        
        var percent = Math.floor((100 / this.queue.length) * this.completed.length);
        
        // update the progress element
        //legend.innerHTML = '<span>' + index + ' / ' + this.queue.length + ' ('+percent+'%)</span>';
        progress.value = index;
        
        imageContainer.appendChild(imageEl);
        // can access any propery of this
        console.log(this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
      }, 
      onComplete: function(loaded, errors){
        // fires when whole list is done. cache is primed.
        //console.log('done', loaded);
        //imageContainer.style.display = 'block';

  // Introductions

  $('progress').addClass('clear');

  $('#background').delay(100).queue(function(){$(this).removeClass('show-me')});
  $('.avatar, .ftr, .btn').delay(700).queue(function(){$(this).removeClass('show-me')});
  $('.name').delay(800).queue(function(){$(this).removeClass('show-me')});
  $('.byline').delay(950).queue(function(){$(this).removeClass('show-me')});

  // Scroll to

  $.fn.scrollView = function () {
  return this.each(function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top
        }, 700);
      });
    }


    $('.black').click(function (event) {
        event.preventDefault();
        $('#first-set').scrollView();
      });

    $('.continue').click(function (event) {
        event.preventDefault();
        $('#second-set').scrollView();
      });

     $('.contact').click(function (event) {
        event.preventDefault();
        $('#third-set').scrollView();
      });

  // Remove transtions

  setTimeout(function () {

    $('.avatar, .name, .byline, #background').addClass('no-trans');
  }, 1800)

  if (errors){
    console.log('the following failed', errors);
  }
}
});



});


(function() {
  $(function() {

    /*  Globals
    -------------------------------------------------- */
    var PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'],
    $window =                  $(window),
    $body =                    $('body'),
    wrappers =                 [],
    currentWrapper =           null,
    scrollTimeoutID =          0,
    bodyHeight =               0,
    windowHeight =             0,
    windowWidth =              0,
    prevKeyframesDurations =   0,
    scrollTop =                0,
    relativeScrollTop =        0,
    currentKeyframe =          0,
    keyframes = [
    {
      'wrapper' : '#big-b',
      'duration' : '40%',
      'animations' :  [
      {
        'selector'    : '.container_title_home_slice',
        'translateY'  : -140,
        'opacity'     : 0
      } , {
        'selector'    : '.subtitle_home',
        'translateY'  : -140,
        'opacity'     : 0
      } , {
        'selector'    : '.byline',
        'translateY'  : -110,
        'opacity'     : 0
      } 
      ]
    } , {
      'wrapper' : '#images',
      'duration' : '210%',
      'animations' :  [
      {
        'selector'    : '.images-byline',
        'translateY'  : '-140%',
        'opacity'     : [0, 4.75]
      } ,{
        'selector'    : '.first-set',
        'translateY'  : '-165%',
        'opacity'     : 0
      } , {
        'selector'    : '.white',
        'translateY'  : '-700%',
        'opacity'     : [0, 8]
      } , {
        'selector'    : '#mediumHomepage',
        'translateY'  : '-155%',
        'opacity'     : [0, 7.35]
      } , {
        'selector'    : '.iphone',
        'translateY'  : '-200%',
        'opacity'     : [0, 8.85]
      } , {
        'selector'    : '.rule',
        'scale'       : [0, 2],
        'translateY'  : '-188%',
        'opacity'     : [0.9, 0]
      } , {
        'selector'    : '.images-byline-2',
        'translateY'  : '-210%',
        'opacity'     : [12.85, -.85]
      } , {
        'selector'    : '#third',
        'translateY'  : '-210%',
        'opacity'     : [4.85, 0]
      } , {
        'selector'    : '#work-homepage',
        'translateY'  : '-190%',
        'opacity'     : [2.85, 0]
      } , {
        'selector'    : '.google',
        'translateY'  : '-247%',
        'opacity'     : [8.85, -.35]
      } 
      ]
    } , {
      'wrapper' : '#links',
      'duration' : '30%',
      'animations' :  [
      {
        'selector'    : '#links',
        'opacity'     : [0, 2],
        'scale'       : [.8, 1]
      } 
      ]
    } , {
      'duration' : '100%',
      'animations' :  []
    }
    ]

    /*  Construction
    -------------------------------------------------- */
    init = function() {
      scrollIntervalID = setInterval(updatePage, 10);
      setupValues();
      $window.resize(throwError)
      if(isTouchDevice) {
        $window.resize(throwError)
      }
    }

    setupValues = function() {
      scrollTop = $window.scrollTop();
      windowHeight = $window.height();
      windowWidth = $window.width();
      convertAllPropsToPx();
      buildPage();
    }

    buildPage = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
        bodyHeight += keyframes[i].duration;
        if($.inArray(keyframes[i].wrapper, wrappers) == -1) {
          wrappers.push(keyframes[i].wrapper);
        }
          for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
              value = keyframes[i].animations[j][key];
              if(key !== 'selector' && value instanceof Array === false) {
                var valueSet = [];
                valueSet.push(getDefaultPropertyValue(key), value);
                value = valueSet;
              }
              keyframes[i].animations[j][key] = value;
            });
          }
        }
        $body.height(bodyHeight);
        $window.scroll(0);
        currentWrapper = wrappers[0];
        $(currentWrapper).show();
      }

      convertAllPropsToPx = function() {
        var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
        keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
          Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
            value = keyframes[i].animations[j][key];
            if(key !== 'selector') {
              if(value instanceof Array) { // if its an array
                for(k=0;k<value.length;k++) { // if value in array is %
                  if(typeof value[k] === "string") {
                    if(key === 'translateY') {
                      value[k] = convertPercentToPx(value[k], 'y');
                    } else {
                      value[k] = convertPercentToPx(value[k], 'x');
                    }
                  }
                } 
              } else {
                if(typeof value === "string") { // if single value is a %
                  if(key === 'translateY') {
                    value = convertPercentToPx(value, 'y');
                  } else {
                    value = convertPercentToPx(value, 'x');
                  }
                }
              }
              keyframes[i].animations[j][key] = value;
            }
          });
}
}
}

getDefaultPropertyValue = function(property) {
  switch (property) {
    case 'translateX':
    return 0;
    case 'translateY':
    return 0;
    case 'scale':
    return 1;
    case 'rotate':
    return 0;
    case 'opacity':
    return 1;
    default:
    return null;
  }
}

    /*  Animation/Scrolling
    -------------------------------------------------- */
    updatePage = function() {
      window.requestAnimationFrame(function() {
        setScrollTops();
        if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
          animateElements();
          setKeyframe();
        }
      });
    }

    setScrollTops = function() {
      scrollTop = $window.scrollTop();
      relativeScrollTop = scrollTop - prevKeyframesDurations;
    }

    animateElements = function() {
      var animation, translateY, translateX, scale, rotate, opacity;
      for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
        animation   = keyframes[currentKeyframe].animations[i];
        translateY  = calcPropValue(animation, 'translateY');
        translateX  = calcPropValue(animation, 'translateX');
        scale       = calcPropValue(animation, 'scale');
        rotate      = calcPropValue(animation, 'rotate');
        opacity     = calcPropValue(animation, 'opacity');

        $(animation.selector).css({
          'transform':    'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
          'opacity' : opacity
        })
      }
    }

    calcPropValue = function(animation, property) {
      var value = animation[property];
      if(value) {
        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
      } else {
        value = getDefaultPropertyValue(property);
      }
      // value = +value.toFixed(2) 
      // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
      return value;
    }

    easeInOutQuad = function (t, b, c, d) {
      //sinusoadial in and out
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    setKeyframe = function() {
      if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
        prevKeyframesDurations += keyframes[currentKeyframe].duration;
        currentKeyframe++;
        showCurrentWrappers();
      } else if(scrollTop < prevKeyframesDurations) {
        currentKeyframe--;
        prevKeyframesDurations -= keyframes[currentKeyframe].duration;
        showCurrentWrappers();
      }
    }

    showCurrentWrappers = function() {
      var i;
      if(keyframes[currentKeyframe].wrapper != currentWrapper) {
        $(currentWrapper).hide();
        $(keyframes[currentKeyframe].wrapper).show();
        currentWrapper = keyframes[currentKeyframe].wrapper;
      }
    }

    /*  Helpers
    -------------------------------------------------- */

    convertPercentToPx = function(value, axis) {
      if(typeof value === "string" && value.match(/%/g)) {
        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
      }
      return value;
    }

    throwError = function() {
      $body.addClass('page-error')  
    }
    


    isTouchDevice = function() {
      return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
    }

    init();

  })
}).call(this);