$(function() {
  // creating a jquery function
  $('li').on('click', function() {
    // target list item. when someone clicks on list item
    $(this).animate({
      // animate the list item
      opacity: 0.0,
      // make the opacity 0.0
      paddingLeft: '+=80'
      // move the object to the right
    }, 500, function() {
      // the speed of moving the object is 500 miliseconds
      $(this).remove();
      // after that, move the item
    });
  });
});
