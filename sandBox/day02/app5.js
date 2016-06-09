var i = 0;
$('button').on('click', function(){
  i++;
  $('div').last().append('<div>generation ' + i + '</div>');
});
