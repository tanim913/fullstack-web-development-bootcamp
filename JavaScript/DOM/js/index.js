//console.log("hey");

let list = document.getElementsByClassName("container");
let list2 = document.getElementsByTagName("li");
let val = document.querySelector("h1");
let val2 = document.getElementById("x");
//let list3 = document.querySelectorAll();

let lis = Array.from(list2);
lis.forEach(function (item) {
  console.log(item);
});

console.log(list[0]);
list[0].style.background = "grey";

let liOdd = document.querySelectorAll("li: nth-child(odd)");
let liEve = document.querySelectorAll("li: nth-child(even)");

liOdd.forEach(function (item) {
  item.style.background = "black";
  item.style.background = "white";
});
