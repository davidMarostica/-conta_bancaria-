import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  private _limite: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(limite: number) {
    this._limite = limite;
  }

  public sacar(valor: number): boolean {
    if (this.saldo + this._limite >= valor) {
      this.saldo = this.saldo - valor;
      return true;
    }
    console.log("\nSaldo Insuficiente!");
    return false;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Limite de crédito: R$ ${this._limite.toFixed(2)}`);
    console.log(`Saldo + Limite: R$ ${(this.saldo + this._limite).toFixed(2)}`);
    console.log("*****************************************************");
  }
}
