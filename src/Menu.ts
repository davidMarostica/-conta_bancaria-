import * as readline from "readline-sync";
import { colors } from "./util/Colors";
import { ContaController } from "./repository/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";

function main() {
  const controller = new ContaController();

  // Contas de exemplo
  controller.cadastrar(
    new ContaCorrente(
      controller.gerarNumero(),
      123,
      1,
      "João da Silva",
      1000,
      500
    )
  );
  controller.cadastrar(
    new ContaPoupanca(controller.gerarNumero(), 123, 2, "Maria Souza", 2000, 15)
  );

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
    console.log(colors.reset, "");

    let opcao = readline.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        criarConta(controller);
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        listarContas(controller);
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nBuscar Conta por Número\n\n",
          colors.reset
        );
        buscarConta(controller);
        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar Dados da Conta\n\n",
          colors.reset
        );
        atualizarConta(controller);
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar Conta\n\n",
          colors.reset
        );
        apagarConta(controller);
        keyPress();
        break;

      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        sacar(controller);
        keyPress();
        break;

      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        depositar(controller);
        keyPress();
        break;

      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
        transferir(controller);
        keyPress();
        break;

      default:
        console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

function criarConta(controller: ContaController) {
  const numero = controller.gerarNumero();
  const agencia = readline.questionInt("Número da agência: ");
  const tipo = readline.questionInt("Tipo da conta (1-Corrente, 2-Poupança): ");
  const titular = readline.question("Nome do titular: ");
  const saldo = readline.questionFloat("Saldo inicial: ");

  if (tipo === 1) {
    const limite = readline.questionFloat("Limite da conta corrente: ");
    controller.cadastrar(
      new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
    );
  } else if (tipo === 2) {
    const aniversario = readline.questionInt(
      "Dia do aniversário da poupança: "
    );
    controller.cadastrar(
      new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
    );
  } else {
    console.log(colors.fg.redstrong, "Tipo de conta inválido!", colors.reset);
  }
}

function listarContas(controller: ContaController) {
  const contas = controller.listarTodas();
  if (contas.length === 0) {
    console.log("Nenhuma conta cadastrada.");
  } else {
    contas.forEach((conta) => conta.visualizar());
  }
}

function buscarConta(controller: ContaController) {
  const numeroBusca = readline.questionInt("Digite o número da conta: ");
  const contaBusca = controller.procurarPorNumero(numeroBusca);
  if (contaBusca) {
    contaBusca.visualizar();
  } else {
    console.log("Conta não encontrada.");
  }
}

function atualizarConta(controller: ContaController) {
  const numeroAtualizar = readline.questionInt("Digite o número da conta: ");
  const contaAtualizar = controller.procurarPorNumero(numeroAtualizar);
  if (contaAtualizar) {
    const novaAgencia = readline.questionInt("Nova agência: ");
    const novoTitular = readline.question("Novo titular: ");

    contaAtualizar.agencia = novaAgencia;
    contaAtualizar.titular = novoTitular;

    controller.atualizar(contaAtualizar);
  } else {
    console.log("Conta não encontrada.");
  }
}

function apagarConta(controller: ContaController) {
  const numeroDeletar = readline.questionInt("Digite o número da conta: ");
  controller.deletar(numeroDeletar);
}

function sacar(controller: ContaController) {
  const numeroSaque = readline.questionInt("Número da conta: ");
  const valorSaque = readline.questionFloat("Valor do saque: ");
  controller.sacar(numeroSaque, valorSaque);
}

function depositar(controller: ContaController) {
  const numeroDeposito = readline.questionInt("Número da conta: ");
  const valorDeposito = readline.questionFloat("Valor do depósito: ");
  controller.depositar(numeroDeposito, valorDeposito);
}

function transferir(controller: ContaController) {
  const numeroOrigem = readline.questionInt("Número da conta de origem: ");
  const numeroDestino = readline.questionInt("Número da conta de destino: ");
  const valorTransferencia = readline.questionFloat("Valor da transferência: ");
  controller.transferir(numeroOrigem, numeroDestino, valorTransferencia);
}

function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Generation Brasil");
  console.log(
    "David Aparecido da silva - davidmarosticasilvasilva25@gmail.com"
  );
  console.log("github.com/davidMarostica");
  console.log("*******************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readline.question("");
}

main();
