import * as readlinesync from "readline-sync";
import { Colors } from "./util/Colors";

export function main() {
  let opcao: number;

  while (true) {
    console.clear();

    console.log(
      Colors.fg.yellow +
        "*****************************************************" +
        Colors.reset
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.cyan +
        "                BANCO DO BRAZIL COM Z                " +
        Colors.reset
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.yellow +
        "*****************************************************" +
        Colors.reset
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.green +
        "            1 - Criar Conta                          " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            2 - Listar todas as Contas               " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            3 - Buscar Conta por Numero              " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            4 - Atualizar Dados da Conta             " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            5 - Apagar Conta                         " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            6 - Sacar                                " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            7 - Depositar                            " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            8 - Transferir valores entre Contas      " +
        Colors.reset
    );
    console.log(
      Colors.fg.green +
        "            9 - Sair                                 " +
        Colors.reset
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.yellow +
        "*****************************************************" +
        Colors.reset
    );
    console.log("                                                     ");

    let opcaoTexto =
      Colors.fg.cyan + "Entre com a opção desejada: " + Colors.reset;
    opcao = readlinesync.questionInt(opcaoTexto);

    if (opcao == 9) {
      console.log(
        Colors.fg.yellow +
          "\nBanco do Brazil com Z - O seu Futuro começa aqui!" +
          Colors.reset
      );
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(Colors.fg.green + "\n\nCriar Conta\n\n" + Colors.reset);
        break;
      case 2:
        console.log(
          Colors.fg.green + "\n\nListar todas as Contas\n\n" + Colors.reset
        );
        break;
      case 3:
        console.log(
          Colors.fg.green +
            "\n\nConsultar dados da Conta - por número\n\n" +
            Colors.reset
        );
        break;
      case 4:
        console.log(
          Colors.fg.green + "\n\nAtualizar dados da Conta\n\n" + Colors.reset
        );
        break;
      case 5:
        console.log(
          Colors.fg.green + "\n\nApagar uma Conta\n\n" + Colors.reset
        );
        break;
      case 6:
        console.log(Colors.fg.green + "\n\nSaque\n\n" + Colors.reset);
        break;
      case 7:
        console.log(Colors.fg.green + "\n\nDepósito\n\n" + Colors.reset);
        break;
      case 8:
        console.log(
          Colors.fg.green + "\n\nTransferência entre Contas\n\n" + Colors.reset
        );
        break;
      default:
        console.log(Colors.fg.red + "\nOpção Inválida!\n" + Colors.reset);
        break;
    }

    console.log("\nPressione ENTER para continuar...");
    readlinesync.question("");
  }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
  console.log(
    Colors.fg.yellow +
      "\n*****************************************************" +
      Colors.reset
  );
  console.log("Projeto Desenvolvido por: ");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log(
    Colors.fg.yellow +
      "*****************************************************" +
      Colors.reset
  );
}

main();
