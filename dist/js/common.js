$(document).ready(function() {
    $('.header-btn').click(function() {
        $('.mobile-menu-overlay').toggleClass('active');
    });
    $('.load-slider-block').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerPadding: '60px',
        responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
      ]
    });
    $('.slider-top').slick({
      slidesToShow: 1,
      asNavFor: '.slider-main'
    });
    $('.slider-main').slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: '.slider-top',
      adaptiveHeight: true,
      dots: true
    });
});
