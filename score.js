// Iteration 5: Store the player score and display it on the game over screen
const score = document.querySelector("#score-board");
const scr = localStorage.getItem("score") || 0;
console.log(scr)
score.innerText = scr 

const pa = document.querySelector("#play-again-button");

pa.addEventListener("click", ()=>{
    window.location.href = "game.html";
    localStorage.removeItem("score");
});