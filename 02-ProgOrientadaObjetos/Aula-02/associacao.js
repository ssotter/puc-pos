class Pessoa {
    constructor(nome, anoNascimento, profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    ola(){
        console.log("Olá!");
    }
    calculaIdade(){
        return new Date().getUTCFullYear() - this.anoNascimento;
    }
}

class Estudante extends Pessoa{
    notas = [];
    constructor(nome, anoNascimento, matricula){
        super(nome, anoNascimento, 'Estudante');
        this.matricula = matricula;
    }
    ola(){
        console. log('Olá, meu nome é '+ this.nome +' e sou um aluno(a)')
    }
    addNota(disciplina, nota){
        this.notas.push(disciplina, nota);
    }
}

class Professor extends Pessoa {
    constructor(nome, anoNascimento, disciplina){
        super(nome, anoNascimento, 'Professor(a)');
        this.disciplina = disciplina;
    }
    ola(){
        console.log('Meu nome é '+ this.nome + 'e sou professor(a) da disciplina de ' + this.disciplina);
    }
}

class Nota {
    constructor(disciplina, nota){
        this.disciplina = disciplina;
        this.nota = nota;
    }
}

