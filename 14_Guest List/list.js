"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner,
//who would you invite? Make a list that includes at least three
//people you’d like to invite to dinner. Then use your list to print
//a message to each person, inviting them to dinner.
let friendNames = ['Asfaa', 'Ayesha', 'Arfa'];
let message = "I just want to let you know you're invited for dinner. ";
for (let index = 0; index < friendNames.length; index++) {
    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
}
