//They think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.

interface personType {
    firstName : string,
    secondName : string,
    age : number,
    nationality :string,
    religion : string,
    isStudent : boolean,
    acadamicInfo : {
        qualification:string,
        percentage :number,
        division : number,
}
}
let personData :personType ={
    firstName : "Asfaa",
    secondName : "Khan",
    age : 21,
    nationality :"Pakistani",
    religion : "Islam",
    isStudent : true,
    acadamicInfo  : {
        qualification:"Bachelor of commerce",
        percentage :78,
        division : 1,
}
}

console.log(personData);
