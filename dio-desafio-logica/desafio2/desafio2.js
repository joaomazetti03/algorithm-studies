//Atribuições de variáveis
let vitorias = 100;
let derrotas = 50;
let elo = "";

//criação da função
function calculaRank (vitorias, derrotas){
    return saldoVitorias = vitorias - derrotas;
}

//Validação de elo
if(vitorias <= 10){
    elo = "Ferro";
} else if (vitorias > 10 && vitorias <=20){
    elo = "Bronze";
} else if (vitorias > 20 && vitorias <=50){
    elo = "Prata";
} else if (vitorias > 50 && vitorias <= 80){
    elo = "Ouro";
} else if (vitorias > 80 && vitorias <= 90){
    elo = "Diamante";
} else if (vitorias > 90 && vitorias <= 100){
    elo = "Lendário";
} else {
    elo = "Imortal";
}

//Saída
console.log(`O Herói tem de saldo de ${calculaRank(vitorias, derrotas)} está no nível de ${elo}`);
