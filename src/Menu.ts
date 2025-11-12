import * as readline from "readline-sync";
import { colors } from "./util/Colors";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";

export function main() {
  // Cria a instância do Controller
  let contas: ContaController = new ContaController();

  // Variáveis auxiliares
  let numero: number = 0;
  let agencia: number = 0;
  let tipo: number = 0;
  let titular: string = "";
  let saldo: number = 0;
  let limite: number = 0;
  let aniversario: number = 0;

  // Array de tipos de contas
  let tiposContas = ["Conta Corrente", "Conta Poupança"];

  // Menu principal
  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,
      "*****************************************************"
    );
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log(
      "                                                     ",
      colors.reset
    );

    let opcao: number = readline.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

        console.log("Digite o Numero da agencia: ");
        agencia = readline.questionInt("");

        console.log("Digite o Nome do Titular da conta: ");
        titular = readline.question("");

        console.log("Digite o Tipo da Conta: ");
        tipo = readline.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log("Digite o Saldo da conta (R$): ");
        saldo = readline.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da Conta (R$): ");
            limite = readline.questionFloat("");

            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;
          case 2:
            console.log("Digite o dia do Aniversario da Conta: ");
            aniversario = readline.questionInt("");

            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        listarContas(contas);
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por numero\n\n",
          colors.reset
        );
        buscarConta(contas);
        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        atualizarConta(contas);
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar Conta\n\n",
          colors.reset
        );
        apagarConta(contas);
        keyPress();
        break;

      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        sacar(contas);
        keyPress();
        break;

      case 7:
        console.log(colors.fg.whitestrong, "\n\nDeposito\n\n", colors.reset);
        depositar(contas);
        keyPress();
        break;

      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferencia entre Contas\n\n",
          colors.reset
        );
        transferir(contas);
        keyPress();
        break;

      case 9:
        console.log(
          colors.fg.greenstrong,
          "\n\nBanco do Brazil com Z - O seu Futuro começa aqui!"
        );
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
        break;

      default:
        console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

function listarContas(controller: ContaController) {
  const contas = controller.listarTodas();
  if (contas.length === 0) {
    console.log("\nNenhuma conta cadastrada.");
  } else {
    console.log("\n\n=== LISTA DE TODAS AS CONTAS ===");
    contas.forEach((conta) => {
      conta.visualizar();
      console.log(""); // Espaço entre contas
    });
    console.log("=== FIM DA LISTA ===\n");
  }
}

function buscarConta(controller: ContaController) {
  const numeroBusca = readline.questionInt("Digite o número da conta: ");
  const contaBusca = controller.procurarPorNumero(numeroBusca);
  if (contaBusca) {
    console.log("\n=== CONTA ENCONTRADA ===");
    contaBusca.visualizar();
    console.log("=========================\n");
  } else {
    console.log("\nConta não encontrada.");
  }
}

function atualizarConta(controller: ContaController) {
  const numeroAtualizar = readline.questionInt("Digite o número da conta: ");
  const contaExistente = controller.procurarPorNumero(numeroAtualizar);

  if (contaExistente) {
    console.log("Digite o Numero da Agencia: ");
    const agencia = readline.questionInt("");

    console.log("Digite o Nome do Titular: ");
    const titular = readline.question("");

    console.log("Digite o Saldo da Conta (R$): ");
    const saldo = readline.questionFloat("");

    if (contaExistente.tipo === 1) {
      console.log("Digite o Limite de Credito (R$): ");
      const limite = readline.questionFloat("");

      const contaAtualizada = new ContaCorrente(
        numeroAtualizar, // Mantém o mesmo número
        agencia,
        contaExistente.tipo, // Mantém o mesmo tipo
        titular,
        saldo,
        limite
      );
      controller.atualizar(contaAtualizada);
    } else if (contaExistente.tipo === 2) {
      console.log("Digite o dia do Aniversario da Conta: ");
      const aniversario = readline.questionInt("");

      const contaAtualizada = new ContaPoupanca(
        numeroAtualizar, // Mantém o mesmo número
        agencia,
        contaExistente.tipo, // Mantém o mesmo tipo
        titular,
        saldo,
        aniversario
      );
      controller.atualizar(contaAtualizada);
    }
  } else {
    console.log("Conta não encontrada.");
  }
}

// FUNÇÃO - Apagar Conta
function apagarConta(controller: ContaController) {
  const numeroDeletar = readline.questionInt("Digite o número da conta: ");
  controller.deletar(numeroDeletar);
}

// FUNÇÃO - Sacar
function sacar(controller: ContaController) {
  const numeroSaque = readline.questionInt("Número da conta: ");
  const valorSaque = readline.questionFloat("Valor do saque (R$): ");
  controller.sacar(numeroSaque, valorSaque);
}

// FUNÇÃO - Depositar
function depositar(controller: ContaController) {
  const numeroDeposito = readline.questionInt("Número da conta: ");
  const valorDeposito = readline.questionFloat("Valor do depósito (R$): ");
  controller.depositar(numeroDeposito, valorDeposito);
}

// FUNÇÃO - Transferir
function transferir(controller: ContaController) {
  const numeroOrigem = readline.questionInt("Número da conta de origem: ");
  const numeroDestino = readline.questionInt("Número da conta de destino: ");
  const valorTransferencia = readline.questionFloat(
    "Valor da transferência (R$): "
  );
  controller.transferir(numeroOrigem, numeroDestino, valorTransferencia);
}

function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Generation Brasil");
  console.log(
    "David Aparecido da silva - davidmarosticasilvasilva25@gmail.com"
  );
  console.log("github.com/davidMarostica");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readline.question("");
}

// Executa o programa
main();
