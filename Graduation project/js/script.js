$(document).ready(function () {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        // fade: true,
    });

    $('.slider2').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },

            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]
    });
    $('.slider3').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]
    });
    $('.slider4').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },

            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]
    });

    $('.slider5').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },

            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]
    });

//------Скролл вверх----------------------------------------------------------------------------

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 700);
        });
    });

});
//------Раскрывающий список---------------------------------------------------------------------------

function dropList(number) {
    document.getElementById("Drop" + number).classList.toggle("show");
};



//------Бургер меню----------------------------------------------------------------------------

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header-bottom__menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

//------Отправка формы алерт----------------------------------------------------------------------------

document.addEventListener('submit', function(){
    alert('Сапасибо за заполнение!');
});

