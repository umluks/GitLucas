// Modulo Banco Cliente

export class bancoCliente {
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