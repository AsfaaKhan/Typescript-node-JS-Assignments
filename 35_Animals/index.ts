//Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop
// to print out the name of each animal.

// • Modify your program to print a statement about each animal,
// such as A dog would make a great pet.

// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!

let animalNames :string[]= ["Panthera leo","Panthera tigris","Cheetha","Felis domestica "];

for (let animals of animalNames){
    console.log(`The ${animals} has sharp, retractable claws and powerful legs. `);
    
}
console.log(`Well, ${animalNames[0]}, ${animalNames[1]}, and ${animalNames[2]} all belong to the family of cats but have different food habits, hunting styles, physical appearances.`);
console.log(`${animalNames[3] } would make a great pet!`);
