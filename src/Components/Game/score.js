
const score = (yourPick, playerPick, setYourScore, setPlayerScore, setScoreMessage) => {
    
    if (yourPick === "rock" && playerPick === "scissors") {
        setYourScore();
        setScoreMessage('You win');
    } else if (yourPick === "rock" && playerPick === "paper") {
        setPlayerScore();
        setScoreMessage('You lose');
    } else if (yourPick === "scissors" && playerPick === "paper") {
        setYourScore();
        setScoreMessage('You win');
    } else if (yourPick === "scissors" && playerPick === "rock") {
        setPlayerScore();
        setScoreMessage('You lose');
    } else if (yourPick === "paper" && playerPick === "rock") {
        setYourScore();
        setScoreMessage('You win');
    } else if (yourPick === "paper" && playerPick === "scissors") {
        setPlayerScore();
        setScoreMessage('You lose');
    } else if (yourPick === "paper" && playerPick === "paper"){
        setScoreMessage('Draw');
    } else if (yourPick === "rock" && playerPick === "rock") {
        setScoreMessage('Draw');
    }
    else if (yourPick === "scissors" && playerPick === "scissors") {
        setScoreMessage('Draw');
    }
};


export default score;
