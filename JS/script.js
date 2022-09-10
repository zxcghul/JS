class First {
  constructor() {
    name: 'Kirill';
  }

  hello() {
    console.log(`Привет я метод родителя!`);
  }
};


// class Second {
// }

const helllo = new First();
console.log(helllo);
