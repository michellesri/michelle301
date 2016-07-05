$.getJSON('myData.json')
.done(f);

function f(callbackData){
  p(callBackData);
}

function p(callbackData){
  var arr = callbackData.map(function(ele){
    return $('<div>').text(ele.name);
  });
  $('#blah').append(arr);
}
