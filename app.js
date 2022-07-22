greet();
greet();

//speak(); wont work because javascript doesn't hoist function expressions


//function declaration
//function declaration are hoisted
function greet(){
    console.log("Hello there");
}

//function expression, we give the function a name because
//its name is now the variable name or in this case the const name
//function expressions are not hoistec
const speak = function(name, time){
    console.log(`Good ${time} ${name}`);
};

//calling/invoking the function
// greet();
// greet();
speak("Mario", 'morning');




