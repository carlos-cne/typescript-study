function echo(object: any) {
  return object;
}

// usando generics

function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

// console.log(echoMelhorado("Joao").length);
// console.log(echoMelhorado<number>(27));
// console.log(echoMelhorado({ nome: "Joao", idade: 27 }));

// Generics disponiveis na API

const avaliacoes: Array<number> = [10, 9, 3, 7, 7];

avaliacoes.push(8.4);
// avaliacoes.push("5.5");
// console.log(avaliacoes);

// Array

function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento));
}

// imprimir(avaliacoes);
// imprimir<number>([1, 2, 3]);
// imprimir<string>(["Carlos", "Catia"]);
// imprimir<{ nome: string; idade: number }>([
//   { nome: "Carlos", idade: 37 },
//   { nome: "Cátia", idade: 36 },
//   { nome: "Nicolas", idade: 7 },
//   { nome: "Eduardo", idade: 4 }
// ]);

// Tipo Generics

type Echo = <T>(data: T) => T;

const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Classes com Generics

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria("bom ", "dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());
