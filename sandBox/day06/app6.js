
// swap the smallest number and the first number in the array (then do it for second smallest too)

var sort = function(arr, f) {
  console.log(arr);
  // find and put the right elements into spots zero to length -1
  // looping to find each (jth) smallest element.
  for (var j = 0; j < arr.length - 1; j++){
    // looping to find the (jth) smallest element
    var x = arr[j]; //x is jth smallest element
    var idx = j; //idx is the index of the jth smallest element
    for (var i = j + 1; i < arr.length; i++) {
      if (f(arr[i], x)) {
        x = arr[i];
        idx = i;
      }
    }

    console.log('j=' + j);
    console.log('arr[' + idx + '] = ' + x);

    // swap to jth position
    var t = arr[j];
    arr[j] = arr[idx];
    arr[idx] = t;

    console.log(arr);
  }
  console.log('');
  return arr;
};
var smaller = function(a,b) {
  return a < b;
};

var arr = [3,5,7,1,4];
console.log(sort(arr, smaller));

// takes an array and a function that takes two arguments and returns
//true if the first argument is smaller than the second element
