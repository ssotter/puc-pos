import { CarroComPlaca } from "./carroComPlaca.mjs";

export class Locadora {
    #_carros
    constructor(){
        this.#_carros = []
    }

    adicionaCarro(umCarro){
        this.#_carros.push(umCarro)
        console.log(this.#_carros.length)
    }

    consultaCarros(){
        this.#_carros.forEach(
            (carro) => console.log('Carro Placa ('+
                carro.placa + '); tq:'+
                carro.tanque ))
    }

    abasteceCarro(index, quantidade){
        if(index >= 0 && index < this.#_carros.length)
            this.#_carros[index].tanque = quantidade
    }
}