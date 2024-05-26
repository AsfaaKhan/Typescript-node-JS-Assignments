//Intentional Error: If you haven’t received an array index error in one of your programs yet,
//try to make one happen. Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
var personNames = ['Asfaa', 'Mahnoor', 'Ahmed', 'Ayesha'];
//4 index is not in the array
console.log(personNames[4]); //undefined
//error fixed
personNames.push('Arfa');
console.log(personNames[4]);
