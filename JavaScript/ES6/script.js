//var let and conts

//var
var a = 7;
a = a + 7;
var a;

//let
let b = 7;
//let b; can not be declated twice

//const

const c = "x";
//c = "j"; const can't be reassigned

//arrow function
let sqr = (n, m) => n * m;

//arrow function is in call back function

num = [1, 2, 3, 4, 5, 6];
var i = 0;
num.forEach((item) => {
  num[i] = --item;
  i++;
});

console.log(num[2]);

let srqnum = num.map((i) => {
  return i * i;
});
console.log(srqnum);
