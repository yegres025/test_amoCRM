const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    if(seconds < 0) {
      timerEl.textContent('Entry valid number')
    }
    setInterval(() => {
      seconds -= 1;
      let currentHourse = seconds / 60 / 60;
      if (currentHourse > 23) {
        currentHourse = 0;
      }
      let currentMinutes = seconds / 60 - Math.trunc(currentHourse) * 60;
      let currentSeconds = seconds % 60;

      currentHourse < 10 ? currentHourse = '0' + currentHourse : currentHourse
      currentMinutes < 10 ? currentMinutes = Number('0' + currentMinutes) : currentMinutes
      currentSeconds < 10 ? currentSeconds = '0' + currentSeconds : currentSeconds
      
      seconds >= 0
        ? (timerEl.textContent =
            Math.trunc(currentHourse) +
            ':' +
            Math.trunc(currentMinutes) +
            ':' +
            currentSeconds)
        : (timerEl.textContent = 'End');
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const value = inputEl.value;
  inputEl.value = value.replace(/\D/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = inputEl.value;

  animateTimer(seconds);

  inputEl.value = '';
});

// либо использовать либу, такую как 'date fns' или ей подобную и не городить огород =)