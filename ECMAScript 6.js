// parametros por defeco

function newFunction (name , age , contry) {
    let name = name || "felipe"
    let age = age || 28
    let contry = contry || "CO"
    console.log (name,age,contry)
};

// es6

function newFunction2 (name = "felipe" , age = 28 , contry = "CO") {
console.log (name,age,contry);
};

newFunction2 ();
newFunction2 ("nata",27,"CO"); 



let frase1 = "hola";
let frase2 = "mundo";

console.log (frase1 +" "+ frase2);
// es6

console.log (`${frase1} ${frase2}`);

// multilineas


let lorem = "Ad anim pariatur anim laboris duis proident est. \n" + "Commodo consectetur aliquip officia sit deserunt dolor."
console.log (lorem)
// es6

let lorem2 = `Mollit consequat laboris pariatur aute irure mollit irure ea ipsum officia in.
Eiusmod enim reprehenderit anim exercitation amet voluptate elit non consequat occaecat velit laborum minim.`
console.log (lorem2)


// destructuracion de elementos 

let  person = {
    "name": "felipe",
    "age": 28,
    "contry": "CO"
}

console.log (person.name,person.age,person.contry);

// es6

let {name,age,contry} = person;

console.log (name,contry);

// operador de propagacion
// es6

let team1  = ["felipe","sebastian","andres"];
let team2 = ["nata","aleja","diana"];

let familia = ["henry", ...team1,...team2];

console.log (familia);

// Asignacion de objetos

let name = "felipe";
let age = 28
// es5
Obj1 = {name:name, age:age};
// es6
Obj2 = {name,age};
console.log (Obj2);

// arrow function

const name = [
    {name : "felipe", age : 28},
    {name : "natalia", age : 27}
];

// es5

let listOfName = name.map (function (item) 
{
console.log(item.name);    
})

console.log (listOfName);
// es6

let listOfName2 = name.map( item => {console.log (item.name) });

console.log (listOfName2);

// promesas

const helloPromise = () => {
    return new Promise ((resolvec,reject)=>{
        if (false){
            resolvec ("bien")
        }
        else { 
            reject ("ups")
        }
    });
};

 helloPromise ()
 .then (Response => console.log(Response))
 .then (() => console.log ("hola"))
 .catch (error  => console.log (error,"error 404"))
 
//  "clases es6"

 class calculadora {
     constructor (){
         this.valueA =0;
         this.valueB = 0;
     }
     sum(valueA,valueB){
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + this.valueB
     }
     rest(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB
    }
 }
 
 const calc= new calculadora();
 console.log(calc.rest(58,40))
 console.log(calc.sum(58,40))