var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Otavio',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  //para imprimir o this, remover os dois pontos
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

//user.sayHi(1,2,3);
