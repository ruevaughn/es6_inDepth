import { fellowship, total } from './libraries/fellowship';
import multiply, { add } from './libraries/math';
import { Animal, Lion } from './libraries/lionKing';
import Calculator from './libraries/calculator';

console.log(fellowship);
console.log(total);

console.log(add(5, 10));
console.log(multiply(5, 10));

// Classes

let king = new Animal('Mufasa', 4.5);
console.log(king);
king.hello();

let son = new Lion('Simba', 2, "golden");
console.log(son);
son.hello();

// Classes 2
let m = Calculator.multiply(5, 7);
console.log(m);

let a = Calculator.add(5, 7);
console.log(a);
