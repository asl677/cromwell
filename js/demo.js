    var addEvent = function addEvent(element, eventName, func) {
        if (element.addEventListener) {
            return element.addEventListener(eventName, func, false);
        }
        else if (element.attachEvent) {
            return element.attachEvent("on" + eventName, func);
        }
    };

//addEvent(document.getElementById('open-left'), 'click', function () {
    //snapper.open('left');
//});

    /* Prevent Safari opening links when viewing as a Mobile App */
    (function (a, b, c) {
        if (c in b && b[c]) {
            var d, e = a.location,
            f = /^(a|html)$/i;
            a.addEventListener("click", function (a) {
                d = a.target;
                while (!f.test(d.nodeName)) d = d.parentNode;
                "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
            }, !1)
        }
    })(document, window.navigator, "standalone");


   /*  window.rectifyLayout = function () {

        var win_width       = $('.portfolio').width(),
          $images           = $('.portfolio .imgcontainer'),
          $imageContainers  = $('.portfolio > li'),
          numColumns        = 6;


        if (win_width < 900) numColumns = 2
        else if (win_width < 800) numColumns = 3
        else if (win_width < 1000) numColumns = 3
        else if (win_width < 1600) numColumns = 4
        else if (win_width < 2200) numColumns = 5
        else if (win_width < 2800) numColumns = 6
              
        //new_width = ((win_width-90)  - (numColumns * 50.25) ) / ( numColumns );
        new_width = ((win_width) / ( numColumns ));
        if(numColumns == 1){
          new_width = '100%';
        }
   
    console.log(new_width);
    $images.css('width',new_width);
     //$images.css('height',new_width);
     $imageContainers.css({'width':new_width});

    

}; */

// Animate about me section

$('#about-btn').on('click', function(e) {
  $(this).text($(this).text() == 'about' ? 'close' : 'about');
  $(this).toggleClass('inactive');
  $('.about-me').toggleClass("open-intro");
    e.preventDefault();
  });


// Animate Menu

$('#open-left').html("&#x22EE;");



$('#main_ftr').on('hover', function(e) {
  $('.blackness').toggleClass("show-map");
    //e.preventDefault();
  });

