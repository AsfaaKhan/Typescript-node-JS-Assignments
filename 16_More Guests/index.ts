//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your
//program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest
//to the end of your list. 

//• Print a new set of invitation messages, one for each person in your list.




//OLD GUEST LIST
let friendNames :string[] = ['Asfaa','Ayesha','Arfa'];
let message :string = "I just want to let you know you're invited for dinner. " ;

//ABSENT FRIEND
console.log(` \n Ohh! ${friendNames[1]} is not join us for the dinner.\n`);

//NEW FRIEND
let newFriend :string = "Palwasha";

console.log(`\n Here is my new friend ${newFriend} \n`);
friendNames[1] = newFriend;

for (let index = 0; index < friendNames.length; index++) {

    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
     
}

//BIGGER DINNER TABLE
console.log("\nGood News! We have found a bigger dinner table.\n");

//THREE NEW FRIEND
friendNames.unshift("Afiya");
friendNames.splice(2,0,"Mahnoor");
friendNames.push("Ahmed")

for (let index = 0; index < friendNames.length; index++) {

    console.log(`Dear ${friendNames[index]}, \n\t ${message}\n\t\t\t\t\t\t "THANK YOU!" `);
     
}

