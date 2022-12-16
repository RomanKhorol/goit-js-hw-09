import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  timeDays: document.querySelector('.value[data-days]'),
  timeHours: document.querySelector('.value[data-hours]'),
  timeMinutes: document.querySelector('.value[data-minutes]'),
  timeSecond: document.querySelector('.value[data-seconds]'),
  timeFace: document.querySelector('.timer'),
  timeFaceItems: document.querySelectorAll('.field'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStart.setAttribute('disabled', 'disabled');
refs.timeFace.style.display = 'flex';
refs.timeFace.style.marginTop = '25px';
refs.timeFace.style.gap = '15px';
const newArray = refs.timeFaceItems;
console.log(refs.timeFaceItems);
for (let i = 0; i < newArray.length; i += 1) {
  newArray[i].style.display = 'flex';
  newArray[i].style.flexDirection = 'column';
  newArray[i].style.alignItems = 'center';
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.warning('Please choose a date in the future');
      refs.btnStart.setAttribute('disabled', 'disabled');
    } else {
      refs.btnStart.removeAttribute('disabled', 'disabled');
    }
  },
};

const datePickr = flatpickr('#datetime-picker', options);
const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const intervalId = setInterval(() => {
      const startTime = datePickr.selectedDates[0].getTime();
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime < 1000) {
        clearInterval(intervalId);
        this.isActive = false;
      }
      const convertTime = convertMs(deltaTime);
      console.log(convertTime);
      showTimerFace(convertTime);
    }, 1000);
  },
};

function onBtnStartClick() {
  timer.start();
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function showTimerFace({ days, hours, minutes, seconds }) {
  refs.timeDays.textContent = `${days}`;
  refs.timeHours.textContent = `${hours}`;
  refs.timeMinutes.textContent = `${minutes}`;
  refs.timeSecond.textContent = `${seconds}`;
}
