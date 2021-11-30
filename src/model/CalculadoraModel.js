//A lógica de programação melhor identada está no arquivo 'pre-compiler.ts'

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CalculadoraModel_valor, _CalculadoraModel_acumulador, _CalculadoraModel_limparTela, _CalculadoraModel_operacao;
const NAO_LIMPAR_TELA = false;
const LIMPAR_TELA = true;
export default class CalculadoraModel {
    constructor(valor = null, acumulador = null, operacao = null, limparTela = false) {
        _CalculadoraModel_valor.set(this, void 0);
        _CalculadoraModel_acumulador.set(this, void 0);
        _CalculadoraModel_limparTela.set(this, void 0);
        _CalculadoraModel_operacao.set(this, void 0);
        __classPrivateFieldSet(this, _CalculadoraModel_valor, valor, "f");
        __classPrivateFieldSet(this, _CalculadoraModel_acumulador, acumulador, "f");
        __classPrivateFieldSet(this, _CalculadoraModel_limparTela, limparTela, "f");
        __classPrivateFieldSet(this, _CalculadoraModel_operacao, operacao, "f");
    }
    get valor() {
        var _a;
        return ((_a = __classPrivateFieldGet(this, _CalculadoraModel_valor, "f")) === null || _a === void 0 ? void 0 : _a.replace('.', ',')) || '0';
    }
    numeroDigitado(novoValor) {
        return new CalculadoraModel((__classPrivateFieldGet(this, _CalculadoraModel_limparTela, "f") || !__classPrivateFieldGet(this, _CalculadoraModel_valor, "f")) ? novoValor : __classPrivateFieldGet(this, _CalculadoraModel_valor, "f") + novoValor, __classPrivateFieldGet(this, _CalculadoraModel_acumulador, "f"), __classPrivateFieldGet(this, _CalculadoraModel_operacao, "f"), NAO_LIMPAR_TELA);
    }
    pontoDigitado() {
        var _a;
        return new CalculadoraModel(((_a = __classPrivateFieldGet(this, _CalculadoraModel_valor, "f")) === null || _a === void 0 ? void 0 : _a.includes('.')) ? __classPrivateFieldGet(this, _CalculadoraModel_valor, "f") : __classPrivateFieldGet(this, _CalculadoraModel_valor, "f") + '.', __classPrivateFieldGet(this, _CalculadoraModel_acumulador, "f"), __classPrivateFieldGet(this, _CalculadoraModel_operacao, "f"), NAO_LIMPAR_TELA);
    }
    limpar() {
        return new CalculadoraModel();
    }
    operacaoDigitada(proximaOperacao) {
        return this.calcular(proximaOperacao);
    }
    calcular(proximaOperacao = null) {
        const acumulador = !__classPrivateFieldGet(this, _CalculadoraModel_operacao, "f")
            ? parseFloat(__classPrivateFieldGet(this, _CalculadoraModel_valor, "f"))
            : eval(`${__classPrivateFieldGet(this, _CalculadoraModel_acumulador, "f")} ${__classPrivateFieldGet(this, _CalculadoraModel_operacao, "f")} ${__classPrivateFieldGet(this, _CalculadoraModel_valor, "f")}`);
        const valor = !__classPrivateFieldGet(this, _CalculadoraModel_operacao, "f") ? __classPrivateFieldGet(this, _CalculadoraModel_valor, "f") : `${acumulador}`;
        return new CalculadoraModel(valor, acumulador, proximaOperacao, proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA);
    }
}
_CalculadoraModel_valor = new WeakMap(), _CalculadoraModel_acumulador = new WeakMap(), _CalculadoraModel_limparTela = new WeakMap(), _CalculadoraModel_operacao = new WeakMap();
