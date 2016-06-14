var arr = [1,2,3,4];

function sum(a,b) {
  return a + b;
}

var newArr = arr.reduce(sum);
console.log(newArr);
