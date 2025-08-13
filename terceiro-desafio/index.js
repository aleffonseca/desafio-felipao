class hero {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

   atacar(){
        return console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
   }
}


let heroi = new hero("alef", 27, "ninja");
if (heroi.tipo === "guerreiro"){
    heroi.ataque = "espada"
}
else if(heroi.tipo === "mago"){
     heroi.ataque = "magia"
}
else if(heroi.tipo === "monge"){
     heroi.ataque = "artes marciais"
}
else if(heroi.tipo === "ninja"){
     heroi.ataque = "shuriken"
}

heroi.atacar();
