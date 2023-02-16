const OPEN_CLASSNAME = "open";
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  if (navMenu.classList.contains(OPEN_CLASSNAME)) {
    navMenu.classList.remove(OPEN_CLASSNAME);
  } else {
    navMenu.classList.add(OPEN_CLASSNAME);
  }
}


const audio = new Audio("js/vatra.mp3")
var timerDiv = document.getElementById("timer");
var timerButton = document.getElementById("timerButton");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 300;
var intervalId;

timerButton.addEventListener('click', () => {
  timerButton.style.display = "none";
  timerDiv.style.display = "block";
  intervalId = setInterval(setTime, 1000);
})

function setTime() {
  --totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  if (totalSeconds == 0) {
    clearInterval(intervalId);
    audio.play();
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  }
  else {
    return valString;
  }
}

var nudesButton = document.getElementById("nudesButton");
nudesButton.addEventListener('click', () => {
  alert("Ахахахаахах попалась на гачок")
});