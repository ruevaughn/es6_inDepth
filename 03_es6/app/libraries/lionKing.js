class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from the Animal Kingdom`);
  }
}

class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }

  hello() {
    console.log(`Hello! I'm ${this.name} from Pride Rock!`)
  }
}

export { Animal, Lion };
