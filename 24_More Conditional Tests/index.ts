//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//TRUE TESTS
console.log("\n\nTRUE TESTS:");

//• Tests for equality and inequality with strings
console.log("Equality test with string: ", "Apple" === "Apple");
console.log("Inequality test with string: ",("Apple" as string) != "Orange");

//• Tests using the lower case function
console.log("The lower case test :" , "ASFAA".toLowerCase() === "asfaa");

//• Numerical tests involving equality and inequality, greater than and less than,
console.log("Equality test with number :", 25 === 25);
console.log("Inequality test with number :" , (65 as number ) !== 25);

// greater than or equal to, and less than or equal to
console.log("Greater than test :" , 10 > 5);
console.log("Greater than or equal to :", (15 as number) >= 15 );

console.log("Less than test :" , 12 < 15);
console.log("Less than or equal to :", 15 <= 15);

//• Tests using "and" and "or" operators
console.log("Test using and :" , 5 == 5 && 5 > 2 );
console.log("Test using or :", (5 as number) !== 6 || (5 as number) === 6);

//• Test whether an item is in a array
const fruit :string [] = ['Mango','Banana','Apple'];
console.log('Test "Banana" is in the array :', fruit.includes("Banana")); //determine whether an array includes certain element,return true & false

//• Test whether an item is not in a array
const vegs :string [] = ['tomato','potato','lady finger'];
console.log('Test "ginger" is not in the array :', !fruit.includes("ginger")); // !array.include => is not in the array


//FALSE RESULT 

console.log("\n\nFALSE RESULT:");

//• Tests for equality and inequality with strings
console.log("Equality test with string: ", ("Apple" as string) === "Mango");
console.log("Inequality test with string: ",("Apple" as string) != "Apple");

//• Tests using the lower case function
console.log("The lower case test :" , "ASFAA".toLowerCase() === "ASFAA");

//• Numerical tests involving equality and inequality, greater than and less than,
console.log("Equality test with number :", (25 as number) === 5);
console.log("Inequality test with number :" , (65 as number ) !== 65);

// greater than or equal to, and less than or equal to
console.log("Greater than test :" , 10 > 15);
console.log("Greater than or equal to :", (15 as number) >= 10 );

console.log("Less than test :" , 12 < 10);
console.log("Less than or equal to :", 15 <= 12);

//• Tests using "and" and "or" operators
console.log("Test using and :" , 5 !== 5 && 5 < 2 );
console.log("Test using or :", (5 as number) !== 5 || (5 as number) === 8);

//• Test whether an item is in a array
const fruit1 :string [] = ['Mango','Banana','Apple'];
console.log('Test "Banana" is in the array :', !fruit.includes("Banana")); //determine whether an array includes certain element,return true & false

//• Test whether an item is not in a array
const vegs1 :string [] = ['tomato','potato','lady finger'];
console.log('Test "ginger" is not in the array :', fruit.includes("ginger")); // !array.include => is not in the array