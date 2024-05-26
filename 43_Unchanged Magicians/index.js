// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller', 'Derren Brown'];
function copyMagicainNames(arr) {
    return __spreadArray([], arr, true);
}
function makeGreat(magicians) {
    for (var index = 0; index < magicianNames.length; index++) {
        magicianNames[index] = "The Great ".concat(magicians[index]);
    }
}
function showMagicians(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicainArray = copyMagicainNames(magicianNames);
makeGreat(copyMagicainArray);
console.log("\n THIS IS MY ORIGNIAL ARRAY");
showMagicians(magicianNames);
console.log(" \n m,.THIS IS MY MODIFIED ARRAY");
showMagicians(magicianNames);
