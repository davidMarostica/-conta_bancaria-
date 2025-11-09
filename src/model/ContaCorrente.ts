import { Conta } from "./Conta";
import { TipoConta } from "./TipoConta";

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

    if (limite < 0) throw new Error("Limite não pode ser negativo");
    this._limite = limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(limite: number) {
    if (limite < 0) throw new Error("Limite não pode ser negativo");
    this._limite = limite;
  }

  public sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("\n Valor do saque deve ser positivo!\n");
      return false;
    }

    if (this.saldo + this._limite < valor) {
      console.log("\n Saldo + Limite Insuficiente!\n");
      return false;
    }

    this.saldo = this.saldo - valor;
    console.log(`\n Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    return true;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Limite: R$ " + this._limite.toFixed(2));
    console.log("Saldo + Limite: R$ " + (this.saldo + this._limite).toFixed(2));
    console.log();
  }
}
