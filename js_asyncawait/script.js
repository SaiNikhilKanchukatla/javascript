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


// async function init(){
//     await createPost({ title:'Post 3', body:'post three'});
//     getPosts();
// }

// init();



async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(data);

}

fetchUsers();