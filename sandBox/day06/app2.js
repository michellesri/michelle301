var arr = [1,2,3,4];

function even(x) {
  if (x % 2 == 0){
    return x;
  }
}

var newArr = arr.filter(even);
console.log(newArr);
