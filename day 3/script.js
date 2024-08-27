//functions

function display(name){
    console.log("hello," +name+ "..!");
}

display("user");

function sub(){
    let a=4,b=50;
    console.log(a-b);
}
sub()

//1. fun declaration
function mul(a,b){
    return a*b;
}
    
console.log(mul(3,4))


//2.  fun expression
let multiple=function mul(a,b){
    return a*b;
}


//arrow function
let sum=(a,b)=>{
    console.log(a+b);   
}
sum(5,6)
sum(10,3);


let sum=(a,b)=>{
    return a+b;   
}
console.log(sum(5,6));

//IIFE


(function(){
    console.log("the function used for immediate call")
})();

let a=3;
(function(){
  let a=5;
  console.log("print a value :" +a);
})();
console.log("print a value : " +a);
  

//return Function
function retrn(a,b){
    console.log("retrun fuction");
    return a*b
}
let rtrn_val=retrn(5,2);
console.log(rtrn_val)
console.log(retrn(3,4))

//HOF

function higher_order_function(){
    console.log("calling higer order function");   
    return function _2nd_function(){
        console.log("calling second function");
    }
}
// higher_order_function();
let rtn_stmnt = higher_order_function();
rtn_stmnt()


//callback function


function higher_order_function(callback){
    console.log("calling higer order function");  
    callback
    return function _2nd_function(){
        console.log("calling second function");
    }
}
function call(){
    console.log("callback function")};

let rtn_stmnt = higher_order_function(call());
rtn_stmnt()
 

//if-Statement 


x=3;
y=5;

if(x<y){
    console.log(+ x + " is smaller  than "+ y)
}
else{
    console.log(+x + " is greater than "+y);
    } 


//if-else if-else ladder
let exp = prompt("Enter your work experience in years:");
if(exp <= 0) {
    console.log("You are eligible for an internship.");
} 
else if (exp >= 1 && exp <= 2) {
    console.log("You are eligible as a fresher.");
} 
else if (exp > 2 && exp < 4) {
    console.log("You are eligible for a junior developer position.");
} 
else if (exp >= 4 && exp < 11) {
    console.log("You are eligible for a senior developer position.");
} 
else if (exp >= 11) {
    console.log("You are eligible for a team leader position.");
} 
else {
    console.log("Enter a valid work experience.");
}


//nested if
let age = 26;         // The person's age
let isStudent = false; // Whether the person is a student (true/false)

if (age < 18) {
    if (isStudent) {
        console.log("Education: School Student");
    } else {
        console.log("Category: Minor");
    }
} else if (age >= 18 && age <= 25) {
    if (isStudent) {
        console.log("Education: College Student");
    } else {
        console.log("Category: Young Adult");
    }
} else if (age > 25) {
    if (isStudent) {
        console.log("May be working Proffection");
    } else {
      let prff=  prompt("Enter your Proffesion");
      console.log("proffesion: "+prff )
    }
} else {
    console.log("Please enter a valid age.");
}


//(short hand if else )Ternary Operator 
let age = 21;
let isEligible = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";

console.log(isEligible);


//switch
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);


//do while
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);


//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//for in loop
const person = {
    name: "vishnu",
    age: 20,
    city: "trichy"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


//for of loop
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

//for in loop


//nested for loop
for (let i = 1; i <= 2; i++) {
    console.log("the outer loop" +i)
    for (let j = 1; j <= 5; j++) {
       console.log("  the inner loop" +j)
    }
}










