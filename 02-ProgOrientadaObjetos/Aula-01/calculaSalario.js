const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    horasExtras: 20,
    calculaSalario: function(){
        return this.salarioFixo + (this.horasExtras * this.valorHoraExtra);
    }
};
console.log("O salário é "+empregado.calculaSalario().toFixed(2));