<script>
	import Linha from './Linha.svelte';
    import Botao from './botao.svelte';
    import Tela from './display.svelte';
    import CalculadoraModel from '../model/CalculadoraModel'

    let calc = new CalculadoraModel();

    const numeroDigitado = num => calc = calc.numeroDigitado(num);
    const pontoDigitado = () => calc = calc.pontoDigitado();
    const operacaoDigitada = op => calc = calc.operacaoDigitada(op);
    const calcular = () => calc = calc.calcular()
    const limpar = () => calc = calc.limpar();

</script>

<div class="calculadora">
    <Tela valor={calc.valor}/>
    <Linha>
        <Botao destaque triplo texto = "AC" onClick={limpar}/>
        <Botao operacao texto = "/" onClick={operacaoDigitada}/>
    </Linha>

    <Linha>
        <Botao texto="1" onClick={numeroDigitado} />
        <Botao texto="2" onClick={numeroDigitado} />
        <Botao texto="3" onClick={numeroDigitado} />
        <Botao operacao texto="*" onClick={operacaoDigitada}/>
    </Linha>

    <Linha>
        <Botao texto="4" onClick={numeroDigitado} />
        <Botao texto="5" onClick={numeroDigitado} />
        <Botao texto="6" onClick={numeroDigitado} />
        <Botao operacao texto="+" onClick={operacaoDigitada}/>
    </Linha>

    <Linha>
        <Botao texto="7" onClick={numeroDigitado} />
        <Botao texto="8" onClick={numeroDigitado} />
        <Botao texto="9" onClick={numeroDigitado} />
        <Botao operacao texto="-" onClick={operacaoDigitada}/>
    </Linha>

    <Linha>
        <Botao duplo texto="0" onClick={numeroDigitado}/>
        <Botao texto="," onClick={pontoDigitado}/>
        <Botao destaque texto="=" onClick={calcular} />
    </Linha>
</div>

<style>
    .calculadora{
        background-color: var(--cor-fundo);
        height:300px;
        width:250px;
        padding:5px;
        border-radius:5px;

        display: flex;
        flex-direction: column;
    }
    
</style>