const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Watermelon");
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo3").innerHTML = fruits;
fruits.shift()
document.getElementById("demo4").innerHTML = fruits;

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo5").innerHTML = myChildren;

myChildren.sort();

document.getElementById("demo6").innerHTML = myChildren;

document.getElementById("demo7").innerHTML = myChildren.length;

myChildren[0]="zemoso";

document.getElementById("demo8").innerHTML = myChildren;

document.getElementById("demo9").innerHTML = fruits.slice(2);
document.getElementById("demo10").innerHTML = fruits.slice(1,3);
