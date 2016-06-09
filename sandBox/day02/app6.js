var i = 0;
$('button').on('click', function(){
  i++;
  $('div').last().append('<div class="gen">generation ' + i + '</div>');
});

$('#clear').on('click', function(){
  $('.gen').remove();

});
