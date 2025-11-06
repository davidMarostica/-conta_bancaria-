import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { Conta } from "./model/Conta";

export function main() {
  let opcao: number;
  let contas: Conta[] = [];

  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);

  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

  contas.push(conta);

  console.log("menu...");
  keyPress();

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
    console.log(colors.reset);

    opcao = readlinesync.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset);
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        const numero = readlinesync.questionInt("Número da conta: ");
        const agencia = readlinesync.questionInt("Número da agência: ");
        const tipo = readlinesync.questionInt(
          "Tipo da conta (1-Corrente, 2-Poupança): "
        );
        const titular = readlinesync.question("Nome do titular: ");
        const saldo = readlinesync.questionFloat("Saldo inicial: ");
        contas.push(new Conta(numero, agencia, tipo, titular, saldo));
        console.log("\nConta criada com sucesso!");
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        if (contas.length === 0) {
          console.log("Nenhuma conta cadastrada.");
        } else {
          contas.forEach((c) => c.visualizar());
        }
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nBuscar Conta por Número\n\n",
          colors.reset
        );
        const buscaNumero = readlinesync.questionInt(
          "Digite o número da conta: "
        );
        const contaBuscada = contas.find((c) => c.numero === buscaNumero);
        contaBuscada
          ? contaBuscada.visualizar()
          : console.log("Conta não encontrada.");
        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar Dados da Conta\n\n",
          colors.reset
        );
        const atualizaNumero = readlinesync.questionInt(
          "Digite o número da conta: "
        );
        const contaAtualizar = contas.find((c) => c.numero === atualizaNumero);
        if (contaAtualizar) {
          contaAtualizar.agencia = readlinesync.questionInt("Nova agência: ");
          contaAtualizar.tipo = readlinesync.questionInt(
            "Novo tipo (1-Corrente, 2-Poupança): "
          );
          contaAtualizar.titular = readlinesync.question("Novo titular: ");
          console.log("Conta atualizada com sucesso!");
        } else {
          console.log("Conta não encontrada.");
        }
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar Conta\n\n",
          colors.reset
        );
        const apagarNumero = readlinesync.questionInt(
          "Digite o número da conta: "
        );
        const index = contas.findIndex((c) => c.numero === apagarNumero);
        if (index !== -1) {
          contas.splice(index, 1);
          console.log("Conta apagada com sucesso!");
        } else {
          console.log("Conta não encontrada.");
        }
        keyPress();
        break;

      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        const saqueNumero = readlinesync.questionInt("Número da conta: ");
        const contaSaque = contas.find((c) => c.numero === saqueNumero);
        if (contaSaque) {
          const valorSaque = readlinesync.questionFloat("Valor do saque: ");
          contaSaque.sacar(valorSaque);
        } else {
          console.log("Conta não encontrada.");
        }
        keyPress();
        break;

      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        const depositoNumero = readlinesync.questionInt("Número da conta: ");
        const contaDeposito = contas.find((c) => c.numero === depositoNumero);
        if (contaDeposito) {
          const valorDeposito = readlinesync.questionFloat(
            "Valor do depósito: "
          );
          contaDeposito.depositar(valorDeposito);
        } else {
          console.log("Conta não encontrada.");
        }
        keyPress();

        break;

      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
        const origemNumero = readlinesync.questionInt(
          "Número da conta de origem: "
        );
        const destinoNumero = readlinesync.questionInt(
          "Número da conta de destino: "
        );
        const valorTransferencia = readlinesync.questionFloat(
          "Valor da transferência: "
        );
        const origem = contas.find((c) => c.numero === origemNumero);
        const destino = contas.find((c) => c.numero === destinoNumero);
        if (origem && destino) {
          if (origem.sacar(valorTransferencia)) {
            destino.depositar(valorTransferencia);
            console.log("Transferência realizada com sucesso!");
          }
        } else {
          console.log("Conta de origem ou destino não encontrada.");
        }
        keyPress();
        break;

      default:
        console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
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
  console.log(colors.reset);
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
