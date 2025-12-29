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


// class Deck{
//     constructor(){
//         const suits =['Diamond','Heart','Spade','Club'];
//         const faces =['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
//         const deck = [];
//         suits.forEach(function(suit){
//             faces.forEach(function(face){
//                 deck.push(this.creatCard(suit,face));
//             });
//         });
//         this.deck= deck;
//     }
// }

class Deck{
    constructor(){
        const suits =['Diamond','Heart','Spade','Club'];
        const faces =['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
        const deck = [];
        suits.forEach(suit=>{
            faces.forEach(face=>{
                deck.push(this.createCard(suit,face));
            });
        });
        this.deck = deck;  // Assign to instance property
    }
    createCard(suit, face){  // Define the method
        return { suit, face };
    }
}