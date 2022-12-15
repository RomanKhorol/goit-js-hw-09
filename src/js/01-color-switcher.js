const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};
refs.buttonStart.addEventListener('click', onBtnStartClick);
refs.buttonStop.addEventListener('click', onBtnStopClick);

const timer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};

function onBtnStartClick() {
  timer.start();
  refs.buttonStart.setAttribute('disabled', 'disabled');
  refs.buttonStop.removeAttribute('disabled', 'disabled');
}
