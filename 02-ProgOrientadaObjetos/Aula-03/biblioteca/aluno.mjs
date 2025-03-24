import { Pessoa } from "./pessoa.mjs";

export class Aluno extends Pessoa {
    constructor(nome, anoNascimento, matricula){
        super(nome, anoNascimento, 'Estudante');
        this.matricula = matricula;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}, e sou um [Aluno]`)
    }
}