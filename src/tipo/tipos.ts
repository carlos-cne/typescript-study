let hobbies = ["Cozinhar", "Praticar esportes"];

// Tuplas

// Array de tipos pré-definidos

let endereco: [string, number] = ["Endereco principal", 123];

// Enum - Estrutura de valores pré-definidos
// tipo dias da semana

enum Cor {
  Cinza,
  Verde,
  Azul = 100
}

let minhaCor = Cor.Verde;

let teste: (a: number, b: number) => boolean;

teste = (a: number, b: number) => a === b;

console.log(teste(1, 1));

type Funcionario = {
  supervisores: string[];
  baterPonto: (num: number) => string;
};

let Carlos: Funcionario = {
  supervisores: ["Cátia", "Eduardo"],
  baterPonto(hora: number) {
    return hora > 8 ? "Ponto fora do horário" : "Ponto normal";
  }
};

let Nicolas: Funcionario = {
  supervisores: [],
  baterPonto(hora: number) {
    return hora > 8 ? "Ponto fora do horário" : "Ponto normal";
  }
};

console.log(Nicolas.supervisores);
console.log(Carlos.baterPonto(8));
console.log(Carlos.baterPonto(9));

// never

function falha(mensagem: string): never {
  throw new Error(mensagem);
}
