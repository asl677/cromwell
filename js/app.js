(function ($, global) {
    'use strict';

    var $doc = $(global.document),
        $body = $('body'),
        $header = $('#header'),
        $skills = $('.list'),
        $main = $('#main'),
        $nav = $('#nav'),
        visible = false;

    function moveNav() {
        $nav.prependTo($body).addClass('visible');
    }

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function doneMoving(e) {
        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');

        visible = !visible;

        if (!visible) {
            $nav[0].scrollTop = 0;
        }
    }

    function toggle(e) {
        preventDefault(e);

        $main.toggleClass('animate');
        $header.toggleClass('animate');
        $skills.toggleClass('animate');
        $body.toggleClass('nav-showing');
    }

    function init() {
        console.log('tits');
        $doc.on('.nav-showing #main', Modernizr.touch ? 'touchstart' : 'mousedown', preventDefault);
        
        $main.on('webkitTransitionEnd transitionend oTransitionEnd', doneMoving);

        $body.one(Modernizr.touch ? 'touchstart' : 'mousedown', moveNav);

        $('#activator').on(Modernizr.touch ? 'touchend' : 'click', toggle);

        global.scrollTo('1px');

        
    }

    global.app = {
        slider: {
            init: init
        }
    };

}($, this));