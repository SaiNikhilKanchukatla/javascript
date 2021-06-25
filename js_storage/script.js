
//localStorage.setItem("localScore",0);

sessionStorage.setItem("sessionScore",0);


document.getElementById('local').innerHTML=localStorage.getItem("localScore");
document.getElementById('session').innerHTML=sessionStorage.getItem("sessionScore");


function localCount(){
    localStorage.setItem("localScore",Number(localStorage.getItem("localScore"))+1);
    document.getElementById('local').innerHTML=localStorage.getItem("localScore");
}

function sessionCount(){
    sessionStorage.setItem("sessionScore",Number(sessionStorage.getItem("sessionScore"))+1);
    document.getElementById('session').innerHTML=sessionStorage.getItem("sessionScore");

}