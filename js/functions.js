
$('document').ready(function(){

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


});
