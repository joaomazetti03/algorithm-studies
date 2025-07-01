import java.util.Scanner;

public class Challenge {
    public static void main(String[] args) {
        //importando scanner para coletar dados do usuário
        Scanner sc = new Scanner(System.in);

        //declarando variáveis
        String nomeHeroi;
        int quantXP;
        String elo = "";

        //coletando respostas
        System.out.print("Digite o nome do herói: ");
        nomeHeroi = sc.nextLine();
        System.out.print("Digite o quantidade de XP: ");
        quantXP = sc.nextInt();

        //validação
        if(quantXP <= 1000){
            elo = "Ferro";
        } else if(quantXP > 1000 && quantXP <= 2000){
            elo = "Bronze";
        } else if(quantXP > 2000 && quantXP <= 5000){
            elo = "Prata";
        } else if(quantXP > 5000 && quantXP <= 7000){
            elo = "Ouro";
        } else if(quantXP > 7000 && quantXP <= 8000){
            elo = "Platina";
        } else if(quantXP > 8000 && quantXP <= 9000){
            elo = "Ascendente";
        } else if(quantXP > 9000 && quantXP <= 10000){
            elo = "Imortal";
        } else if(quantXP > 10000){
            elo = "Radiante";
        }

        //saida
        System.out.println("O Herói de nome " + nomeHeroi + " está no nível " + elo);
    }
}
