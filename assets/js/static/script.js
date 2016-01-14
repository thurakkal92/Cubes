$(function() {
    var navLength, i = 0;

    $(this).scrollTop(0);
    jQuery.scrollSpeed(100, 800);
    setTimeout(function() {
        $('#transparent').hide();
    }, 2000);
    $('.transparent .logo').animate({
        opacity: '1'
    }, 2000);

    navLength = $('.cd-slider-nav ul li').length;
    setInterval(function() {
        $($('.cd-slider-nav ul li')[i]).trigger('click');
        i = i + 1;
        if (i == navLength)
            i = 0;
    }, 4000);

    $('.menu').on('click', function() {
        debugger;
        var parent = $(this).parent('.expand-bar');
        parent.addClass('height-adjust');
        parent.find('.expansion').show()
    });
    $('.close').on('click', function() {
        var parent = $(this).parent(),
            expandBar = $(this).parent().parent('.expand-bar')
        parent.find('.expansion').slideDown('show');
        $(this).hide();
        expandBar.removeClass('height-adjust');
    });
});

//scroll smoothening
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
