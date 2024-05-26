// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s
// returned to make sure all the information was stored correctly.


type car = {
    manufacturer :string,
    model : string,
    [key : string] : any ;

}

function storeCarInfo(manufacturer :string, model : string, ...optional : {[key : string] : any} [] )  : car {

    const carInfo :car = {
        manufacturer : manufacturer,
        model,
        ...optional,
    }
    return carInfo;

}

const myCar : car = storeCarInfo("toyota","corolla",{color : " silver", year : "2024"})
console.log(myCar);


let myCar2 : car = storeCarInfo("honda",'civic',{color : "black"},{features : ["navigation", "power window"]})
console.log(myCar2);
