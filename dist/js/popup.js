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