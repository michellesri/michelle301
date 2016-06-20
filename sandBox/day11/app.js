var $p = $('p');
var $h2 = $('h');
var $h3 = $('h3');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('contact/:contactName', contact);
  page('*', notfound); // catch-all

  page();
}

function index() { $p.text('viewing index (home)'); }
function about() { $p.text('viewing about'); }
function contact(ctx) {
  $p.text('viewing contact ') + (ctx.params.contactName || '');
}
function notfound() {
  $p.html('<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>');
}

setRouteMappings();
