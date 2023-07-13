const jogada1 = "tesoura";
const jogada2 = "papel";

if (jogada1 === jogada2) {
    console.log("Empate. Jogar novamente.");
} else
    if (jogada1 === "papel" && jogada2 === "tesoura") {
        console.log("Tesoura.");
    } else
        if (jogada2 === "pedra") {
            console.log("Papel.");
        }
        else
            if (jogada1 === "tesoura" && jogada2 === "papel") {
                console.log("Tesoura.");
            }
            else
                if (jogada2 === "pedra") {
                    console.log("Pedra.");
                }
                else
                    if (jogada1 === "pedra" && jogada2 === "tesoura") {
                        console.log("Pedra.");
                    }
                    else
                        if (jogada2 === "papel") {
                            console.log("Papel.");
                        }
