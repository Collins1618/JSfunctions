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
    let area = 3.14 * radius**2;
    return area;
};

const area = calcArea(5);
console.log(area);




