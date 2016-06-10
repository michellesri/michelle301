$(function(){
  var $textB = $('#textB');
  var $pMarkOut = $('#pMarkOut');

  function render() {
    var textVal = $textB.val();
    var m = marked(textVal);

    $pMarkOut.html(m);
    $pMarkOut.find('pre code').each(function(i, block){
      hljs.highlightBlock(block);
    });
  }
  $textB.on('input', render);
});
