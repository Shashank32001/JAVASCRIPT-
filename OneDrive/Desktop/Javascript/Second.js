// Conditional Statements

let a = 9;
let ans ;
if(a % 2 == 0){
   ans= "Even"
}else{
   console.log (a,"Odd")
}

let age=25;
let range;

if(age <= 18){
    range ="junior";
}else if(age >= 18){
    range = "middle";
}
else {
    range = "older";
}
console.log (range);

let Age=15;
let result= Age >= 18 ? "adults" : "not adults";

console.log (result);

//  let num = prompt("Enter Number:");
//  let answer;

// if(num % 5 == 0){
//     answer = "Multiple of 5"}
//     else{
//         answer = "Not Multiple of 5"
//     }
//     console.log (answer)

let score = prompt("Marks")
let grade;

if(score >= 90 && score <=100){
    grade = "A";
}
else if(score >= 70 && score <=89){
    grade = "B";
}
else if(score >=60 && score <=69 )   {
    grade = "C"
}
else if(score >=50 && score <=59   ) {
    grade = "D"
}
else {
  grade=  "F"
}
console.log ( "ur grade",grade)