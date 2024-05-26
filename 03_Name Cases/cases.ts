//Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase


let perosnName :string = "AsFaa kHaN";


// IN LOWER CASE
console.log(` IN LOWER CASE: " ${perosnName.toLowerCase()} "`);

//IN UPPER CASE 
console.log(`IN UPPER CASE : " ${perosnName.toUpperCase() }"`);


//IN TITLE CASE 
//console.log(`IN TITLE CASE : " ${perosnName.split(' ').map(word =>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ')} "` );


function toTitleCase(str : string){
    const words = str.split(" ");
    let finalString :string = " ";

    for (let index = 0; index < words.length; index++) {
       let word = words[index];
       const firstChrInUpperCase :string = word.charAt(0).toUpperCase();
       const charInLowerCase :string = word.slice(1).toLowerCase();
       const titleCaseString = firstChrInUpperCase + charInLowerCase; 
        finalString += titleCaseString + " ";

    }
    return finalString;
}

 
console.log(toTitleCase(perosnName))



