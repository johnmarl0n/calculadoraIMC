//Variável global
const calcular = document.getElementById('calcular');

//Função IMC()
function imc() {

    //Pegando o conteúdo do elemento (.value);
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Entrando no cálculo somente se todos os campos estiverem preenchidos
    if (nome !== '' && altura !== '' && peso !== '') {

        //Calculando e alimentando a div resultado
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do Peso!';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal! Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        //Usando template string
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {

        //Alimentando a div resultado
        resultado.textContent = 'Preencha todos os campos!';
    }
};

//Pegando o click do botão
calcular.addEventListener('click', imc);