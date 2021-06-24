const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
    points.reverse();
    document.getElementById("demo1").innerHTML = points;
  }

  function  myFunction3() {
    document.getElementById("demo2").innerHTML = Math.max.apply(null, points);
  }

  function myFunction4() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo3").innerHTML = points;
  }

