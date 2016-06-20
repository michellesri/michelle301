var $p = $('p');
var $h2 = $('h2');
var $h3 = $('h3');
var $handleAppend = $('#handleAppend');

function initIndexPage(){
  Article.all.forEach(function(a){
    $handleAppend.append(a.toMark());
    $handleAppend.find('pre code').each(function(i, block){
      hljs.highlightBlock(block);
    });
  });
};

function Article(opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.pubYear = opts.pubYear;
  this.body = opts.body;
}

Article.all = [];

Article.prototype.toMark = function(){
  var template = Handlebars.compile($('#handle-template').text());

  this.body = marked(this.body);
  return template(this);
};

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);

  page('contact', contact);
  page('contact/:contactName', contact);
  page('article', article);

  page('*', notfound); // catch-all

  page();
}

function index() {
  $p.text('viewing index (home)');
  $h2.text('h twooooo');
}
function about() {
  $p.text('viewing about');
  $h3.text('h three');
}
function contact(ctx) {
  $p.text('viewing contact ') + (ctx.params.contactName || '');
}
function article(){
  $p.text('viewing index (article)');
  $h2.text('h twooooo on article page');
}
function notfound() {
  $p.html('<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>');
  div.hide();
}

setRouteMappings();

// create a constructor object down here
// not sure if using async coding here correctly
var fetchAll = function(){
  $.getJSON('article.json')
  .done(function(rawData){
    Article.all = rawData.map(function(ele){
      return new Article(ele);
    });
    initIndexPage();
    console.log('.done is running');
  })
  .fail(function(){
    console.log('failed to get the data from json');
  })
  .always(function(){
    console.log('at the very least, it is trying to get the json');
  });
};

fetchAll();

hljs.initHighlightingOnLoad();
