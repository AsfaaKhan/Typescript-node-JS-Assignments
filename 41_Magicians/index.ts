//  Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians() 
//  which prints the name of each magician in the array.

const magicianNames :string[] = ["Herry Potter",'David Copperfield','Penn Jillette','Teller','Derren Brown','Harry Houdini']

function showMagicians (magician :string []) {
     magician.forEach(element => {
        console.log(element);
     });
}

showMagicians(magicianNames)


