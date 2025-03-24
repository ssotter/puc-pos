import { Pessoa } from "./pessoa.mjs";
import { Aluno } from "./aluno.mjs";
import { Professor } from "./professor.mjs";
import { Livro } from "./livro.mjs";
import { Biblioteca } from "./biblioteca.mjs";

var pessoa1 = new Pessoa('Pedro', 1987, 'Médico Cardiologista');

console.log(`Nome: ${pessoa1.nome}`);
console.log(`Nome: ${pessoa1.anoNascimento}`);
console.log(`Nome: ${pessoa1.profissao}`);
pessoa1.addNome='Paulo';
console.log(`Nome: ${pessoa1.nome}`);
pessoa1.addProfissao='Médico Pediatra';
console.log(`Nome: ${pessoa1.profissao}`);

var aluno1 = new Aluno('Sergio', 1968, '12345');

console.log('-------------------------------')
console.log(`Aluno nome: ${aluno1.nome}`);
console.log(`Aluno matricula: ${aluno1.matricula}`);

var prof1 = new Professor('Laura', 1982, 'Matemática');

console.log('-------------------------------');
console.log(`Prof nome: ${prof1.nome}`);
console.log(`Prof Discilplina: ${prof1.disciplina}`);

var livro1 = new Livro('Banco de Dados vol1', 'Pedro Almeida', '12345');

console.log('-------------------------------');
console.log(`Livro Titulo: ${livro1.titulo}`);
console.log(`Livro autor: ${livro1.autor}`);

var biblioteca1 = new Biblioteca ();

console.log('-------------------------------');
biblioteca1.addLivro = ('Banco de Dados vol2', 'Pedro Dias', '123');
console.log(biblioteca1.livros.length);