$(function() {
    var navLength, i = 0;
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
        var parent = $(this).parent('.expand-bar');
        parent.addClass('height-adjust');
        parent.find('.expansion').show();
        parent.find('.close').show();
    });
    $('.close').on('click', function() {
        var parent = $(this).parent(),
            expandBar = $(this).parent().parent('.expand-bar')
        parent.find('.expansion').slideDown('show');
        $(this).hide();
        expandBar.removeClass('height-adjust');
    });

    $('.menu-icon-mob').on('click',function(){
        $('.mobile-menu').addClass('addmobile-style');
    });
    $('.close-mobile').on('click',function(){
        $('.mobile-menu').removeClass('addmobile-style');
    });
});

$(function() {
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 50) {
            $('.cd-header').addClass('scroll-header');
        } else {
            $('.cd-header').removeClass('scroll-header');
        }
    });
});
