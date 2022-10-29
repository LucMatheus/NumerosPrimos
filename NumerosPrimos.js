// Variáveis de entrada
var vetorDosNumerosPrimos = [];
var limiteDeArranque = 50;

// Processamento
for(let i=1;i<=limiteDeArranque;i++) {
    
    // Variáveis locais
    var eNumeroPrimo = true;

    //---------------TESTES CONDICIONAIS -----------//
    // Testa se é divisivel por 1
    if (i%1==0) {
        eNumeroPrimo = true;
    }

    // Testa se é divisivel por ele mesmo
    if (i%i==0) {
        eNumeroPrimo = true;
    }

    // Testa se mais algum é divisivel
    for(let j=0; j<=i; j++) {
        if (j>1 && j!=i) // Exclui-se o um e o próprio número.
        {
            if (i%j==0) {
                eNumeroPrimo = false;
            }
        }
    }

    // Testa se é 1
    if (i == 1) {
        eNumeroPrimo = false;
    }

    //---------------------------------------------//

    // Se o número é primo
    if (eNumeroPrimo == true) {
        vetorDosNumerosPrimos.push(i);
    }
}

// Saída
console.log(`=== VETOR DOS NÚMEROS PRIMOS === \n Os números são : ${vetorDosNumerosPrimos.toString()}`);