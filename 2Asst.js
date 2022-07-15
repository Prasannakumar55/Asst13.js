// 1 .
function func (Name) {
    alert('Hello World' + Name);
}
function func2 (callback) {
    var Name = prompt('please enter your name.');
    callback(Name);
}
 func2(func);

// 2 .
 setTimeout (() => {
    x = 1;
    console.log(x);
 }, 1000)

 setTimeout (() => {
    x = 2;
    console.log(x);
 }, 2000)

 setTimeout (() => {
    x = 3;
    console.log(x);
 }, 3000)

 setTimeout (() => {
    x = 4;
    console.log(x);
 }, 4000)

 setTimeout (() => {
    x = 5;
    console.log(x);
 }, 5000)

 setTimeout (() => {
    x = 6;
    console.log(x);
 }, 6000)

 setTimeout (() => {
    x = 7;
    console.log(x);
 }, 7000)

 // 3 .
 const promise = new Promise((success,failure) => {
    setTimeout (() => {
        x = 1;
        success(console.log(x));
    }, 1000)
 }).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 2;
        success(console.log(x));
    }, 2000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 3;
        success(console.log(x));
    }, 3000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 4;
        success(console.log(x));
    }, 3000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 4;
        success(console.log(x));
    }, 4000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 5;
        success(console.log(x));
    }, 5000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 6;
        success(console.log(x));
    }, 6000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 7;
        success(console.log(x));
    }, 7000)
 }) )