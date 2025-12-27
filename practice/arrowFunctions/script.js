// var sayHello= function(name){
//     console.log('Hello'+ name);
// }

// sayHello('Mahmoud');



// const sayHello=(name)=>{
//     console.log(`Hello ${name}`);
// }

// sayHello('Mahmoud');



const sayHello=(name)=>console.log(`Hello ${name}`);
sayHello('Mahmoud');

// ...................................

var square=function(n){
    return n*n;
}


const square= n => n*n;

// ..............
const returnObjLonghand=()=>{
    return{
        firstName:'John',
        lastName: 'Wick'
    }
}


// const returnObj=()=>{firstName:'John',lastName:'Wick'};   this dont work without parenthesis
const returnObj=()=>({firstName:'John',lastName:'Wick'});