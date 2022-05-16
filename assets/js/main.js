$(document).ready(function() {
    //! BURGER MENU
    $('.header-burger').click(function(e) {
        $('.header-burger,.nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    //! TO TOP
    $(".js-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
        $('.js-top').fadeIn();
        } else {
        $('.js-top').fadeOut();
        }
    });

    //! ANIMATE NUMBERS
    $(window).scroll(function () {
        let $counter = $('.js-number').not(".loaded");
        let $scroll = $(window).scrollTop() + $(window).height();

        for (var i = 0; i < $counter.length; i++) {
            let elem = $($counter[i]);

            if ($scroll >= elem.offset().top) {
                elem.addClass("loaded");

                $({Counter: 0}).animate({Counter: elem.text()}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        elem.text(Math.ceil(this.Counter));
                    }
                });
            }
        }
    });
});