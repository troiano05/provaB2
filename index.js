/* Questão 1: Indentificar se um número é primo e listar todos os primos de 1 a 1000 */
//função que lista todos os números primos dentro do intervalo determinado.//
function numerosprimos(num) {
    let numeros = new Array();
    for (var i = 0; i <= num; i++) {
        if (seraprimo(i)) {
            numeros.push(i);
        }
    }
    return numeros;
}
//função que identifica se um número é primo ou não usando a lógica de que um número só é primo se for divisivel por 1 e por ele mesmo//
function seraprimo(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        };
    return num > 1;
}
console.log(numerosprimos(1000))

/* Questão 2: Criar uma função que valide uma senha de acordo com os parâmetros dados (8 caracteres, uma letra minusucula, uma letra maiscula e um número) */
function verifsenha() {
    var senha = prompt('Digite sua senha abaixo:');
    if (senha === null) {
        console.log('nenhuma senha foi digitada');
        return;
    }
    var temcaps = /[A-Z]/.test(senha);
    var temminusc = /[a-z]/.test(senha);
    var temnum = /\d/.test(senha);
    var tem8caracteres = senha.length >= 8;
    // Condição lógica usando "E" para garantir que todos os parâmetros de validade da senha sejam atendidos ao mesmo tempo //
    if (temcaps && temminusc && temnum && tem8caracteres) {
        alert('Senha válida!');
    } else {
        alert('Senha inválida!');
    }
}

verifsenha();

/* Questão 3: Calcular o fatorial dos números de 1 a 10 */
//Função que faz o calculo do fatorial de um número//
function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}
//Função que calcula e armazena todos os fatoriais de 1 a 10 em um arranjo//
function calcfatoriais() {
    var fatoriais = [];

    for (var i = 1; i <= 10; i++) {
        var result = fatorial(i);
        fatoriais.push(result);
    }

    return fatoriais;
}

var resultado = calcfatoriais();
console.log(resultado);

/*Questão 4: Criar uma função que calcule se um número é um quadrado perfeito */
//Função que calcula se o número é um quadrado perfeito usando as seguintes condições: a função usa um loop para rodar os números começando em 0 até quando o quadrado do número atual seja maior que o número de entrada, se em algum ponto o quadrado do número sendo calculado corresponder ao número de entrada, a função retornara 'true' o que significa que aquele número é um quadrado perfeito. Caso contrário, se o loop for concluído sem chegar a nenhuma correspond~encia numérica a função retornará 'false'.
function testadordequadrado(num) {
    if (num < 0) {
        return false;
    }

    var i = 0;
    while (i * i <= num) {
        if (i * i === num) {
            return true;
        }
        i++;
    }

    return false;
}
// Agora basta digitar o número a se testar entre os parênteses na função abaixo// 
console.log(testadordequadrado());
