<script>
    export let texto = ''
    export let triplo = false
    export let duplo = false
    export let operacao = false
    export let destaque = false
    export let onClick = (valor) => () => {}
</script>

<button 
    class='botao' 
    on:click={() => onClick(texto)}
    class:triplo class:duplo class:operacao class:destaque>
    {texto}
</button>

<style>
    .botao{
        margin: 0;
        border: 1px solid var(--cor-fundo);
        flex-basis:25%;
        cursor:pointer;
    }
    .duplo{
        flex-basis:50%;
    }
    .triplo{
        flex-basis:75%;
    }
    .operacao{
        background-color:#3700F5;
        color:black;
    }
    .destaque{
        background-color:#B10BDE;
        color:black;
    }
</style>