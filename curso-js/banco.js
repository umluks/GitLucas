// Sistema Bando Banco ByteBank

class Cliente {
    nome;
    cpf;
}

class bancoCliente {
    agencia;
    contaCorrente;
    saldo;

    saqueCc(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(bancoCliente1.saldo, "valor disponivel na conta")
        } else {
        console.log("Voce nao possui saldo suficiente para saque")
        }
    }
}

const cliente1 = new Cliente();
    cliente1.nome = "Lucas";
    cliente1.cpf = 12345678901;

const cliente2 = new Cliente();
    cliente2.nome = "Maria";
    cliente2.cpf = 98765432102;

const bancoCliente1 = new bancoCliente();
    bancoCliente1.agencia = 0001;
    bancoCliente1.contaCorrente = 1001
    bancoCliente1.saldo = 0;

console.log (cliente1);
console.log (cliente2);
console.log (bancoCliente1)

// Operacoes de Deposito e Saque
bancoCliente1.saldo = 1000 //adicionando saldo ao cliente
console.log(bancoCliente1.saldo)

bancoCliente1.saqueCc(2000) //operacao saqueCC