$('div').on('mouseover', function(){
  $(this).animate({fontSize: '+=75%'}, 1000);
});

$('div').on('mouseout', function(){
  $(this).animate({fontSize: '2em'}, 1000);
});
