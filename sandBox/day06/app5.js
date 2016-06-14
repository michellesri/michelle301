
var library = [];
var index = {};

var addBook = function(title,author,count) {
  library.push ({
    title: title,
    author: author,
    count: count
  });
  index[title] = library.length - 1;
};

addBook('Harry Potter', 'JK Rowling', 50000);
addBook('HP 2', 'JK Rowling', 6000);
addBook('Ender\'s Game', 'Orson Scott Card', 300);
addBook('Great Gatsby', 'Fitzgerald', 400);

var nameMatch = function(book) {
  if (book.author === 'JK Rowling'){
    return true;
  }
  return false;
};

var extractPages = function(obj) {
  return obj.count;
};

var sum = function(a,b) {
  return a + b;
};

var reduce = function(arr, f) {
  var result = f(arr[0], arr[1]);
  for (var i = 2; i < arr.length; i++) {
    result = f(result, arr[i]);
  }
  return result;
};

var map = function(arr, f) {
  var q = [];
  for (var i = 0; i < arr.length; i++) {
    q.push(f(arr[i]));
  }
  return q;
};

var filter = function(arr, f) {
  var keptArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      keptArr.push(arr[i]);
    }
  }
  return keptArr;
};

console.log(reduce(map(filter(library, nameMatch), extractPages), sum));
