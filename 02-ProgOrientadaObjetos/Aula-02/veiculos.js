class Veiculos {
    constructor(modelo, fabricante, qtdRodas, renavan){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.qtdRodas = qtdRodas;
        this.renavan = renavan;
    };
}

class Carro extends Veiculos {
    constructor(modelo, fabricante, renavan, cor){
        super(modelo, fabricante, '4', renavan);
        this.cor = cor;
    };
    getCarro(){
        return `${this.modelo} - ${this.fabricante} - ${this.cor} - ${this.renavan}`;
    };
}

class Moto extends Veiculos {
    constructor(modelo, fabricante, renavan, cilindradas){
        super(modelo, fabricante, '2', renavan);
        this.cilindradas = cilindradas;
    };
}