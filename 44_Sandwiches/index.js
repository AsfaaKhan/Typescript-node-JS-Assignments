"use strict";
//Sandwiches: Write a function that accepts a array of items
// a person wants on a sandwich. The function should have one parameter
// that collects as many items as the function call provides, and
// it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
//function to print a summary of the sandwich
function makeSandwiches(...item) {
    console.log(`You have to ordered a sandwich with the following items "${item.join(",")}`);
}
makeSandwiches('Cheese', "lettuce", "mayo");
makeSandwiches('Cheese', 'Chicken', 'tomato', 'mayo');
makeSandwiches('Beef', 'Chicken', 'lettuce');
