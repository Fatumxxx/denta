$(function () {
    // прячем кнопку #back-top
    $(".back-top").hide();

    // появление/затухание кнопки #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });

        // при клике на ссылку плавно поднимаемся вверх
        $('.back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });


    $('.main__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
    });
    new WOW().init();
});