import { Livro } from "./livro.mjs";

export class Biblioteca{
    livros;
    constructor(){
        this.livros = [];
    }

    addLivro(livro){
        this.Biblioteca.push(livro);
        console.log(this.livros.length);
    }
}