console.log(" Hello World "); // syntax to print in JS
window.alert("welcome to the page | click OK to continue"); // For pop-up

// JS operators

variable1 = 5;
variable2 = 9;
variable3 =12;
console.log(variable1); // answer = 5
console.log("variable1"); //answer = variable1
console.log(variable2); // answer = 9
console.log("variable2"); // answer = variable2 (whatever we write in double quotes the answer will be inside the double quotes)
console.log(variable3); // answer = 12
console.log("variable3"); // answer = variable3

myNameTejasri = 28; // camelcase 1st letter in 1sr word is SMALL 2nd letter in 2nd word is BIG 3rd letter in 3rd word is BIG
demo = 12; // improper way
demo = 24; // improper way
console.log(demo); // answer = 24 (12 is replaced with 24)

let project = 10; // proper way to use for variable is LET / VAR (old keyword)
let project1 = 20; // variable name should not be repeated for LET
const project3 = 30; // if we use CONST data cannot be reassigned / changed
console.log(project3); // answer = 30

// arithematic operators + - * / % ** -- ++

let data1 = 20;
let data2 = 10;
console.log(data1 + data2); // answer = 30
console.log(data1 - data2); // answer = 10
console.log(data1 * data2); // answer = 200
console.log(data1 / data2); // answer = 2
console.log(data1 % data2); // answer = 0 

console.log(++data1); // answer = 21 pre increament +1
console.log(--data2); // answer = 9 pre decreament -1

let data3 = 30;
let data4 = 40;
console.log(data3++); // answer = 30 post increament same data
console.log(data4--); // answer = 40 post decreament same data

let data5 = 50;
data5++ ; // 50+1
console.log(data5); // answer = 51

let data6 = 60;
data6-- ; // 60-1
console.log(data6); // answer = 59

let data7 = 2;
console.log(data7 ** 3); // answer = 8 --> 2^3

// Assignment operators = +- -+ *= /= %= **=

let number1 = 4;
number1 += 2; //number1 = number1 + 2
console.log(number1); // answer = 6

let number2 = 4;
number2 -= 2; //number2 = number2 - 2
console.log(number2); // answer = 2

let number3 = 4;
number3 *=  2; //number3 = number3 * 2
console.log(number3); // answer = 8

let number4 = 4;
number4 /=  2; //number4 = number4 / 2
console.log(number4); // answer = 2

let number5 = 4;
number5 **=  2; //number5 = number5 ** 2
console.log(number5); // answer = 16

// Comparision operator == === != < > <= >=

let point1 = 4;
console.log(point1 == 5); // answer = false 4 is not equal to 5

let point2 = 4;
console.log(point2 != 5); // answer = True 4 is not equal to 5

let point3 = 4;
console.log(point3 < 5); // answer = true 4 is less than 5

let point4 = 4;
console.log(point4 > 5); // answer = false 4 is not greater than 5

let point5 = 4;
console.log(point5 <= 5); // answer = true 4 is less than or equal to 5

let point6 = 4;
console.log(point6 >= 5); // answer = false 4 is not greater than or equal to 5

// all numbers 1,2,3.... = integers
// all decimals 0.5, 2.2... = float
// all names 'tejasri', 'harish', "ishan", "9"= string
// true or false = boolean

let name1 = 4;
console.log(name1); // answer = 4 integer

let name2 = 4.5;
console.log(name2); // answer = 4.5 float

let name3 = "Tejasri" ;
console.log(name3); // answer = Tejasri string

let name4 = true;
console.log(name4); // answer = true boolean

let name5 = 4; // integer
let name6 = "4"; // string
console.log(name5 === name6); // answer = false

// logical operators

// a   b   r (and)  a  b  r (or)   a       r (not)
// +   +   +        +  +  +        false   true  
// +   -   -        +  -  +        true    false
// -   +   -        -  +  +        
// -   -   -        -  -  -       

let logic1 = 5;
let logic2 = 4;
console.log(logic1 < 10  && logic2 < 5); // answer = true

// if else

let class1 = 5;
if(class1 < 10) // true
{
    console.log("hello world");
}

let class2 = 5;
if(class2 == 10) // false
{
    console.log("hello world");
}
else
{
    console.log("there is an error in the code");
}

// else if

let class3 = 5;
if(class3 == 2) // false
{
    console.log("hello world");
}
else if (class3 == 5) // true
{
    console.log("hello tejasri");
}
else
{
    console.log("there is an error in the code");
}

// loops

let pro;
for(pro = 0; pro < 11; pro ++) // to get repeated lines
{
console.log("hello tejasri");
}

let pro1;
for(pro1 = 20; pro1 > 11; pro1 --) // to get repeated lines
{
console.log("hello tejasri");
}