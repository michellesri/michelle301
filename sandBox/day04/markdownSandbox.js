// this function runs on load
$(function(){
  // gets the element with id input. this is on the textarea tag
  var $input = $('#input');
  // get the element with id output
  var $output = $('#output');

// create a function that
  function render() {
    // takes in the value that the user types in textarea
    var inputVal = $input.val();

    // run the value that the user inputs through markdown filter and stores the result in the m variable.
    var m = marked(inputVal);

// put the m variable text into the output box which comes from the element with id of output
    $output.html(m);
    $output.find('pre code').each(function(i, block){
      hljs.highlightBlock(block);
      console.log('i = ' + i);
      // i = the number of times it finds something that needs to be highlighted
      console.log('block = ' + block);
      // the actual code that will get highlighted
    });
  }
  // when someone does the input event inside of the textarea with id of input, call the render function.
  $input.on('input', render);
  //
  $('button').on('click', function(){
    // $('.textBox').append($output.html(m));
    // $('.textBox').append(render());
    $output.html('sao');
    render();
  });
});
