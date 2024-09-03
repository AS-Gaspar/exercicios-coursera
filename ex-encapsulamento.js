class ContaBancaria {
    // Propriedade privada com #
    #saldo;

    constructor(nomeTitular) {
        this.nomeTitular = nomeTitular; // Propriedade pública
        this.#saldo = 0; // Inicialização da propriedade privada
    }

    // Método público para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }

    // Método público para sacar dinheiro
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    // Método público para verificar o saldo
    verSaldo() {
        console.log(`Saldo atual: R$ ${this.#saldo}`);
    }
}

// Exemplo de uso
const minhaConta = new ContaBancaria("João Silva");
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.verSaldo(); // Saldo atual: R$ 500

// Tentando acessar a propriedade privada diretamente (não é possível)
//console.log(minhaConta.#saldo); // Erro: Private field '#saldo' must be declared in an enclosing class