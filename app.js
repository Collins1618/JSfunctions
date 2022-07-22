// greet();
// greet();

// //speak(); wont work because javascript doesn't hoist function expressions


// //function declaration
// //function declaration are hoisted
// function greet(){
//     console.log("Hello there");
// }

// //function expression, we give the function a name because
// //its name is now the variable name or in this case the const name
// //function expressions are not hoistec
// //asign some default value to th function
// const speak = function(name = 'Luigi', time = 'night'){
//     console.log(`Good ${time} ${name}`);
// };

// //calling/invoking the function
// // greet();
// // greet();
// speak();


//Returning values
const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);

//Arrow functions
//Your can remove the parantheses if there is only one parameter
// const round = radius => {
//     return 3.14 * radius**2
// };

//if there is only one return statement, you can remove the return
//keyworld and the block curly braces likes so
const round = radius => 3.14 * radius**2

const value = round(5);
console.log(value);

const greet = () => 'hello, world';
const greetings = greet();
console.log(greetings);

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));