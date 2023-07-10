// Iteration 2: Generate 2 random number and display it on the screen
n1 = Math.floor(Math.random()*100)
n2 = Math.floor(Math.random()*100)

var scr = localStorage.getItem("score") || 0
console.log(scr)

console.log(n1,n2)

const nh = document.querySelectorAll(".number-holder")
nh[0].innerText = n1;
nh[1].innerText = n2;

const timer = document.querySelector("#timer");
timer.innerText=10;
startTimer();


// Iteration 3: Make the options button functional
const gt = document.querySelector("#greater-than");
const et = document.querySelector("#equal-to");
const lt = document.querySelector("#lesser-than");

gt.addEventListener("click",(el)=>{
    if(checkTrue("gt")){
        window.location.href = "game.html"
    }
    else{
        window.location.href = "gameover.html"
    }
});
lt.addEventListener("click",(el)=>{
    if(checkTrue("lt")){
        window.location.href = "game.html"
    }
    else{
        window.location.href = "gameover.html"
    }
});
et.addEventListener("click",(el)=>{
    if(checkTrue("et")){
        window.location.href = "game.html";
    }
    else{
        window.location.href = "gameover.html";
    }
});







function checkTrue(p){
    if(n1>n2 && p == "gt"){
        scr = 1 + +scr
        localStorage.setItem("score",scr);
        return true
    }
    else if(n1<n2 && p == "lt"){
        scr = 1 + +scr
        localStorage.setItem("score",scr);
        return true
    }
    else if(n1==n2 && p == "et") {
        scr = 1 + +scr
        localStorage.setItem("score",scr);
        return true
    }
    else{
        return false
    }
}



// Iteration 4: Build a timer for the game
function startTimer(){
    setInterval(()=>{
        timer.innerText -= 1
        if(timer.innerText <= 0){
            window.location.href = "gameover.html";
        }
    },1000)
}




