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
});
document.addEventListener('DOMContentLoaded', function(){

  var hamburger = document.querySelector('.load-btn');
  var menu = document.querySelector('.popup-container');
  var popup = document.querySelector('.popup');

  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('active');
    popup.classList.toggle('active');
  };

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_menu = target == menu || menu.contains(target);
    var its_hamburger = target == hamburger;
    var menu_is_active = menu.classList.contains('active');
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }
  });
});