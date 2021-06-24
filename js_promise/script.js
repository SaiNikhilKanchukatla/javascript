const posts = [
    {
        title:'Post 1',
        body:'post one'
    },
    {
        title:'Post 2',
        body:'post two' 
    }
]
function getPosts(){

    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}



function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(error){
                reject("ERROR");
            }
            else{
                resolve();
            }
        },2000);
    });
}


// createPost({
//     title:'Post 3',
//     body:'post three' 
// }).then(getPosts)
// .catch(err=>console.log(err));


const promise1= Promise.resolve("Hello world");
const promise2= 10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"GoodBye");});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
