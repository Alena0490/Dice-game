//Basic variables
var totalScore, roundScore, activePlayer, dice, playGame;

newGame();

function newGame () {
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    //Reset values
    //vynulování
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;
    //skrytí kostky
    document.querySelector(".diceImage").style.visibility = "hidden";
    //texty do původního stavu
    document.querySelector("#name-0").textContent = "1st Player";
    document.querySelector("#name-1").textContent = "2nd Player";
    document.querySelector("#name-0").classList.remove("winner");
    document.querySelector("#name-1").classList.remove("winner");
    //obnovení výrazění
    document.querySelector("#name-0").classList.add("active");
    document.querySelector("#name-1").classList.remove("active");
}

document.querySelector(".start-game").addEventListener("click", newGame)


document.querySelector(".play").addEventListener("click",function(){
    if (playGame) {
          //Generuje náhodné číslo mezi 1 a 6
    var dice = Math.ceil(Math.random()*6)
    //Zobrazí správný obrázek
    var diceElement = document.querySelector(".diceImage")
    diceElement.src = `img/${dice}.png`
    diceElement.style.visibility = "visible"
    console.log(`Dice: img/${dice}.png`) 
    //Current score
    if (dice!==1) {
    roundScore = roundScore + dice
    document.getElementById("currentScore-" + activePlayer).textContent = roundScore;} else {
        roundScore = 0
        nextPlayer()}
    }
    })

    //Přepnutí hráče 
    function nextPlayer () {
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        roundScore = 0;
        document.getElementById("currentScore-0").textContent = 0;
        document.getElementById("currentScore-1").textContent = 0;
        document.querySelector(".diceImage").style.visibility = "hidden";
        document.querySelector("#name-0").classList.toggle("active");
        document.querySelector("#name-1").classList.toggle("active");
    }
    
    document.querySelector(".hold").addEventListener("click",function() {
        if (playGame) {
                    //uložit score
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        //
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer]

        if (totalScore[activePlayer] >= 20) {
            const winner = document.querySelector("#name-" + activePlayer);
            winner.textContent = "Vítěz!";
            winner.classList.add("winner");

            document.querySelector(".diceImage").style.visibility = "hidden";
            playGame = false;
        }
        //přepnout hráče
        nextPlayer()
        }

    } )
     


