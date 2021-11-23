const NAO_LIMPAR_TELA = false;
export default class CalculadoraModel {
    constructor(valor = '', acumulador = 0, operacao = '0', limparTela = false) {
        this.valor = valor;
        this.acumulador = acumulador;
        this.limparTela = limparTela;
        this.operacao = operacao;
    }
    get Valor() {
        var _a;
        return ((_a = this.valor) === null || _a === void 0 ? void 0 : _a.replace('.', ',')) || '0';
    }
    numeroDigitado(novoValor) {
        return new CalculadoraModel((this.limparTela || !this.valor) ? novoValor : this.valor + novoValor, this.acumulador, this.operacao, NAO_LIMPAR_TELA);
    }
    pontoDigitado() {
        var _a;
        return new CalculadoraModel(((_a = this.valor) === null || _a === void 0 ? void 0 : _a.includes(',')) ? this.valor : this.valor + ',', this.acumulador, this.operacao, NAO_LIMPAR_TELA);
    }
}
