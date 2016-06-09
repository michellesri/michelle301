$('p').on('mouseover', function(){
  $(this).animate({
    width: '200px',
    marginLeft: '9px',
    letterSpacing: '100px'
  });
});

$('p').on('mouseout', function(){
  $(this).animate({
    width: '0px',
    marginLeft: '0px',
    letterSpacing: '0px'
  });
});
