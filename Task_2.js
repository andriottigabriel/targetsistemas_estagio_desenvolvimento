/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre 
será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule 
a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser 
previamente definido no código;
*/

// Define funcao chamada pertenceSequenciaFibonacci que verifica se um número pertence à sequência de Fibonacci
function pertenceSequenciaFibonacci(numero) {
    let a = 0; // inicializa a variável a com o primeiro número da sequência 0
    let b = 1; // inicializa a variável 'b' com o segundo numero da sequência 1
    let temp; // declara uma variavel temporária para armazenar a soma de a +b

    // Verifica se o número fornecido é 0 ou 1, que são casos especiais da sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        return true; // Retorna verdadeiro, pois 0 e 1 estão na sequência de Fibonacci
    }

    // Calcula a sequência de Fibonacci até encontrar um número maior ou igual ao numero da  const numeroInformado
    while (true) {
        temp = a + b; // Calcula o próximo número da sequência somando a +b
        if (temp === numero) {
            return true; // Se o próximo número for igual ao número fornecido, retorna verdadeiro
        } else if (temp > numero) {
            return false; // Se o próximo número for maior que o número fornecido, retorna falso
        }
        a = b; // atualiza a para o valor de b
        b = temp; // atualiza b para o valor de temp
    }
}

const numeroInformado = 21; // Define o número a ser verificado na sequência de Fibonacci, pode alterar

// Verifica se o número informado pertence à sequência de Fibonacci e imprime uma mensagem na tela
if (pertenceSequenciaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci."); // imprime na tela caso o número pertença 
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci."); // imprime na tela caso o número não pertença 
}
