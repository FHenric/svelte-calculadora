/*
Por motivos de pratica, a model de funcionamento da calculadora será feita em TS
mas utilizei o compilador online (https://www.typescriptlang.org/play) para transcrever em JS
A ideia era fazer o projeto 100% em TS, não deu por complicações na inicialização do projeto
*/

const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

export default class CalculadoraModel {
    #valor: string
    #acumulador: number
    #limparTela: boolean
    #operacao: string

    constructor(valor: string = null, acumulador: number = null, operacao: string = null, limparTela = false) {
        this.#valor = valor
        this.#acumulador = acumulador
        this.#limparTela = limparTela
        this.#operacao = operacao
    }

    get valor() {
        return this.#valor?.replace('.', ',') || '0'
    }

    numeroDigitado(novoValor: string) {
        return new CalculadoraModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }

    pontoDigitado() {
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }

    limpar() {
        return new CalculadoraModel()
    }

    operacaoDigitada(proximaOperacao: string) {
        return this.calcular(proximaOperacao)
    }

    calcular(proximaOperacao: string = null) {
        const acumulador = !this.#operacao
            ? parseFloat(this.#valor)
            : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)
        const valor = !this.#operacao ? this.#valor : `${acumulador}`

        return new CalculadoraModel(
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? LIMPAR_TELA :  NAO_LIMPAR_TELA
        )
    }
}