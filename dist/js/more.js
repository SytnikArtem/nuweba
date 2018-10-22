document.addEventListener('DOMContentLoaded', function(){

  var more = document.querySelector('.post-more-link');

  more.addEventListener('click', function(e) {
    e.preventDefault();
    var items = document.querySelectorAll('.post-item');
    for (var i = 6; i < items.length; i++) {
      items[i].classList.add('active');
    }
  });

});