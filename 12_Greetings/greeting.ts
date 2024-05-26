//Greetings: Start with the array you used in Exercise 11,
//but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be
//personalized with the person’s name.




let friendNames :string[ ] = ['Arfa', 'Sadia', 'Palwasha'];


for (let index = 0; index < friendNames.length; index++) {

  console.log(`"Welcome to the typescript class ${friendNames[index]}."`);
  
}

