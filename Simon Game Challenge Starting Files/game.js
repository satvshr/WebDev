let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let count = 0;

function nextSequence() {
  level++;
  count++;
  let randomNumber = Math.floor(Math.random() * 4);
  let buttonColors = ["red", "blue", "green", "yellow"];
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("Level " + level);
}

function verify() {
  if (checkArray()) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 500);
      userClickedPattern = [];
    }
    
  } else {
    count = level = 0;
    gamePattern = userClickedPattern = [];
    handleError();
  }
}

function handleError() {
  playSound("wrong");
  $("h1").text("Game Over! Press a key to try again");
  $("body").addClass("red");
  setTimeout(function () {
    $("body").removeClass("red");
  }, 200);
}

function playSound(name) {
  let sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}

function checkArray() {
  let flag = 0;
  for (let i = 0; userClickedPattern.length > i; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
      flag = 1;
    }
  }
  if (flag === 1) {
    return false;
  } else {
    return true;
  }
}

$(".btn").on("click", function () {
  if (count !== 0) {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    verify();
  }
});

$(document).keypress(function () {
  if (count === 0) {
    nextSequence();
  }
});
