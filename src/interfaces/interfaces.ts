interface IPessoa {
  nome: string;
  idade?: number;
  [key: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: IPessoa) {
  console.log("Olá " + pessoa.nome);
}

const pessoa: IPessoa = {
  nome: "Jonh",
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
};

saudarComOla(pessoa);
pessoa.saudar("Travolta");

// Usar interfaces com Classes

class Cliente implements IPessoa {
  /*
    quando usamos implements, precisamos
    receber na classe todos os atributos
    e métodos declarados na interface
    que não estão como opcionais.
   */
  nome: string = "";
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");

// Interface em funções

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number {
  return base ** exp;
};

// Herança com Interface

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a() {}
}

class RealAB implements A, B {
  a() {}
  b() {}
}

class RealABC implements ABC {
  a() {}
  b() {}
  c() {}
}

interface Object {
  log(): void;
}

Object.prototype.log = function() {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();
