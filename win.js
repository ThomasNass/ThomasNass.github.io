const winner = localStorage.winner;
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const replayButton = document.querySelector("#replay");

h1.textContent = `Vinnaren är ${winner}!!`;

resetButton.addEventListener('click',function(){
    localStorage.clear();
    location.href = "start.html";
})
replayButton.addEventListener('click',function(){
    location.href = "game.html";
})


