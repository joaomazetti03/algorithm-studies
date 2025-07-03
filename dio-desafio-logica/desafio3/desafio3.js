//criação da classe

class Heroi{
    //construtor
    constructor(nome, idade, tipoHeroi){
        this.nome = nome;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    //método
    ataque(){
        let ataque = "";

        if(this.tipoHeroi === "mago"){
            ataque = "magia";
        } else if(this.tipoHeroi === "guerreiro"){
            ataque = "espada";
        } else if(this.tipoHeroi === "monge"){
            ataque = "artes marciais";
        } else if(this.tipoHeroi === "ninja"){
            ataque = "shuriken";
        } else {
            ataque = "Ataque desconhecido";
        }

        return ataque;
    }

    //método
    atacar(){
        const tipoAtaque = this.ataque();
        console.log(`O ${this.tipoHeroi} atacou usando ${tipoAtaque}!`)
    }
}

//saídas

let heroiMago = new Heroi("Jay", 21, "mago");
heroiMago.atacar();

console.log("---");

let heroiGuerreiro = new Heroi("Luka", 28, "guerreiro");
heroiGuerreiro.atacar();

console.log("---");

let heroiMonge = new Heroi("Lee", 47, "monge");
heroiMonge.atacar();

console.log("---");

let heroiNinja = new Heroi("Musashi", 30, "ninja");
heroiNinja.atacar();

console.log("---");

let heroiErro = new Heroi("Exception", 500, "ruina");
heroiErro.atacar();
