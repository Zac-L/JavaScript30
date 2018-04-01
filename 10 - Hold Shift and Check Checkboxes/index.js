
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  let inBetween = false;
  if(event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log('starting inBetween');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));