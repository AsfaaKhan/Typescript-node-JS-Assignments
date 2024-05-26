"use strict";
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s
// returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, model, ...optional) {
    const carInfo = Object.assign({ manufacturer,
        model }, optional);
    return carInfo;
}
const myCar = storeCarInfo("toyota", "corolla", { color: " silver", year: "2024" });
console.log(myCar);
let myCar2 = storeCarInfo("honda", 'civic', { color: "black" }, { features: ["navigation", "power window"] });
console.log(myCar2);
