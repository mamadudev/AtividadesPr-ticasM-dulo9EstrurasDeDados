
import { Stack } from './Stack';

import * as readlineSync from 'readline-sync';

;
const bookStack = new Stack<string>();
let option: number;

do {
    console.log("\nDigite uma opção:");
    console.log("1: Adicionar um livro");
    console.log("2: Listar livros");
    console.log("3: Retirar um livro");
    console.log("0: Sair");

    option = parseInt(readlineSync.question(''));

    switch (option) {
        case 1:
            const bookName = readlineSync.question('\nDigite o nome: ');
            bookStack.push(bookName);
            console.log('\nPilha:');
            bookStack.print();
            console.log('\nLivro adicionado!');
            break;

        case 2:
            console.log('\nLista de Livros na Pilha:');
            bookStack.print();
            break;

        case 3:
            if (bookStack.isEmpty()) {
                console.log('\nA Pilha está vazia!');
            } else {
                bookStack.pop();
                console.log('\nPilha:');
                bookStack.print();
                console.log('\nUm Livro foi retirado da pilha!');
            }
            break;

        case 0:
            console.log('\nPrograma Finalizado!');
            break;
    }
} while (option !== 0);
