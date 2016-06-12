$(function() {
  $('li#one').remove();
  $('li:contains("Three")').append(' cats');
  $('<i>italicized stuff</i>').appendTo('li#six');
});
