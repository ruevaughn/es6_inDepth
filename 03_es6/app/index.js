import { fellowship, total } from './fellowship';
import multiply, { add } from './math';
import { Animal, Lion } from './lionKing';

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
