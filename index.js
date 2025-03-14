let nomeHeroi = "Alef, o destruidor"
let experienciaHeroi = 4000
let nivelHeroi = ""


//Se XP for menor do que 1.000 = Ferro
if (experienciaHeroi < 1000){
    nivelHeroi = "Ferro"
}

//Se XP for entre 1.001 e 2.000 = Bronze
else if(experienciaHeroi >= 1001 && experienciaHeroi <=2000){
    nivelHeroi = "Bronze"
}

//Se XP for entre 2.001 e 5.000 = Prata
else if(experienciaHeroi >= 2001 && experienciaHeroi <=5000){
    nivelHeroi = "Prata"
}

//Se XP for entre 5.001 e 7.000 = Ouro
else if(experienciaHeroi >= 5001 && experienciaHeroi <=7000){
    nivelHeroi = "Ouro"
}

//Se XP for entre 7.001 e 8.000 = Platina
else if(experienciaHeroi >= 7001 && experienciaHeroi <=8000){
    nivelHeroi = "Platina"
}

//Se XP for entre 8.001 e 9.000 = Ascendente
else if(experienciaHeroi >= 8001 && experienciaHeroi <=9000){
    nivelHeroi = "Ascendente"
}

//Se XP for entre 9.001 e 10.000= Imortal
else if(experienciaHeroi >= 9001 && experienciaHeroi <=10000){
    nivelHeroi = "Bronze"
}

//Se XP for maior ou igual a 10.001 = Radiante
else{
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome "  + nomeHeroi + " está no nível de " + nivelHeroi)