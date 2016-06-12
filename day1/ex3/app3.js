$('li.list').html(function() {
  return '<b>' + $(this).text() + '</b>';
});

$('li:contains("Five")').text('i am text');

$('li#six').html('akdjjflksfj');
