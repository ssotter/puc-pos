export class Pessoa {
    #_nome;
    #_anoNascimento;
    #_profissao;
    constructor(nome, anoNascimento, profissao){
        this.#_nome = nome;
        this.#_anoNascimento = anoNascimento;
        this.#_profissao = profissao;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}, e sou uma [Pessoa]`);
    }

    calculaIdade(){
        return new Date().getUTCFullYear() - this.anoNascimento;
    }

    get nome(){
        return this.#_nome;
    }

    get anoNascimento(){
        return this.#_anoNascimento;
    }

    get profissao(){
        return this.#_profissao;
    }

    set addNome(valor){
        this.#_nome = valor;
    }

    set addAnoNascimento(valor){
        this.#_anoNascimento = valor;
    }

    set addProfissao(valor){
        this.#_profissao = valor;
    }
}
