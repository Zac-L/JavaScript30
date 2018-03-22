

const hoursHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now =  new Date();

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360) + 90;

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);