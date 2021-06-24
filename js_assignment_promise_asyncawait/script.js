
async function getData(uId) {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
            }, 4000);   
    });
    let result = await promise;
    return (result);
}

    

    console.log("start");
    var email = getData("skc").then(value => console.log(value));
    console.log("end");