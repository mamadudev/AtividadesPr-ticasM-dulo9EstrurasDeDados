import readline from "readline-sync";
import { Queue } from "./Queue";

const fila = new Queue<string>();

while (true) {
  console.log("\nMenu:");
  console.log("1 - Adicionar Cliente");
  console.log("2 - Listar Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");

  const entrada = readline.question("\nDigite uma opcao: ").trim();
  const opcao = Number.parseInt(entrada, 10);

  if (Number.isNaN(opcao)) {
    console.log("\nOpção invalida!");
    continue;
  }

  switch (opcao) {
    case 0:
      console.log("\nPrograma Finalizado!");
      process.exit(0);

    case 1: {
      const nome = readline.question("\nDigite o nome: ").trim();
      fila.enqueue(nome);
      console.log("\nFila:\n");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;
    }

    case 2:
      console.log("\nLista de Clientes na Fila:\n");
      if (fila.isEmpty()) {
        console.log("A Fila esta vazia!");
      } else {
        fila.printQueue();
      }
      break;

    case 3:
      if (fila.isEmpty()) {
        console.log("\nA Fila esta vazia!");
      } else {
        fila.dequeue();
        console.log("\nFila:\n");
        if (fila.isEmpty()) {
          console.log("A Fila esta vazia!");
        } else {
          fila.printQueue();
        }
        console.log("\nO Cliente foi Chamado!");
      }
      break;

    default:
      console.log("\nOpcao invalida!");
      break;
  }
}

















