import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  private listaContas: Conta[] = [];
  private numero: number = 0;

  // Método Auxiliar - Buscar Conta no Array
  public buscarNaCollection(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }

  // Método Auxiliar - Gerar Número da Conta
  public gerarNumero(): number {
    return ++this.numero;
  }

  // Implementação dos Métodos da Interface
  public procurarPorNumero(numero: number): Conta | null {
    return this.buscarNaCollection(numero);
  }

  public listarTodas(): Conta[] {
    return this.listaContas;
  }

  public cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      "\nA Conta número: " + conta.numero + " foi criada com sucesso!"
    );
  }

  public atualizar(conta: Conta): void {
    let buscaConta = this.buscarNaCollection(conta.numero);

    if (buscaConta !== null) {
      let indice = this.listaContas.indexOf(buscaConta);
      this.listaContas[indice] = conta;
      console.log(
        "\nA Conta número: " + conta.numero + " foi atualizada com sucesso!"
      );
    } else {
      console.log("\nA Conta número: " + conta.numero + " não foi encontrada!");
    }
  }

  public deletar(numero: number): void {
    let conta = this.buscarNaCollection(numero);

    if (conta !== null) {
      let indice = this.listaContas.indexOf(conta);
      this.listaContas.splice(indice, 1);
      console.log("\nA Conta número: " + numero + " foi deletada com sucesso!");
    } else {
      console.log("\nA Conta número: " + numero + " não foi encontrada!");
    }
  }

  public sacar(numero: number, valor: number): void {
    let conta = this.buscarNaCollection(numero);

    if (conta !== null) {
      if (conta.sacar(valor)) {
        console.log(
          "\nO Saque na Conta número: " + numero + " foi efetuado com sucesso!"
        );
      }
    } else {
      console.log("\nA Conta número: " + numero + " não foi encontrada!");
    }
  }

  public depositar(numero: number, valor: number): void {
    let conta = this.buscarNaCollection(numero);

    if (conta !== null) {
      conta.depositar(valor);
      console.log(
        "\nO Depósito na Conta número: " + numero + " foi efetuado com sucesso!"
      );
    } else {
      console.log("\nA Conta número: " + numero + " não foi encontrada!");
    }
  }

  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    let contaOrigem = this.buscarNaCollection(numeroOrigem);
    let contaDestino = this.buscarNaCollection(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null) {
      if (contaOrigem.sacar(valor)) {
        contaDestino.depositar(valor);
        console.log(
          "\nA Transferência da Conta número: " +
            numeroOrigem +
            " para a Conta número: " +
            numeroDestino +
            " foi efetuada com sucesso!"
        );
      }
    } else {
      console.log("\nUma ou mais contas não foram encontradas!");
    }
  }
}
