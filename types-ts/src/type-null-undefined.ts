// explicita
let nullVariable:null;
nullVariable = null;
// error nullVariable = 1;

let otherVariable = null; // el interprte con interpteta como de tipo any
otherVariable = 'test'

console.log('nullVariable',nullVariable);
console.log('otherVariable',otherVariable);


//undefined

let undefinedVariable: undefined = undefined;
 // error undefinedVariable = '11';


 let otherUndefined = undefined;
 otherUndefined = 'test1';


 console.log('undefinedVariable',undefinedVariable);
console.log('otherUndefined',otherUndefined);


//null y undefined como subtipos
// -- strictNullChecks
let albumName: string;
// albumName= null;
// albumName= undefined;
