import { Conta } from "../model/Conta";

export interface ContaRepository {
  procurarPorNumero(numero: number): Conta | null;
  listarTodas(): Conta[];
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
  gerarNumero(): number;
}
