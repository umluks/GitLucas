// Sistema Bando Banco ByteBank

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

    cliente1.nome = "Lucas";
    cliente1.cpf = 12345678901;
    cliente1.agencia = 0001;
    cliente1.saldo = 0;

    cliente2.nome = "Maria";
    cliente2.cpf = 98765432102;
    cliente2.agencia = 0001;
    cliente2.saldo = 0;

console.log (cliente1, cliente2)