$('div').on('mouseover', function(){
  $(this).animate({fontSize: '+=75%'});
});

$('div').on('mouseout', function(){
  $(this).animate({fontSize: '2em'});
});
