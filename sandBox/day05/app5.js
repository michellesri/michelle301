$.ajax(
  {
    url: 'myData.json',
    type: 'GET',
    dataType: 'json'
  })
.done(f);

function f(callbackData){
  $('button').on('click', function(){
    p(callBackData);
  });
}

function p(callbackData){
  var arr = callbackData.map(function(ele){
    return $('<div>').text(ele.name);
  });
  $('#blah').append(arr);
}
