
//______________________________________________________________________________________________for in


// var obj = {a:1, b:2, c:3};

// for (var prop in obj) {

//     console.log("obj" + prop + "=" + obj[prop]);

// }








var triangle = { a: 1, b: 2, c: 3};

function ColoredTriangle() {
    this.color = "red";
}

ColoredTriangle.prototype = triangle;

var Obj = new ColoredTriangle();

for (var prop in Obj) {
    if ( Obj.hasOwnProperty(prop)) {
        console.log("obj." + prop + " = " + Obj[prop]);
    }
}



// //___________________________________________________________________________________________for await


var asyncIterable = {
    [Symbol.asyncIterator]() {
        return{
            i: 0,
            next(){
            if (this.i < 3) {
                return Promise.resolve({value: this.i++, done: false});
            }
            return Promise.resolve({ done : true});
            }
        };
    }
};
(async function(){
    for await (let num of asyncIterable) {
        console.log(num);
    }
})();

//_______________________________________________________________________________________________for of


// let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for (let entry of iterable) {
//     console.log(entry);
// }

// for (let [key, value] of iterable) {
//     console.log(value);
// }


// algumas diferenças entre for in e for of são destacadas a seguir

Object.prototype.ObjCustom = function () {};
Array.prototype.ArrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

console.log("este é o exemplo com for in")

for (let i in iterable) {
    console.log(i);
}

console.log("já este outro é o exemplo com for of")

for (let i of iterable) {
    console.log(i);
}


//____________________________________________________________________________________________Switch


switch (expr) {
    case "Laranjas":
      console.log("As laranjas custam $0.59 o quilo.");
      break;
    case "Maçãs":
      console.log("Maçãs custam $0.32 o quilo.");
      break;
    case "Bananas":
      console.log("Bananas custam $0.48 o quilo.");
      break;
    case "Cerejas":
      console.log("Cerejas custam $3.00 o quilo.");
      break;
    case "Mangas":
    case "Mamões":
      console.log("Mangas e mamões custam $2.79 o quilo.");
      break;
    default:
      console.log("Desculpe, estamos sem nenhuma " + expr + ".");
  }
  
  console.log("Tem algo mais que você gostaria de levar?");


  //_________________________________________________________________________________________________________________________________________________________________________________________________

 
 
  var foo = 1;
var output = 'Output: ';
switch (foo) {
    case 0:
        output += 'Então ';
    case 1:
        output += 'Qual ';
        output += 'É ';
    case 2:
        output += 'O Seu ';
    case 3:
        output += 'Nome';
    case 4:
        output += '?';
        alert(output);
        break;
    case 5:
        output += '!';
        alert(output);
        break;
    default:
        alert('Favor escolher um número de 0 à 6!');
}
