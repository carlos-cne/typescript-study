// Decorators é uma funcao
@logarClasse
class Eletrodomestico {
  constructor() {
    console.log("novo");
  }
}

function logarClasse(constructor: Function) {
  console.log(constructor);
}

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
