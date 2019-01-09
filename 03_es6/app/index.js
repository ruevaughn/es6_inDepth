import { fellowship, total } from './libraries/fellowship';
import multiply, { add } from './libraries/math';
import { Animal, Lion } from './libraries/lionKing';
import Calculator from './libraries/calculator';
import { set, set2, charsSet } from './libraries/05-sets';
import { aMap1, valMap, letters } from './libraries/06-maps';
import { call, call2 } from './libraries/07-closures';
import addSuffix, { product } from './libraries/08-function-factories';
import budget from './libraries/09-private-methods';
import letterMaker, { countMaker, evens} from './libraries/10-generators';
import arrayIterator, { es6ArrayIterator } from './libraries/11-custom-iterators';

// 11 Custom Iterators
// let it = arrayIterator([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

var it = es6ArrayIterator(1, 2, 3);
console.log(it.next().value);





// 10 Generators

// We don't use the new keyword when defining instances of Generators
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// let countGen = countMaker();
// console.log(countGen.next().value)
// console.log(countGen.next().value)
// console.log(countGen.next().value)
// console.log(countGen.next().value)
// console.log(countGen.next().done)

// Generators 2
// let generateEvens = evens();
// console.log(generateEvens.next().value);
// console.log(generateEvens.next().value);
// console.log(generateEvens.next().value);
// console.log(generateEvens.next(true).value);
// console.log(generateEvens.next().value);






// 09 Private Methods (Using Closures)
//    Also called the Module Pattern in Es6
// let wallet = budget();
// console.log(wallet);
// wallet.deposit20();
// wallet.withdraw20();
// wallet.deposit20();
// wallet.deposit20();
// console.log(wallet.checkBal());

// Returns undefined because we're not returning the balance
// Balance is a emulated private variable and now is returned
// By methods which return the balance variable but never have access to it.
// console.log(wallet.balance)



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





// 05 Sets
// console.log(set);
// console.log(set2);
// for (let element of set2.values()) {
//   console.log(element);
// }
// console.log(charsSet);




// 06 Maps
// console.log(aMap1);
// console.log(valMap);
// for (let [key, value] of valMap.entries()) {
//     console.log(`${key} points to ${value}`);
// }
// console.log(letters);




// 07 Closures 
//call();
// call2()();
// let unveil = call2();
// unveil();




// 08 Function Factories ( with ES6 Closures )
// let add_ness = addSuffix("ness")
// // closure which remembers the lexical environment of concat function
// console.log(add_ness);
// let happy = add_ness("happi");
// console.log(happy);

// let add_ful = addSuffix("ful"); 
// let f = add_ful("fruit");
// console.log(f);

// let mult5 = product(5);
// let result = mult5(1231541);
// console.log(result);
// console.log(product(5)(5));
// console.log(mult5(3));

// let double = product(2);
// console.log(double(9));