import { Conta } from "../model/Conta";
import { IContaRepository } from "../repository/IContaRepository";

export class ContaController implements IContaRepository {
  private listaContas: Conta[] = [];
  private numero: number = 0;

  // Buscar conta na lista
  private buscarNaCollection(numero: number): Conta | null {
    return this.listaContas.find((conta) => conta.numero === numero) || null;
  }

  // Gerar número da conta
  public gerarNumero(): number {
    return ++this.numero;
  }

  // Procurar conta por número
  public procurarPorNumero(numero: number): Conta | null {
    const conta = this.buscarNaCollection(numero);
    if (conta) {
      return conta;
    } else {
      console.log(`\nA Conta número: ${numero} não foi encontrada!`);
      return null;
    }
  }

  // Listar todas as contas
  public listarTodas(): Conta[] {
    return this.listaContas;
  }

  // Cadastrar conta
  public cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(`\nA Conta número: ${conta.numero} foi criada com sucesso!`);
  }

  // Atualizar conta
  public atualizar(conta: Conta): void {
    const index = this.listaContas.findIndex((c) => c.numero === conta.numero);
    if (index !== -1) {
      this.listaContas[index] = conta;
      console.log(
        `\nA Conta número: ${conta.numero} foi atualizada com sucesso!`
      );
    } else {
      console.log(`\nA Conta número: ${conta.numero} não foi encontrada!`);
    }
  }

  // Deletar conta
  public deletar(numero: number): void {
    const index = this.listaContas.findIndex(
      (conta) => conta.numero === numero
    );
    if (index !== -1) {
      this.listaContas.splice(index, 1);
      console.log(`\nA Conta número: ${numero} foi deletada com sucesso!`);
    } else {
      console.log(`\nA Conta número: ${numero} não foi encontrada!`);
    }
  }

  // Sacar
  public sacar(numero: number, valor: number): void {
    const conta = this.buscarNaCollection(numero);

    if (conta) {
      if (conta.sacar(valor)) {
        console.log(
          `\nO Saque na Conta número: ${numero} foi efetuado com sucesso!`
        );
      }
    } else {
      console.log(`\nA Conta número: ${numero} não foi encontrada!`);
    }
  }

  // Depositar
  public depositar(numero: number, valor: number): void {
    const conta = this.buscarNaCollection(numero);

    if (conta) {
      conta.depositar(valor);
      console.log(
        `\nO Depósito na Conta número: ${numero} foi efetuado com sucesso!`
      );
    } else {
      console.log(`\nA Conta número: ${numero} não foi encontrada!`);
    }
  }

  // Transferir
  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    const contaOrigem = this.buscarNaCollection(numeroOrigem);
    const contaDestino = this.buscarNaCollection(numeroDestino);

    if (contaOrigem && contaDestino) {
      if (contaOrigem.sacar(valor)) {
        contaDestino.depositar(valor);
        console.log(
          `\nTransferência de R$ ${valor.toFixed(
            2
          )} da conta ${numeroOrigem} para ${numeroDestino} efetuada com sucesso!`
        );
      }
    } else {
      console.log(`\nA Conta de Origem e/ou Destino não foram encontradas!`);
    }
  }
}
