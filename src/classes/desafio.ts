// Exercício 1 - Classe

class Moto {
  public velocidade = 0;

  constructor(public nome: string) {}

  buzinar(): void {
    console.log("Toooooooooot!");
  }

  acelerar(delta: number): void {
    this.velocidade += delta;
  }
}

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança

abstract class Objeto2d {
  constructor(public base: number = 0, public altura: number = 0) {}

  abstract area(): number;
}

class Retangulo extends Objeto2d {
  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);

console.log(retangulo.area());

// Exercício 3 - Getters & Setters

class Estagiario {
  #_primeiroNome: string = '';

  get primeiroNome() {
    return this.#_primeiroNome;
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this.#_primeiroNome = nome;
    } else {
      this.#_primeiroNome = "";
    }
  }
}

const estagiario = new Estagiario

console.log('Estagiário primeiro nome', estagiario.primeiroNome);
estagiario.primeiroNome = "Leo";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
