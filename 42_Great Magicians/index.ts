// Great Magicians: Start with a copy of your program from Exercise 41
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


let magicianNames :string[]= [ 'Harry Houdini','David Copperfield','Penn Jillette','Teller','Derren Brown']

function makeGreat (magicians :string[]){
   for (let index = 0; index < magicianNames.length; index++) {
    magicianNames[index] = `The Great ${magicians[index]}`;
   }
}

function showMagicians (magician :string []) {
     magician.forEach(element => {
        console.log(element);
     });
}

makeGreat(magicianNames)

showMagicians(magicianNames)





