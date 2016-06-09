$(function() {
  //the beginning of a jquery function
  $('ul').before('<p class="notice">Just updated</p>');
  // add a new <p> before the ul
  $('li.hot').prepend('+ ');
  // select li items with clas of 'hot' and add the + symbol before the text of each li item.
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  // create a new list item and put it in the variable
  $('li:last').after($newListItem);
  // select the last list item and add the new list item after it
});
