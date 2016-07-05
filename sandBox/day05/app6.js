$(function(){
  $('button').on('click', f);
});

function f(callbackData){
  $.getJSON('myData.json')
  .done(p);
}

function p(callbackData){
  var arr = callbackData.map(function(ele){
    return $('<div>').text(ele.name);
  });
  $('#blah').append(arr);
}
