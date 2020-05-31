
//
// Functions
//
function playSoundForKey(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play()
      break;

    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'l':
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      break;

  }
}

//
// Key press event
//
document.addEventListener('keydown', (e) => {
  playSoundForKey(e.key);
  playButtonAnimationFor(e.key);
});

//
// Get all drum buttons
//
var buttons = document.querySelectorAll(".drum");

//
// Add click event listener to all drum buttons
//
buttons.forEach(function (button) {
  button.addEventListener("click", function() {
    playSoundForKey(button.innerHTML);
    playButtonAnimationFor(button.innerHTML);
  });
})

//
// Animation
//
function playButtonAnimationFor(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100); // duration in ms
}
