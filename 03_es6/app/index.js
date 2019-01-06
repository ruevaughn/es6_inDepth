import { fellowship, total } from './libraries/fellowship';
import multiply, { add } from './libraries/math';
import { Animal, Lion } from './libraries/lionKing';
import Calculator from './libraries/calculator';
import { set, set2, charsSet } from './libraries/05-sets';
import { aMap1, valMap, letters } from './libraries/06-maps';
import { call, call2 } from './libraries/07-closures';

// console.log(fellowship);
// console.log(total);

// console.log(add(5, 10));
// console.log(multiply(5, 10));





// Classes

// let king = new Animal('Mufasa', 4.5);
// console.log(king);
// king.hello();

// let son = new Lion('Simba', 2, "golden");
// console.log(son);
// son.hello();





// // Classes 2
// let m = Calculator.multiply(5, 7);
// console.log(m);

// let a = Calculator.add(5, 7);
// console.log(a);





// Sets
// console.log(set);
// console.log(set2);
// for (let element of set2.values()) {
//   console.log(element);
// }
// console.log(charsSet);




// Maps
// console.log(aMap1);
// console.log(valMap);
// for (let [key, value] of valMap.entries()) {
//     console.log(`${key} points to ${value}`);
// }
// console.log(letters);




// Closures 
//call();
// call2()();
let unveil = call2();
unveil();