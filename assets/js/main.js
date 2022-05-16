// ANIMATE NUMBERS
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

$(document).ready(function() {
    $('.header-burger').click(function(e) {
        $('.header-burger,.nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});