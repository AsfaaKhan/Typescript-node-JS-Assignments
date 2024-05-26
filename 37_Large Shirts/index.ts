//Large Shirts: Modify the make_shirt() function so that shirts are
// large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.


function makeTshirt (size :string = "Large" , text :string = "I love Typescript"){
    console.log(`Creating a ${size} size T-shirt with a message : ${text}`);
    
}
makeTshirt()
makeTshirt("Medium")
makeTshirt("Small","I Love Python")
makeTshirt("Extra large", "I Lovere Javascript")