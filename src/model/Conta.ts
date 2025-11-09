import { TipoConta } from "./TipoConta";

export class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    // Validações no construtor
    if (numero <= 0) throw new Error("Número da conta deve ser positivo");
    if (agencia <= 0) throw new Error("Agência deve ser positiva");
    if (tipo !== TipoConta.CORRENTE && tipo !== TipoConta.POUPANCA)
      throw new Error("Tipo deve ser 1 (Corrente) ou 2 (Poupança)");
    if (!titular.trim()) throw new Error("Titular não pode estar vazio");
    if (saldo < 0) throw new Error("Saldo não pode ser negativo");

    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public get numero(): number {
    return this._numero;
  }

  public set numero(numero: number) {
    if (numero <= 0) throw new Error("Número da conta deve ser positivo");
    this._numero = numero;
  }

  public get agencia(): number {
    return this._agencia;
  }

  public set agencia(agencia: number) {
    if (agencia <= 0) throw new Error("Agência deve ser positiva");
    this._agencia = agencia;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    if (tipo !== TipoConta.CORRENTE && tipo !== TipoConta.POUPANCA)
      throw new Error("Tipo deve ser 1 (Corrente) ou 2 (Poupança)");
    this._tipo = tipo;
  }

  public get titular(): string {
    return this._titular;
  }

  public set titular(titular: string) {
    if (!titular.trim()) throw new Error("Titular não pode estar vazio");
    this._titular = titular;
  }

  public get saldo(): number {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    if (saldo < 0) throw new Error("Saldo não pode ser negativo");
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("\n Valor do saque deve ser positivo!\n");
      return false;
    }

    if (this._saldo < valor) {
      console.log("\n Saldo Insuficiente!\n");
      return false;
    }

    this._saldo -= valor;
    console.log(`\n Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    return true;
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      console.log("\n Valor do depósito deve ser positivo!\n");
      return;
    }
    this._saldo += valor;
    console.log(`\n Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
  }

  public transferir(valor: number, contaDestino: Conta): boolean {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
      console.log(
        `\n Transferência de R$ ${valor.toFixed(2)} para conta ${
          contaDestino.numero
        } realizada com sucesso!`
      );
      return true;
    }
    return false;
  }

  public visualizar(): void {
    let tipo: string =
      this._tipo === TipoConta.CORRENTE ? "Conta Corrente" : "Conta Poupança";

    console.log(
      "*********************************************************************"
    );
    console.log("Dados da Conta:");
    console.log(
      "*********************************************************************"
    );
    console.log("Numero da Conta: " + this._numero);
    console.log("Agência: " + this._agencia);
    console.log("Tipo da Conta: " + tipo);
    console.log("Titular: " + this._titular);
    console.log("Saldo: R$ " + this._saldo.toFixed(2));
  }
}
