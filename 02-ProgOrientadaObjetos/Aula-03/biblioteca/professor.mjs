import { Pessoa } from "./pessoa.mjs";

export class Professor extends Pessoa {
    constructor(nome, anosNascimento, disciplina){
        super(nome, anosNascimento, 'Professor(a)');
        this.disciplina = disciplina;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}, sou um [Professor(a)] na disciplina de ${this.disciplina}`)
    }
}