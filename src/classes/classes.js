var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _velocidadeAtual, _marca, _modelo, _idade;
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.velocidadeMaxima = velocidadeMaxima;
        _velocidadeAtual.set(this, 0);
        _marca.set(this, void 0);
        _modelo.set(this, void 0);
        __classPrivateFieldSet(this, _marca, marca);
        __classPrivateFieldSet(this, _modelo, modelo);
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = __classPrivateFieldGet(this, _velocidadeAtual) + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            __classPrivateFieldSet(this, _velocidadeAtual, novaVelocidade);
        }
        else {
            __classPrivateFieldSet(this, _velocidadeAtual, delta > 0 ? this.velocidadeMaxima : 0);
        }
        return __classPrivateFieldGet(this, _velocidadeAtual);
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
_velocidadeAtual = new WeakMap(), _marca = new WeakMap(), _modelo = new WeakMap();
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this;
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(30);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
// Getters and Setters
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        _idade.set(this, 0);
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return __classPrivateFieldGet(this, _idade);
        },
        set: function (idade) {
            if (idade >= 0 && idade <= 120) {
                __classPrivateFieldSet(this, _idade, idade);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
_idade = new WeakMap();
var carlos = new Pessoa;
carlos.idade = 37;
carlos.idade = -3;
console.log(carlos.idade);
