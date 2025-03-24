// 
var pessoa = {
    nome: "Sergio",
    idade: 57,
    saudar: function () {
        console.log("Opa, tudo bem?")
    }
}
// altera um atributo do objeto
pessoa.idade = 58;
// ou
pessoa["nome"] = "João";
console.log(pessoa);

pessoa.saudar = function(){console.log("Hello")};

var pessoa1 = {
    nome: ["Sergio", "Sotter"],
    anoDeNascimento: 1968,
    profissao: "Desenvolvedor de Sistemas",
    calculaIdade: function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

console.log("A idade é "+pessoa1.calculaIdade()+" anos");