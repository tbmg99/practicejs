// Variable and data types

/*
var firstName = 'John';

console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge); 
var job;
console.log(job);
job = 'Teacher';
console.log(job);
//Variable naming rules
 var $3years = 3;
 var johnMark = 'John and Mark';
 /******
  * Variable mutation and data type coercion
  */
 
  
 var firstName = 'John';
 var age = 28;
// Type Coercion
 console.log (firstName + ' ' + age );
 var job, isMarried;
 job = 'Teacher';
 isMarried = false;
 console.log(firstName + ' is a ' + age + ' year old 0' + job + ' .Is he married? ' + isMarried );
// Variable mutation
age = 'twenty eight';
job = 'driver';
 alert(firstName + ' is a ' + age + ' year old 0' + job + ' .Is he married? ' + isMarried );
 var lastName = prompt( 'What is his last name?');
 console.log( firstName + ' ' + lastName);
/**
 * basic operators
 */




 /*
var year, yearJohn , yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//Math Operators
yearJohn= now - ageJohn;
yearMark = now - ageMark;


 console.log(yearJohn);

console.log( now + 2);
console.log ( now*2);
console.log ( now / 10);

// Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);
  
 // Type of Operator
 console.log(typeof johnOlder);
 console.log ( typeof ageJohn);
 console.log( typeof 'Mark is older than John');
 var x;
 console.log (typeof x);
 /***
  * Operator precedence
  */


  
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;
 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;//true
console.log(isFullAge);

//Grouping
 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
 x = y = (3+5) * 4 - 6; //8*4-6// 32 - 6// 26
 console.log(x, y);


 //More Operators
 //x = x * 2; //simple version x *= 2
 x *= 2; 
 console.log(x);
 x += 10;
 console.log(x);
 x-= 3;
 console.log(x);