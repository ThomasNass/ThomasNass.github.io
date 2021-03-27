const timerButton = document.querySelector('#timerButton');
const ordspråkDisplay = document.querySelector('#display');
const ordspråkButton = document.querySelector("#ordspråkButton");
const winningDisplay = document.querySelector("#wDisplay");
const numberOfPlayers = JSON.parse(localStorage.myPlayers);
const winningScore = parseInt(localStorage.winningScore);
const timerDuration = parseInt(localStorage.timer);
winningDisplay.textContent = winningScore;
let isGameOver = false;
timerButton.disabled = true;

// function to dynamically add player buttons
// with the names from local storage
for (let i = 0; i < numberOfPlayers.length; i++) {
    let playerButton = document.createElement("button");
    if (i % 2 === 0) {
        playerButton.setAttribute("class", "blueButton");
    }
    else {
        playerButton.setAttribute("class", "yellowButton");
    }
    playerButton.setAttribute("name", `${numberOfPlayers[i]}`);
    playerButton.textContent = `${numberOfPlayers[i]}, poäng: 0`;
    let parent = document.querySelector("#playerButtons");
    parent.appendChild(playerButton);
    numberOfPlayers[i] = { score: 0, button: playerButton };
    numberOfPlayers[i].button.addEventListener("click", () => {
        updateScores(numberOfPlayers[i]);
    })
    numberOfPlayers[i].button.disabled = true;
}



const array = ["Surt sa räven om rönnbären", "Morgonstund har guld i mund",
    "Barka åt skogen", "Hålla sig på mattan"];


ordspråkButton.addEventListener('click', function () {
    ordspråk();
})

timerButton.addEventListener('click', function () {
    startTimer();
})

let interval = null;

function startTimer() {
    timerButton.disabled = true;
    for (let i = 0; i < numberOfPlayers.length; i++) {
        numberOfPlayers[i].button.disabled = false;
    }
    let timer = timerDuration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        ordspråkDisplay.textContent = minutes + ":" + seconds;
        if (timer === 0) {
            clearTimer(interval);
        }
        else
            timer--;
    }, 1000);
}

function clearTimer(interval) {
    ordspråkDisplay.textContent = "Skicka telefonen till nästa person.";
    clearInterval(interval);
    ordspråkButton.disabled = false;
}

function ordspråk() {
    ordspråkDisplay.textContent =
        array[Math.floor(Math.random() * array.length)];
    ordspråkButton.disabled = true;
    timerButton.disabled = false;
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
    ordspråkButton.disabled = false;
    clearTimer(interval);
    for (let i = 0; i < numberOfPlayers.length; i++) {
        numberOfPlayers[i].button.disabled = true;
    }
}



