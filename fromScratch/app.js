//
// //TODO:
// //this is looping through the images and putting on the page
// // currently, it's not working correctly.
// $(document).ready(function(){
//   for (var i = 0; i < 50; i++) {
//     $('#carouselDiv').append('<div class=\'item active\'> <img src=\'img/portfolio/' + i + '.jpg\' alt=\'Chania\' width=\'460\' height=\'345\'></div>');
//   }
//   console.log('LOADINGGGGG');
// });
// //
// // $(function(){
// //   for (var i = 0; i < 50; i++) {
// //     $('#carouselDiv').append('<div class=\'item active\'> <img src=\'img/portfolio/' + i + '.jpg\' alt=\'Chania\' width=\'460\' height=\'345\'></div>');
// //   }
// //   console.log('LOADINGGGGG');
// // })
//
// <div>
//   <h1>Portfolio</h1>
//
//   <a id='modalBtnDiv' href="#openModal"><img src='img/50.jpg' id='firstModalPic' alt='click'>
//   </a>
// </div>
//
// <!-- the content that appears in the modal is below -->
//   <div id="openModal" class="modalDialog">
//       <div>	<a href="#close" title="Close" class="close">X</a>dskjfldfjldkf
//       </div>
//   </div>

// this is broken because when you call it twice, it's appending weirdly
// use handlebars instead.
// use article.js
function createModal() {
  var $modalDiv = $('.modalDiv').clone();
  $('.container').append($($modalDiv));
}

createModal();

// pass a screenshot and gitub link
var github = new modalContent();

// append conetnt into dialog box
$('#appendHere').append($('<p>i am new content</p>'));
