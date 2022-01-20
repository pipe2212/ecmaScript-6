
const data = {
    frontend : "felipe",
    backend: "nata",
    design: "aleja",
}

const entrie = Object.entries(data);
console.log (entrie);
console.log (entrie.length);


const data = {
    frontend : "felipe",
    backend: "nata",
    design: "aleja",

}

const values = Object.values(data);
console.log(values)
console.log(values.length)

const string = "hola";
console.log (string.padStart(6,"hi"));
console.log (string.padEnd(7,"fin"));


 const helloWorld = () => {
    return new Promise ((resolve,reject) =>{
        (true)
      ? setTimeout(() => resolve("hello World"), 3000)
      : reject ( new Error ("test Error"))   
    })

};
 const helloAsync = async () => {
     const hello = await helloWorld();

 };

 helloWorld();

 const anotherFunction = async () => {
     try{
         const hello = await helloWorld();
         console.log (hello);
     } catch (error) {
         console.log(error)
     }
 };


 anotherFunction();