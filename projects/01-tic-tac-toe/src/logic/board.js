import { WINNER_COMBOS } from "../constants";
//Chequea el tablero para establecer el ganador
export const checkWinnerFrom = (boardToCheck) => {
    //Aqui estamos revisando todas las combinaciones ganadoras para ver si X u O GANO
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            //Verifico la posicion hay algo 
            boardToCheck[a] &&
            //Aqui verifico si en la posicion a y b hay lo mismo es decir (X u O)
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    // Sino hay ganador entonces retorneme null y siga 
    return null
}


//Revisamos si hay empate , si no ha espacios vacios en el tablero 
export const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
}