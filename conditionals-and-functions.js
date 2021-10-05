//Equals
let equals = 1 === 1;
console.log(equals)
//Greater than
let GreaterThan = 5 > 1;
//Less than
let LessThan = 2 < 10;
//Greater than equals
let GreaterThanEq = 5 >= 5;
//Less than equals
let LessThanEq = 4 <= 9;
//Not equals
let notEq = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let StoreAisLower = storeA < storeB;
    if (StoreAisLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
compareStorePrices(10,5);
compareStorePrices(7,10);

function squareNum (number) {
    return number * number;
}
let squaredNumber = squareNum(10);
console.log(squaredNumber)

function addNumbers (n, m, x) {
    console.log(x)
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b)
    return n + m;
}

//              0 1 2 3 4 5 6
let ourArray = [1,2,3,4,5,6,7];
let newArray = ourArray[4];
console.log(newArray)
let arrLen = ourArray.length
for (let i = 0; i<arrLen; i++) {
    console.log("i is equal to: " + i);
    for (let j = 0; j<10; j++) {
        console.log("j is equal to: " + j);
    }
    //console.log(ourArray[i])
}

let x = 0;
while (x < 10) {
    console.log('Ran')
    x = x + 1;
}