
// Task 1
var greetings=function(){
    document.getElementById('demo').innerHTML="Hello";
}
myFunction(greetings);

function myFunction(greetings){
    greetings();
}

//Task 2

function answer(){
    var firstName=document.getElementById('firstName').value;
    var lastName=document.getElementById("lastName").value;
    firstName=firstName.trim();
    lastName=lastName.trim();
    showAnswer(firstName,lastName);

}

var showAnswer=(firstName,lastName)=>{
    alert(firstName.charAt(0)+lastName.charAt(0));

}
