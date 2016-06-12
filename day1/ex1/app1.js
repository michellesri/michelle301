$(function(){
  console.log('printing this first.');
  $(window).load(function() {
    var a = 2;
    var b = 5;
    var c = a + b;
    console.log(c + ' is logged after the entire page loads.');
  });
});
