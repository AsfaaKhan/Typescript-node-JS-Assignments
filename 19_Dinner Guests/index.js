"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//print a message indicating the number of people you are inviting to dinner.
let friendNames = ['Asfaa', 'Ayesha', 'Arfa'];
let message = "I just want to let you know you're invited for dinner. ";
//ABSENT FRIEND
//console.log(` \n Ohh! ${friendNames[1]} is not join us for the dinner.\n`);
//NEW FRIEND
let newFriend = "Palwasha";
//vconsole.log(`\n Here is my new friend ${newFriend} \n`);
friendNames[1] = newFriend;
//BIGGER DINNER TABLE
//console.log("\nGood News! We have found a bigger dinner table.\n");
//THREE NEW FRIEND
friendNames.unshift("Afiya");
friendNames.splice(2, 0, "Mahnoor");
friendNames.push("Ahmed");
//for (let index = 0; index < friendNames.length; index++) {
//console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);}
//FRIEND LIST 
//console.log(friendNames);
//SHRINKING FRIEND LIST
//console.log(`\nSorry we are not arrange big table, only two  friends will invited.\n`);
//SHIRNK FRIEND TII 1 INDEX
while (friendNames.length > 2) {
    let removeFriend = friendNames.pop();
    //console.log(`Sorry Dear ${removeFriend}}, You are not invited for the dinner.`);
}
//ONLY 2 FRIENDS LEFT 
//message = "I just want to let you know you're still invited for dinner."
// for (let index = 0; index < friendNames.length; index++) {
//     console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);;}
//EMPTY ARRAY 
friendNames.splice(0, 2);
//console.log(friendNames);
// HERE IS THE ANSWER OF QUESTION # 19
console.log(`Total number of guest is ${friendNames.length}.`);
