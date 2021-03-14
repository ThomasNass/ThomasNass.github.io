
const ordspråkDisplay = document.querySelector('#display');
const ordspråkButton = document.querySelector("#button");
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

for (let i = 0; i < numberOfPlayers.length; i++) {

}


// function MakePlayer(score, button, display) {
//     this.score = score;
//     this.button = button;
//     this.display = display;
// }
// for (let i = 0; i < numberOfPlayers.length; i++) {
//     = MakePlayer()
// }

// const p1 = {
//     score: 0,
//     button: document.querySelector("#p1Button")
// }

// const p2 = {
//     score: 0,
//     button: document.querySelector("#p2Button")
// }

// const p3 = {
//     score: 0,
//     button: document.querySelector("#p3Button")
// }

// const p4 = {
//     score: 0,
//     button: document.querySelector("#p4Button")
// }

// const p5 = {
//     score: 0,
//     button: document.querySelector("#p5Button")
// }

// const p6 = {
//     score: 0,
//     button: document.querySelector("#p6Button")
// }

const array = ["Surt sa räven om rönnbären", "Morgonstund har guld i mund",
    "Barka åt skogen", "Hålla sig på mattan"];


function ordspråk() {
    ordspråkDisplay.innerHTML =
        array[Math.floor(Math.random() * array.length)];
}
ordspråkButton.addEventListener('click', function () {
    ordspråk();
})

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



// detta funkade inte
// for (let i = 0; i < numberOfPlayers.length; i++) {
//     let x = `p${i + 1}`;
//     console.log(x);
//     x.button.addEventListener("click", () => {
//         updateScores(x)
//     })
// }

// document.addEventListener('click', function (e) {
//     if (e.target && e.target.class == 'blueButton') {
//         console.log(e.target.class)
//         updateScores(this)
//     }
// });

// p1.button.addEventListener("click", () => {
//     updateScores(p1)
// })

// p2.button.addEventListener("click", () => {
//     updateScores(p2)
// })
// p3.button.addEventListener("click", () => {
//     updateScores(p3)
// })
// p4.button.addEventListener("click", () => {
//     updateScores(p4)
// })
// p5.button.addEventListener("click", () => {
//     updateScores(p5)
// })
// p6.button.addEventListener("click", () => {
//     updateScores(p6)
// })
