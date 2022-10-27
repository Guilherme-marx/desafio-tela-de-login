// var obj = {a:1, b:2, c:3};

// for (var prop in obj) {
    
//     console.log("objeto" + prop + "=" + obj[prop]);
    
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








// var asyncIterable = {
//     [Symbol.asyncIterator]() {
//         return{
//             i: 0,
//             next(){
//             if (this.i < 3) {
//                 return Promise.resolve({value: this.i++, done: false});
//             }
//             return Promise.resolve({ done : true});
//             }
//         };
//     }
// };
// (async function(){
//     for await (let num of asyncIterable) {
//         console.log(num);
//     }
// })();