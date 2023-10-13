const botao = document.querySelector('#botão');
const resultado = document.querySelector('#resultado');

botao.addEventListener("click", function(){
    
    const inputNumeros = document.querySelector('#array');
    const campoUm = inputNumeros.value;

    const inputSeparador = document.querySelector('#separador');
    const separador = inputSeparador.value;

    const vetor = campoUm.split(separador).map(Number);

    const maiorNumero = Math.max(...vetor);
    const menorNumero = Math.min(...vetor);

    resultado.textContent = `Maior Número: ${maiorNumero} e o Menor Número: ${menorNumero}`;
});