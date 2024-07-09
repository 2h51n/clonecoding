document.addEventListener("DOMContentLoaded", function() {
    var headerNotice = document.getElementById('header-notice');
    var startX;
    var scrollLeft;

    headerNotice.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      scrollLeft = headerNotice.scrollLeft;
    });

    headerNotice.addEventListener('touchmove', function(e) {
      var x = e.touches[0].clientX;
      var distance = (x - startX) * 1.5;
      headerNotice.scrollLeft = scrollLeft - distance;
    });

    headerNotice.addEventListener('touchend', function(e) {
      // Do something on touch end if needed
    });
  });