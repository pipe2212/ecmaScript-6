const obj = {
    name: "felipe",
    age: 28,
    country: "CO",
};

let { name, ...all } = obj;
console.log (all);


const obj = {
    name : "felipe",
    age : 28,
}

const obj1 = {
    ...obj,
    contry : "CO"
}

console.log (obj1);

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout (() => resolve("hello Mundo"),3000)
        : reject (new Error ("Test Error"))
    });
};


helloWorld ()
 .then (Response => console.log(Response))
 .catch (error => console.log(error))
 .finally (() => console.log ("finalizo")) 




 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-01-21');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);