"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// 1_Start with your program from Exercise 14. Add a print statement at the end of your program
//stating the name of the guest who can’t make it.
//2_ Modify your list, replacing the name of the guest who can’t make it with the name of
//the new person you are inviting.
//3_Print a second set of invitation messages, one for each person who is still in your list.
// OLD GUEST LIST
let friendNames = ['Asfaa', 'Ayesha', 'Arfa'];
let message = "I just want to let you know you're invited for dinner. ";
for (let index = 0; index < friendNames.length; index++) {
    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
}
console.log(` \n Ohh! ${friendNames[1]} is not join us for the dinner.\n`);
console.log(`\n Here is my new friend list. \n`);
//NEW GUEST
let newFriend = "Palwasha";
friendNames[1] = newFriend;
for (let index = 0; index < friendNames.length; index++) {
    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
}
