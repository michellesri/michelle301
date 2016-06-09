$(function() {
  // jquery function
  var $window = $(window);
  // set the window object to a variable
  var $slideAd = $('#slideAd');
  // get the item in the html with id
  var endZone = $('#footer').offset().top - $window.height() - 500;
  // calculate the height of the endzone and put it in a variable

  $window.on('scroll', function() {
    // scroll event calls a function every time the page is scrolled

    if (endZone < $window.scrollTop()) {
      // if the user's position is is further from the top of the page, then that current position is the start of the end zone.
      $slideAd.animate({ 'right': '0px' }, 250);
      // if the user's position is not at the top, the box slides in from the right. the speed it slides is 250 miliseconds.
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
      // if the user is at the top, then the animation will call stop. and the animation will slide off the right side of the page. this takes 250 miliseconds.
    }

  });

});
