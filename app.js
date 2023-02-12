// ------------------------------------------------------------------------------
//                              Chapter 1

                             
//   1.	Write a script to greet your website visitor using JS alert box.


alert("Welcome to our website Sir !!!")


// 2.	Write a script to display following message on your web page:


alert("Error! please enter a valid password")



// 3.	Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS Land...\n Happy Coding!")


// 5.	Generate the following message through browser’s developer console:

alert("Hello i can run this js through my web browser console")


// 4.	Write a script to display following messages in sequence:

alert("Welcome to JS Land...\n")
alert("Happy Coding!\n Prevent this page from creating additional dialogues")



// ------------------------------------------------------------------------------

                            // CHAPTER 2
                            
                            
// 1. Declare a variable called username

var username;



// 2. Declare a variable called myName & assign to it a string 
// that represents your Full Name

var myName="asfahan naveed";


// 3. Write a script to 
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box 

var message;
message="hello world"
alert(message);


// 4. Write a script to save student’s bio data in JS variables 
// and show the data in alert boxes. Example

var asname="asfahan"
var age=20
var Uni="Bahria"
var department="Software Engineeing";

alert(asname);
alert(age);
alert(Uni);
alert(department);


// Write a script to display the following alert using one JS 
// variable:

var sname="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(sname);


// ------------------------------------------------------------------------------

                            // CHAPTER 3

//   1.  Declare a variable called age & assign to it your age. Show your age in an alert box

var age=20;
alert("I am  "+age+" years old")


// 2. Declare & initialize a variable to keep track of how many 
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You 
// have visited this site N times”
                            
var i=3;
alert("You visited this site "+i+ " times");


// Declare a variable called birthYear & assign to it your 
// birth year. Show the following message in your browser:

	var birth_year=2003
	console.log("My Birth year is "+birth_year)


    // 2.	A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”
	
	var vname=prompt("Enter your name:")
	var ptitle=prompt("Enter product title:")
	var quan=prompt("Enter the quantity")
	console.log(vname+" has ordered "+quan+" "+ptitle+"(s) on XYZ Clothing store")



// ------------------------------------------------------------------------------

                            // CHAPTER 4
  // 1. Declare 3 variables in one statement

  var a1,a2,a3;


//  2. Declare 5 legal & 5 illegal variable names

var myname = "asfahan";
var myName = "asfahan";
var my_name = "asfahan";
var _my_name = "asfahan";
var $my_name = "asfahan";

// var @myname = "asf";
// var 123myName = "asf";
// var my name = "asf";
// var month&year = "asf";
// var birth-year = "2003";



// 3. Display this in your browser
// a. A heading stating “Rules for naming JS variables”
// b. Variable names can only contain ______, ______, 
// ______ and ______. 
// For example $my_1stVariable
// c. Variables must begin with a ______, ______ or 
// _____. For example $name, _name or name
// d. Variable names are case _________
// e. Variable names should not be JS _________

console.log("\t\"Rules for naming JS variables\"")
console.log("\nVariable names can only contain ______, ______, \n  ______ and ______.\nFor example $my_1stVariable")
console.log("\nVariable names must begin with a ______, ______ or \n ______ .For example $name ,_name or name")
console.log("\nVariable names are case _________")
console.log("\nVariable names should not be JS _________")



// ------------------------------------------------------------------------------

                            // CHAPTER 5-7
 // 1. Write a program that take two numbers & add them in a new 
// variable. Show the result in your browser.   

var n1=prompt("enter number 1")
var n2=prompt("enter number 2")
var sum =n1+n2;
alert("sum of"+n1+ "and " +n2+ "is "+ sum)


 // 2. Write a program that take two numbers & add, sub ,mul and div them in a new 
// variable. Show the result in your browser. 

var n1=prompt("enter number 1")
var n2=prompt("enter number 2")
var sub =n1-n2;
alert("sub of"+n1+ "and " +n2+ "is "+ sub)


var n1=prompt("enter number 1")
var n2=prompt("enter number 2")
var mul =n1*n2;
alert("multilpy of"+n1+ "and " +n2+ "is "+ mul)


var n1=prompt("enter number 1")
var n2=prompt("enter number 2")
var div =n1/n2;
alert("division of"+n1+ "and " +n2+ "is "+ div)


// 5. Write a script to display multiplication table of any number in 
// your browser. E.g.

console.log("table of 4 is")
var t=4;
    for(var i=0;i<10;i++){
        console.log(t+" * "+(i+1)+" = "+(t*(i+1)))
    }



//     4. Cost of one movie ticket is 600 PKR. Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie. Example output:

var m=600;
var cost=600*5;
console.log("total cost to buy 5 tickets to a movie is "+cost)



// 5. The Age Calculator: Forgot how old someone is? Calculate 
// it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN 
// years old”.

var currentyear=2022;
var birthyear=2003;

sub=currentyear-birthyear;
console.log("there are either "+sub +"or "+sub+1+" yaars old" )




// ------------------------------------------------------------------------------

                            // CHAPTER 8-11

  // 1. Write a program that takes input a name from user & greet the 
   // user like this:

var n=promt("enter your name")
alert(n)
alert("Hi!,"+n)


// 2. Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by 
// default.

var t=prompt("input a number")
if(t===""){
    for(var i=0;i<10;i++){
        console.log("5 * "+(i+1)+" = "+(5*(i+1)))
    }
}
else{
    for(var i=0;i<10;i++){
        console.log(t+" * "+(i+1)+" = "+(t*(i+1)))
    }
}


// 3. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// of lights”

var city=promt("Enter city name :")

if(city=="karachi"||city=="Karachi"||city=="KARACHI")
{
    console.log("welcome to city of lights ")
}



// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is 
// female, give the message: Good Morning Ma’am.

var g=promt("Write your gender:")
if(g=="male"){
    console.log("Good morning Sir.")
}
else if(g=="female"){
    console.log("Good morning Mam.")
}
else{
    console.log("Wrong input")
}



// 6. Write a program to take input max age & current age from 
// user. If the current age is less than or equal to max age, show 
// USER	INPUt
// the message “You are welcome

var c=prompt("enter current age")
var m=prompt("enter max age")

if(c<=m){
    console.log("You are welcome")
}



// ------------------------------------------------------------------------------

                            // CHAPTER 12-13


 // 1. Write a program to check whether the given input number is  divisible by 3 or else show a message “Number is not divisible by 3”

var n=prompt("enter any num");
var t=n%3
if(t==0){
        console.log("is divisible by 3");
    }
    else{
    console.log("not divisible by 3");
        
}


// 2. Write a program that checks whether the given input is an even 
// number or an odd number.

var n=prompt("enter any num");
var t=n%2
switch(t){
    case 0:
        console.log("is even");
        break;
    case 1:
    console.log("is odd");
        break;
}



// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young".

var g=promt("Write number:")
if(g>18){
    console.log("Old enough")
}
else if(g<18){
    console.log("to young")
}
else{
    console.log("Wrong input")
}



// 5. Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”.

var n=prompt("enter any num");
var t=n%3
switch(t){
    case 0:
        console.log("is divisible");
        break;
    case 1:
    console.log("not divisible");
        break;
}



// 14. Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero

var g=promt("Write number:")
if(g>0){
    console.log("Number is positive")
}
else if(g>0){
    console.log("Number is negative")
}
else if (g==0){
    console.log("Number is zero")
}
else{
    console.log("wrong input")
}
