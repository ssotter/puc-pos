function criaUsuario (nomeUsuario, email, salarioBase, valorHoraExtra, qtdHorasExtras) {
    return {
        nomeUsuario,
        email,
        salarioBase,
        valorHoraExtra,
        qtdHorasExtras,
        calculaSalario: function () {
            var total = this.salarioBase + (this.valorHoraExtra * this.valorHoraExtra);
            return console.log('O usuário ' + this.nomeUsuario + ' realizou ' + qtdHorasExtras +
                ' horas extras este mês, e seu salário é -> R$ ' + total.toFixed(2).replace('.',','))
        },
        alteraEmail: function (emailNovo) {
            this.email = emailNovo;
            return console.log(this.email);
        }
    };
};