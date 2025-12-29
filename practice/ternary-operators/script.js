let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance){
        return `cannot afford! You are $${itemPrice - accountBalance} short`;
    } else {
        return "can afford!";
    }
};


//  ternary Statement 
let canAfford  = (itemPrice, accountBalance) =>{
    return itemPrice > accountBalance ? `cannot afford! you are $${itemPrice - accountBalance} short`: "can afford";
};

let myBankAccountBalance = 1000;
const drone =  1001;

let droneOnSale = drone -drone *0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));