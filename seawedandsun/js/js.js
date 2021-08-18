var header = document.querySelector('.header');
var headerDisplay = document.querySelector('.headerDisplay');
var logo = document.querySelector('.logo');
var menuContainer = document.querySelector('.menuContainer');
document.onscroll = function() {

    if (window.scrollY > 0 && !header.classList.contains('fixed') && !headerDisplay.classList.contains('newHeaderDisplaySize') && !logo.classList.contains('newlogoSize') && !menuContainer.classList.contains('newMenuContainerPosition')) {
        header.classList.add('fixed');
        headerDisplay.classList.add('newHeaderDisplaySize');
        logo.classList.add('newlogoSize');
        menuContainer.classList.add('newMenuContainerPosition');
    }

    if (window.scrollY <= 0 && header.classList.contains('fixed') && headerDisplay.classList.contains('newHeaderDisplaySize') && logo.classList.contains('newlogoSize') && menuContainer.classList.contains('newMenuContainerPosition')) {
        header.classList.remove('fixed');
        headerDisplay.classList.remove('newHeaderDisplaySize');
        logo.classList.remove('newlogoSize');
        menuContainer.classList.remove('newMenuContainerPosition');
    }

};

$(document).ready(function() {
    $('.sl').slick({
        infinite: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        swipeToSlide: true,
        pauseOnHover: true,
        prevArrow: "<img src='../image/gallery-switch-to-left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../image/gallery-switch-to-right.svg' class='next' alt='2'>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});