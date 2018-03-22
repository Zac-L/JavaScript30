// Solution for wes bos JS30 challenge course

window.addEventListener('keydown', ({ keyCode }) => {

  // Finding the data attribute associated with the corresponding key press
  // if the key pressed matches, it will play the sound.

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  // stops the function if no audio found; Else its runs the code below it. 
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
});

// destructured propertyName from the event & looks for the transform transition 
function removeTransition({ propertyName }) {
  if(propertyName !== 'transform') return;

  this.classList.remove('playing');
}

// Grabs everything with the className .key
// loops through the array and listens for transition end event, then removes.
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
