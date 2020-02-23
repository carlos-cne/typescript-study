class Carro {
  #velocidadeAtual: number = 0
  #marca: string;
  #modelo: string;

  constructor(
    marca: string,
    modelo: string,
    private velocidadeMaxima: number = 200
  ) {
    this.#marca = marca;
    this.#modelo = modelo
  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.#velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if (velocidadeValida) {
      this.#velocidadeAtual = novaVelocidade
    } else {
      this.#velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.#velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(30)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}


// Getters and Setters

class Pessoa {
  #idade: number = 0

  get idade(): number {
    return this.#idade
  }

  set idade(idade: number) {
    if (idade >= 0 && idade <= 120) {
      this.#idade = idade;
    }
  }
}

const carlos = new Pessoa

carlos.idade = 37

carlos.idade = -3

// Membros estáticos

class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    // return this.PI * raio * raio
    return Matematica.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(4))

// Classe Abstrata
// Não pode ser instanciada

abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numero: number[]): void

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...number: number[]): void {
    this.resultado = number.reduce((t, a) => t + a);
  }
}

let c1 = new Soma

c1.executar(2, 3, 4, 5)

// Singleton

class Unico {
  private static instance: Unico = new Unico

  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

// Somente leitura

class Aviao {
  public readonly modelo: string

  constructor(
    modelo: string,
    public readonly prefixo: string
  ) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-DEF')
