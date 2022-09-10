class First {
  hello() {
    console.log(`Привет я метод родителя!`);
  }
};

class Second extends First {

  FirstHello() {
    const second = new First();
    second.hello()
  };

  hello() {
    this.FirstHello()
    console.log(`Привет а я наследуемый метод!`);
  }
}


const MainAndSecond = new Second();
MainAndSecond.hello()

