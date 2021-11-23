/*
Por motivos de pratica, a model de funcionamento da calculadora será feita em TS
mas utilizei o compilador online (https://www.typescriptlang.org/play) para transcrever em JS
A ideia era fazer o projeto 100% em TS, não deu por complicações na inicialização do projeto
*/

const NAO_LIMPAR_TELA = false

export default class CalculadoraModel {
    valor: string
    acumulador: number
    limparTela: boolean
    operacao: string
    
    constructor(valor: string = '0', acumulador: number = 0, operacao:string = '0', limparTela = false){
        this.valor = valor
        this.acumulador = acumulador
        this.limparTela = limparTela
        this.operacao = operacao
    }

    get Valor() {
        return this.valor?.replace('.', ',') || '0'
    }

    numeroDigitado(novoValor: string) {
        console.log(novoValor)
        return new CalculadoraModel(
            (this.limparTela || !this.valor) ? novoValor : this.valor + novoValor,
            this.acumulador,
            this.operacao,
            NAO_LIMPAR_TELA,
        )
    }
}