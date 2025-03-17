let vitoria = 115, derrota = 8, diferenca = vitoria - derrota

nivel = saldoRanking(vitoria, derrota)
console.log("O Herói tem de saldo de "+ diferenca +" está no nível de " + nivel)
 
function saldoRanking(vitoria, derrota){
    saldo = vitoria - derrota
    //Se vitórias for menor do que 10 = Ferro
    if(saldo <=10){
        return "Ferro"
    }
    //Se vitórias for entre 11 e 20 = Bronze
    if(saldo>=11 && saldo<=20){
        return "Bronze"
    }
    //Se vitórias for entre 21 e 50 = Prata
    if(saldo>=21 && saldo<=50){
        return "Prata"
    }
    //Se vitórias for entre 51 e 80 = Ouro
    if(saldo>=51 && saldo<=80){
        return "Ouro"
    }
    //Se vitórias for entre 81 e 90 = Diamante
    if(saldo>=81 && saldo<=90){
        return "Diamante"
    }
    //Se vitórias for entre 91 e 100= Lendário
    if(saldo>=91 && saldo<=100){
        return "Lendário"
    }
    //Se vitórias for maior ou igual a 101 = Imortal
    if(saldo>101){
        return "Imortal"
    }
}