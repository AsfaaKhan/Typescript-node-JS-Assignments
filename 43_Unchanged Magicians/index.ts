// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to each magician’s name.



let magicianNames :string[]= [ 'Harry Houdini','David Copperfield','Penn Jillette','Teller','Derren Brown']

function copyMagicainNames (arr :string[]){
    return[...arr];
}


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
const copyMagicainArray = copyMagicainNames(magicianNames)


makeGreat(copyMagicainArray)

console.log("\n THIS IS MY ORIGNIAL ARRAY");
showMagicians(magicianNames)

console.log(" \n THIS IS MY MODIFIED ARRAY");
showMagicians(magicianNames);

