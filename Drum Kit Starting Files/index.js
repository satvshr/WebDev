let pressed = false;

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.addEventListener("keydown", function(e) {
    whenTap(e.key);
    classAdd(e.key);
  });

  document.querySelectorAll("button")[i].addEventListener("click", function(){
    whenTap(this.textContent);
    classAdd(this.textContent);
  });
}

function whenTap(a) {

  if (a === "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (a === "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  if (a === "s") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if (a === "d") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (a === "j") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (a === "k") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (a === "l") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function classAdd(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
