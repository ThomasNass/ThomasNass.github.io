playerCount = document.querySelector("#playerCount");
winningScore = document.querySelector("#winningScore");
button = document.querySelector("button");

// sending score to win to the next page
winningScore.addEventListener("change", function () {
    localStorage.winningScore = parseInt(this.value);

})

// remove preexisting player fields and adding new ones
playerCount.addEventListener("change", function () {
    removePlayer();
    playerLimit = parseInt(this.value);
    addPlayer(playerLimit);
})

// adding text fields for player names to go in
const addPlayer = function (players) {
    let label = document.createElement("label");
    label.setAttribute("type", "label")
    label.textContent = "Skriv in spelarnas namn";
    let parent = document.querySelector("#textFields");
    parent.appendChild(label)
    for (let i = 0; i < players; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", `Spelare ${i + 1}`);
        input.setAttribute("class", "players");
        parent.appendChild(input);
    }
}

const removePlayer = function () {
    const parent = document.querySelector("#textFields")
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

// send player names to the next page and script
addEventListener("submit", function (e) {
    e.preventDefault();
    const arrPlayers = [];
    const players = document.querySelectorAll(".players");
    for (var i = 0; i < players.length; i++) {
        arrPlayers.push(players[i].value);
    }
    localStorage.myPlayers = JSON.stringify(arrPlayers);
    location.href = "game.html";
})
