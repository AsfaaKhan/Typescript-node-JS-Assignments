//Stripping Names: Store a person’s name, and include some whitespace characters
//at the beginning and end of the name. Make sure you use each character combination,
//"\t" and "\n", at least once. Print the name once, so the whitespace around
//the name is displayed. Then print the name after striping the white spaces
// \n is => for new line 
// \t =>  4 space means tap
var personName = "\n\tAsfaa Khan\t\n";
console.log("With Whitespace : \"".concat(personName, "\""));
var without_Whitespace = personName.trim();
console.log("Without WhiteSpace : \"".concat(without_Whitespace, "\""));
