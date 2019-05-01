// const promise = Promise.resolve('SECRET VALUE');

// promise.then((data)=>{
//     console.log(data);
// });

const promise = Promise.reject('SECRET VALUE');

promise.catch((err) => {
    console.error(err);
})