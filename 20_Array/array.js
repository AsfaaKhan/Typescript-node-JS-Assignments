"use strict";
//Think of something you could store in a array.
//For example, you could make a list of mountains, rivers, countries,
//cities, languages, or anything else you’d like. \
//Write a program that creates a list containing these items.
//FIRST METHOD
let languages = ['Urdu', 'English', 'Turkish', 'French', 'Arabic'];
for (let index = 0; index < languages.length; index++) {
    console.log(languages[index]);
}
//SECOND METHDOD
let countries = [];
countries.push("Pakistan");
countries.push('Iran');
countries.push('Turkey');
countries.push('United Kingdom');
for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
}
