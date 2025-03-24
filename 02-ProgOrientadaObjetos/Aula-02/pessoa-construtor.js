function Pessoa (nome, anoNascimento, profissao) {
    return {
        nome,
        anoNascimento,
        profissao,
        calculaIdade: function () {
            return new Date().getUTCFullYear() - this.anoNascimento;
        }
    };    
};

const pessoa1 = new Pessoa('João', 1990, 'Estudante');
console.log('A idade de '+pessoa1.nome+' é '+pessoa1.calculaIdade()+ ' anos.');

function Carro (modelo, montadora, anoFab, anoModelo, cor) {
    return {
        modelo,
        montadora,
        anoFab,
        anoModelo,
        cor
    };
};

const carro1 = new Carro('Tracker', 'GM', 2017, 2018, 'Preta');
console.log(carro1);
console.table(carro1);