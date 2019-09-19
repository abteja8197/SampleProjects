const posts = [
    {title: 'first', body: 'this is first'},
    {title: 'second', body: 'this is second'}
];
var status = true;
function getPosts() {
    setTimeout(() =>{
        let output ='';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title}</li>`
        });
        console.log('Posts array', output);
    },1000);
}

function addPost(post) {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if(status){
                resolve();
            } else {
                reject('Something went Wrong!!');
            }
        },2000);
    }); 
}

//promise
addPost({title: 'third', body: 'this is third'})
.then(getPosts)
.catch(err => console.log(err))



//promise.all
const promise1 = Promise.resolve('forth');
const promise2 =100;
const promise3= new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values))
.catch(err => console.log(err));



//async await
async function init() {
    await createPost({
        title: 'next',
        body: 'the next post'
    });
    getPosts();
}
init();



//async await with fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json();
    console.log(data);
}
fetchUsers();