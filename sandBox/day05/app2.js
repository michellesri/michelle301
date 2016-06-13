var x = {
  name: 'michelle',
  age: 23,
  blah: function(a,b){
    return a + b;

  }
};

// x's methods do not show up when they are stringified.
var jX = JSON.stringify(x);

console.log('i am a string' + jX);
var y = jX.replace('michelle', 'elle');

var yback = JSON.parse(y);
console.log(yback);
