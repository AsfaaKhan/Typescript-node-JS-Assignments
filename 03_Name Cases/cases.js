//Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase
var perosnName = "AsFaa kHaN";
// IN LOWER CASE
console.log(" IN LOWER CASE: \" ".concat(perosnName.toLowerCase(), " \""));
//IN UPPER CASE 
console.log("IN UPPER CASE : \" ".concat(perosnName.toUpperCase(), "\""));
//IN TITLE CASE 
//console.log(`IN TITLE CASE : " ${perosnName.split(' ').map(word =>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ')} "` );
function toTitleCase(str) {
    var words = str.split(" ");
    var finalString = " ";
    for (var index = 0; index < words.length; index++) {
        var word = words[index];
        var firstChrInUpperCase = word.charAt(0).toUpperCase();
        var charInLowerCase = word.slice(1).toLowerCase();
        var titleCaseString = firstChrInUpperCase + charInLowerCase;
        finalString += titleCaseString + " ";
    }
    return finalString;
}
//perosnName = toTitleCase(perosnName);
//console.log(perosnName);
console.log(toTitleCase(perosnName));
