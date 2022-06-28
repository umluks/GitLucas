// Sistema Bando Banco ByteBank

import { Cliente } from "./modules/Cliente";
import { bancoCliente } from "./modules/BancoCliente";

const cliente1 = new Cliente();
    cliente1.nome = "Lucas";
    cliente1.cpf = 12345678901;

const bancoCliente1 = new bancoCliente();
    bancoCliente1.agencia = "001";
    bancoCliente1.contaCorrente = "1001";
    bancoCliente1.saldo = 0;

console.log (cliente1);
console.log (bancoCliente1)

// Operacoes de Deposito e Saque
bancoCliente1.saldo = 1000 //adicionando saldo ao cliente
console.log(bancoCliente1.saldo)

bancoCliente1.saqueCc(900) //operacao saqueCC