const timerButton = document.querySelector('#timerButton');
const ordspråkDisplay = document.querySelector('#display');
const ordspråkButton = document.querySelector("#ordspråkButton");
let winningDisplay = document.querySelector("#wDisplay");
let numberOfPlayers = JSON.parse(localStorage.myPlayers)
const winningScore = parseInt(localStorage.winningScore);
winningDisplay.textContent = winningScore;
let isGameOver = false;

// function to dynamically add player buttons
// with the names from local storage
for (let i = 0; i < numberOfPlayers.length; i++) {
    let playerButton = document.createElement("button");
    playerButton.setAttribute("id", `p${[i + 1]}Button`);
    if (i % 2 === 0) {
        playerButton.setAttribute("class", "blueButton");
    }
    else {
        playerButton.setAttribute("class", "yellowButton")
    }
    playerButton.setAttribute("name", `${numberOfPlayers[i]}`);
    playerButton.textContent = `${numberOfPlayers[i]}, poäng: 0`;
    let parent = document.querySelector("#playerButtons");
    parent.appendChild(playerButton);
    numberOfPlayers[i] = { score: 0, button: playerButton };
    numberOfPlayers[i].button.addEventListener("click", () => {
        updateScores(numberOfPlayers[i])
    })
}


const array = ["Surt sa räven om rönnbären", "Morgonstund har guld i mund",
    "Barka åt skogen", "Hålla sig på mattan"];


function ordspråk() {
    ordspråkDisplay.innerHTML =
        array[Math.floor(Math.random() * array.length)];
}

ordspråkButton.addEventListener('click', function () {
    ordspråk();
})

timerButton.addEventListener('click', function(){
    let twoMinutes = 60 * 2,
        display = ordspråkDisplay;
    startTimer(twoMinutes, display);
})

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function updateScores(player) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.button.textContent = `${player.button.name} poäng: ${player.score}`;
            localStorage.winner = player.button.name;
            location.href = "win.html";
        }

    }
    player.button.textContent = `${player.button.name} poäng: ${player.score}`;
}



