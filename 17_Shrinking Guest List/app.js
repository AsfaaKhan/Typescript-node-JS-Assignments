"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that
//you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them
//know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
//Print your list to make sure you actually have an empty list at the end of your program.
let friendNames = ['Asfaa', 'Ayesha', 'Arfa'];
let message = "I just want to let you know you're invited for dinner. ";
//ABSENT FRIEND
console.log(` \n Ohh! ${friendNames[1]} is not join us for the dinner.\n`);
//NEW FRIEND
let newFriend = "Palwasha";
console.log(`\n Here is my new friend ${newFriend} \n`);
friendNames[1] = newFriend;
//BIGGER DINNER TABLE
console.log("\nGood News! We have found a bigger dinner table.\n");
//THREE NEW FRIEND
friendNames.unshift("Afiya");
friendNames.splice(2, 0, "Mahnoor");
friendNames.push("Ahmed");
for (let index = 0; index < friendNames.length; index++) {
    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
}
//FRIEND LIST 
console.log(friendNames);
//SHRINKING FRIEND LIST
console.log(`\nSorry we are not arrange big table, only two  friends will invited.\n`);
//SHIRNK FRIEND TII 1 INDEX
while (friendNames.length > 2) {
    let removeFriend = friendNames.pop();
    console.log(`Sorry Dear ${removeFriend}}, You are not invited for the dinner.`);
}
//ONLY 2 FRIENDS LEFT 
message = "I just want to let you know you're still invited for dinner.";
for (let index = 0; index < friendNames.length; index++) {
    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
    ;
}
//EMPTY ARRAY 
friendNames.splice(0, 2);
console.log(friendNames);
