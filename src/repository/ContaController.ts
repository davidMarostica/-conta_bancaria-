import { Conta } from "../model/Conta";
import { ContaCorrente } from "../model/ContaCorrente";
import { ContaPoupanca } from "../model/ContaPoupanca";
import { ContaRepository } from "./ContaRepository";

export class ContaController implements ContaRepository {
  private contas: Conta[] = [];
  public numero: number = 0;

  public gerarNumero(): number {
    return ++this.numero;
  }

  public procurarPorNumero(numero: number): Conta | null {
    for (let conta of this.contas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }

  public listarTodas(): Conta[] {
    return this.contas;
  }

  public cadastrar(conta: Conta): void {
    this.contas.push(conta);
    console.log("\nConta cadastrada com sucesso!");
  }

  public atualizar(conta: Conta): void {
    const index = this.contas.findIndex((c) => c.numero === conta.numero);
    if (index !== -1) {
      this.contas[index] = conta;
      console.log("\nConta atualizada com sucesso!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  public deletar(numero: number): void {
    const index = this.contas.findIndex((conta) => conta.numero === numero);
    if (index !== -1) {
      this.contas.splice(index, 1);
      console.log("\nConta deletada com sucesso!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  public sacar(numero: number, valor: number): void {
    const conta = this.procurarPorNumero(numero);
    if (conta !== null) {
      if (conta.sacar(valor)) {
        console.log("\nSaque realizado com sucesso!");
      }
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  public depositar(numero: number, valor: number): void {
    const conta = this.procurarPorNumero(numero);
    if (conta !== null) {
      conta.depositar(valor);
      console.log("\nDepósito realizado com sucesso!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    const contaOrigem = this.procurarPorNumero(numeroOrigem);
    const contaDestino = this.procurarPorNumero(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null) {
      if (contaOrigem.sacar(valor)) {
        contaDestino.depositar(valor);
        console.log("\nTransferência realizada com sucesso!");
      }
    } else {
      console.log("\nUma das contas não foi encontrada!");
    }
  }
}
