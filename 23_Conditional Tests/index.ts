//Conditional Tests: Write a series of conditional tests.
//Print a statement describing each test and your prediction
//for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



//CREATING FRUITS VARAIBLE

//  TRUE TEST 
// 01 
console.log("HERE IS THE TRUE TEST RESULT");

let fruitname : String = "Grapes";

console.log("Is fruitName == 'Grapes'? I predict true. "); // DOUBLE (==) ONLY CHECK VLAUES
console.log(fruitname == 'Grapes');

//  02
console.log("Is fruitName === 'Grapes'? I predict true. "); //TRIPPLE (===) CHECK WITH DATA TYPES
console.log(fruitname === 'Grapes');

//  03
console.log("Is fruitName != 'GRAPES'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname != 'GRAPES');

//  04
console.log("Is fruitName !== 'GRAPES'? I predict true. "); // (!==) NOT EQUAL check with datatypes
console.log(fruitname !== 'GRAPES');

//  05
console.log("Is fruitName == 'GRAPES'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname.toUpperCase() == 'GRAPES');

//  06
console.log("Is fruitName == 'grapes'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname.toLowerCase() == 'grapes');

// FALSE TEST
console.log("\nHERE IS THE FALSE TEST RESULT");


//01
console.log("Is fruitName == 'GRAPES'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname == 'GRAPES');

//02
console.log("Is fruitName == 'GRAPES'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname.toLowerCase() == 'GRAPES');

//03
console.log("Is fruitName == 'grapes'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname.toUpperCase() == 'grapes');

//04
console.log("Is fruitName === 'GRAPES'? I predict true. "); // (!=) NOT EQUAL 
console.log(fruitname === 'GRAPES');

//05
console.log("Is fruitName !== 'Grapes'? I predict true. "); // (!==) NOT EQUAL check with datatypes
console.log(fruitname !== 'Grapes');

