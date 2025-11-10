Projeto Conta Bancária - TypeScript

📋 Descrição

Sistema completo de gerenciamento de contas bancárias desenvolvido em TypeScript, implementando conceitos de Programação Orientada a Objetos (POI), herança, polimorfismo e interfaces.
✨ Funcionalidades

    ✅ Sistema completo de contas bancárias

    ✅ Conta Corrente com limite especial

    ✅ Conta Poupança com dia do aniversário

    ✅ CRUD completo (Criar, Listar, Buscar, Atualizar, Deletar)

    ✅ Operações bancárias (Saque, Depósito, Transferência)

    ✅ Interface colorida e amigável

    ✅ Tratamento de erros

    ✅ Código organizado e tipado

🏗️ Estrutura do Projeto

CONTA BANCARIA/
├── src/
│ ├── model/
│ │ ├── Conta.ts # Classe abstrata
│ │ ├── ContaCorrente.ts # Herda de Conta
│ │ └── ContaPoupanca.ts # Herda de Conta
│ ├── repository/
│ │ ├── ContaRepository.ts # Interface
│ │ └── ContaController.ts # Implementação
│ ├── util/
│ │ └── Colors.ts # Cores para console
│ └── Menu.ts # Menu principal
├── package.json
└── tsconfig.json

Como Executar
Pré-requisitos

    Node.js instalado

    npm ou yarn

Instalação e Execução

# Clone o repositório

git clone <https://github.com/davidMarostica/-conta_bancaria-.git>

# Entre na pasta do projeto

cd CONTA_BANCARIA

# Instale as dependências

npm install

# Execute o projeto

npm start

# Ou execute em modo desenvolvimento

npm run dev

npm start # Executa o projeto
npm run dev # Executa em modo watch
npm run build # Compila TypeScript para JavaScript

💻 Menu do Sistema

---

                BANCO DO BRAZIL COM Z

---

            1 - Criar Conta
            2 - Listar todas as Contas
            3 - Buscar Conta por Numero
            4 - Atualizar Dados da Conta
            5 - Apagar Conta
            6 - Sacar
            7 - Depositar
            8 - Transferir valores entre Contas
            9 - Sair

---

🏛️ Conceitos de POI Implementados

1. Abstração

   Classe Conta como classe abstrata

   Métodos abstratos implementados nas classes filhas

2. Encapsulamento

   Atributos privados com getters e setters

   Controle de acesso aos dados

3. Herança

   ContaCorrente e ContaPoupanca herdam de Conta

   Reutilização de código

4. Polimorfismo

   Sobrescrita dos métodos sacar() e visualizar()

   Comportamento específico para cada tipo de conta

5. Interface

   ContaRepository define o contrato para operações

   Separação entre interface e implementação

📝 Exemplo de Uso
Criando uma Conta Corrente

const conta = new ContaCorrente(1, 123, 1, "João Silva", 1000, 500);
conta.visualizar();

Realizando Operações

// Saque
conta.sacar(200); // Sucesso - considera limite

// Depósito
conta.depositar(500);

// Transferência
controller.transferir(1, 2, 300);

🛠️ Tecnologias Utilizadas

    TypeScript - Linguagem de programação

    Node.js - Ambiente de execução

    ts-node - Execução de TypeScript

    readline-sync - Entrada de dados no console

👥 Desenvolvido por

David Aparecido da Silva
📧 davidmarosticasilvasilva25@gmail.com
🔗 github.com/davidMarostica

Generation Brasil
🎓 Bootcamp de Desenvolvimento Web Full Stack
📄 Licença

Este projeto é para fins educacionais como parte do programa Generation Brasil.
🎉 Status do Projeto

✅ COMPLETO E FUNCIONAL

Todas as funcionalidades implementadas e testadas. Pronto para uso e demonstração dos conceitos de POI em TypeScript.
