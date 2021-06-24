var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

document.getElementById("demo").innerHTML = newarray;

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

document.getElementById("demo2").innerHTML = ages.filter(checkAdult);

var numbers = [175, 50, 25];

document.getElementById("demo3").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}