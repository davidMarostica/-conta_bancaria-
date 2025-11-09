import { Conta } from "./Conta";
import { TipoConta } from "./TipoConta";

export class ContaPoupanca extends Conta {
  private _aniversario: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);

    if (aniversario < 1 || aniversario > 31)
      throw new Error("Dia do aniversário deve ser entre 1 e 31");
    this._aniversario = aniversario;
  }

  public get aniversario(): number {
    return this._aniversario;
  }

  public set aniversario(aniversario: number) {
    if (aniversario < 1 || aniversario > 31)
      throw new Error("Dia do aniversário deve ser entre 1 e 31");
    this._aniversario = aniversario;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Dia do aniversário: " + this._aniversario);
    console.log();
  }
}
