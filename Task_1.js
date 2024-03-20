/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA? */

// programa compilado utilizando Node

let INDICE = 13; // Define a variavel
let SOMA = 0;// Define a variavel
let K = 0;// Define a variavel

// Enquanto K for menor que INDICE, o loop continuará a ser executado
while (K < INDICE) {
    K = K + 1; // Incrementa K em 1 a cada iteração
    SOMA = SOMA + K; // adiciona o valor atual de K à variável SOMA

}

console.log("Soma = ", SOMA); // imprime soma
// o valor final sera 91