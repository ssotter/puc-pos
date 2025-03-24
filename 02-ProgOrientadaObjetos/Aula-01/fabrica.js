// Fabrica de objetos - Empregado
function criaEmpregado (salarioBase, valorHoraExtra, qtdHprasExtras) {
    return {
        salarioBase,
        valorHoraExtra,
        qtdHprasExtras,
        calculaSalario: function () {
            return this.salarioBase + (this.valorHoraExtra * this.qtdHprasExtras);
        }
    };
};

// Cria Empregados
const empregado1 = criaEmpregado(5000, 100, 10);
const empregado2 = criaEmpregado(10000, 1000, 2);

// Mostra empregados criados no console
console.log('Empregado1 - salário R$ '+empregado1.calculaSalario());
console.log('Empregado2 - salário R$ '+empregado2.calculaSalario());