'use strict'





// function add(x) => {
//     return x+x;
// }
// console.log(add);
// This function represents expressions vs declarations and arrow functions.
// The bottom is a correct form the above is my first attempt without a legend, only issue is i made a = sign and arrow. 


function add(x) {
    return x+x;
}
 
console.log(add(10));





const addition= function(y){
return y+y;
};

console.log(addition(7));


// ARRAYS
const team = ['Jaelin','Mystic','Shawn','Zay','Bry', 'Echo', 'Greg', 'Jedidiah', 'Patrick', 'Retro' ];

const numberEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Task-  Create an array of numbers then create a .map() to create a new array that contains square numbers.

// const square= function(x){
//     numbersEx.forEach(){
//         return numbersEx
//     }
// }


//Solution
// Task: Create an array that contains the squares of each number
const squares = numberEx.map(function(x) {
    return x * x;
});

console.log(squares); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]



//Now lets try doing it by every element x2

const double = numberEx.map(function(y) {
    return y * 2;
});

console.log(double);

//Can also be done as a arrow function
const triple = numberEx.map(v => v*3);

console.log(triple);

