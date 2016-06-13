var arr = [];

var friends = ['bob','mary','ann'];
var age = ['10', '20', '30'];

var Person = function(name,age){
  this.name = name;
  this.age = age;
};

var michelle = new Person('michelle', 23);
arr.push(michelle);
for (var i = 0; i < friends.length; i++){
  arr.push(new Person(friends[i], age[i]));
}
console.log(arr);

console.log('i am json ' + JSON.stringify(arr));
