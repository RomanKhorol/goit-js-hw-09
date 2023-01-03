import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  inputStep: document.querySelector('input[name = "step"]'),
  inputDelay: document.querySelector('input[name = "delay"]'),
  inputAmount: document.querySelector('input[name = "amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let delay = Number(refs.inputDelay.value);
  let position = 0;
  for (let i = 0; i <= refs.inputAmount.value - 1; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => refs.form.reset());
    delay += Number(refs.inputStep.value);
  }
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position: position, delay: delay });
        } else {
          reject({ position: position, delay: delay });
        }
      }, delay);
    });
  }
}
