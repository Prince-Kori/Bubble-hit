var gameRunning = false;
var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var diffNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble" id="bubble" ">${diffNum}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1> Game Over! <br> You scored ${score} points. <br><br> <button id="startAgain" onclick="startAgain()">Start Again</button>
      `;
    }
  }, 1000);
}

document
  .querySelector("#pbtm")
  .addEventListener("click", function bubbleClicked(bubble) {
    var clickedNum = Number(bubble.target.textContent);
    if (clickedNum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

function startGame() {
  if (!gameRunning) {
    gameRunning = true;
    runTimer();
    makeBubble();
    getNewHit();
    document.getElementById("startGame").style.display = "none";
    document.getElementById("startAgain").style.display = "block";
  }
}

function startAgain() {
  console.log("startAgain clicked"); // Debugging statement

  timer = 60;
  score = 0;
  gameRunning = false;
  document.querySelector("#scoreVal").textContent = score;
  document.querySelector("#timerval").textContent = timer;
  document.querySelector("#pbtm").innerHTML = "";
  document.getElementById("startGame").style.display = "block";
  document.getElementById("startAgain").style.display = "none";
}

document.querySelector("#startGame").addEventListener("click", startGame);
document.querySelector("#startAgain").addEventListener("click", startAgain);

runTimer();
makeBubble();
getNewHit();
