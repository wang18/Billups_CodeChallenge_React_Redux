export const PlayGame = (myOpt, aiOpt, myName, AiName) =>{
    const game = {};
    game.pName=myName;
    game.AiName=AiName;
    game.myOpt=myOpt;
    game.aiOpt=aiOpt;
    if (myOpt === aiOpt) {
        game.result = 1;
    } else if (
        (aiOpt === "Rock" && myOpt === "Paper") ||
        (aiOpt === "Spoct" && myOpt === "Paper") ||
        (aiOpt === "Paper" && myOpt === "Scissors") ||
        (aiOpt === "Lizard" && myOpt === "Scissors") ||
        (aiOpt === "Lizard" && myOpt === "Rock") ||
        (aiOpt === "Scissors" && myOpt === "Rock") ||
        (aiOpt === "Paper" && myOpt === "Lizard") ||
        (aiOpt === "Spoct" && myOpt === "Lizard") ||
        (aiOpt === "Rock" && myOpt === "Spoct") ||
        (aiOpt === "Scissors" && myOpt === "Spoct")
    ) {
        game.result = 2;
    } else {
        game.result = 0;
    }
    return game;
}
