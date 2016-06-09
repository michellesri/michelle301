$(function() {
  // jquery function
  var listItem, itemStatus, eventType;
  // create three variables

  $('ul').on;
  // target the ul
  'click mouseover',
    // when someone clicks or mouse or mouses over
    ':not(#four)',
    // filter out the elements with id 'four'
    {status: 'important'},
    // pass information into an object literal
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      // put this content (list item) into a variable
      itemStatus = 'Status: ' + e.data.status + '<br />';
      //  this content (itemStatus) into a variable
      eventType = 'Event: ' + e.type;
      // this content (event type) into a variable
      $('#notes').html(listItem + itemStatus + eventType);
      // jquery display all these items. all the variables
    };

});
