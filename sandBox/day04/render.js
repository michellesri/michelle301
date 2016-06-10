$(function() {
  var tBody    = $('#tBody'); // Input area
  var pHrawOut = $('#pHrawOut'); // Shows raw HTML string; NOT used in the blog app
  var pMarkOut = $('#pMarkOut'); // Shows rendered HTML
  var pJson    = $('#pJson');    // Shows JSON string of object that holds "body"
  var mObj = {}; // Empty object, filled in during JSON string update

  function render() {
    var bodVal = tBody.val(); // Raw article markup
    var m = marked(bodVal); // Convert markup to html

    // Render article preview (rendered HTML)
    pMarkOut.html(m);
    pMarkOut.find('pre code').each(function(i, block) {
      // console.log('i am block ' , block); //tells us that block is referring to the code that is highlighted
      hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
      // this returns the html code block that was highlighted
      // this lets you control when the initialization of highlighting begins. if 'div.code' or something else was put in place of 'pre code', that is the thing that will initialize the highlighting.
      // 6. json, html raw, and html rendered outputs all change when you type a single character because it's still being processed and stringified into a json and then parsed. 7. line 35 is causing this to happen because it's calling the render function which sets values to the body.
    });

    pHrawOut.text(m); // Draw raw HTML

    // Update JSON article
    mObj.articleBody = m;
    // accessing the articleBody key value inside of mObj
    var jsonStr = pJson.text(JSON.stringify(mObj));
    // convert the stuff inside of mObj into JSON so that it is a string and not an object. get the text from that new string and put it into pJson. set all of this to the variable jsonStr.
    // this affects the pJson element in the html and shows the stringified version of the text instead of raw html.
  }

  // Any character change (article editing) updates the live output paragraphs
  tBody.on('input', render);

  render(); // Render once on doc load
});
