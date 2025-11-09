import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { TipoConta } from "./model/TipoConta";

// Testes das classes
console.log(
  "=== TESTES DAS CLASSES CONTA, CONTA CORRENTE E CONTA POUPANÇA ===\n"
);

// Teste da Classe Conta
console.log("*** TESTE CLASSE CONTA ***");
const conta: Conta = new Conta(1, 123, TipoConta.CORRENTE, "Adriana", 10000);

conta.visualizar();
conta.sacar(10500);
conta.visualizar();
conta.depositar(5000);
conta.visualizar();

// Teste da Classe ContaCorrente
console.log("*** TESTE CLASSE CONTA CORRENTE ***");
const contacorrente: ContaCorrente = new ContaCorrente(
  2,
  123,
  TipoConta.CORRENTE,
  "Mariana",
  15000,
  1000
);

contacorrente.visualizar();
contacorrente.sacar(2000);
contacorrente.visualizar();
contacorrente.depositar(1000);
contacorrente.visualizar();

// Teste da Classe ContaPoupanca
console.log("*** TESTE CLASSE CONTA POUPANÇA ***");
const contapoupanca: ContaPoupanca = new ContaPoupanca(
  3,
  123,
  TipoConta.POUPANCA,
  "Victor",
  1000,
  10
);

contapoupanca.visualizar();
contapoupanca.sacar(200);
contapoupanca.visualizar();
contapoupanca.depositar(1000);
contapoupanca.visualizar();

console.log("Menu...");
