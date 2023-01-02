import { body } from '../index';

export const switchMode = () => {
  // const body = document.querySelector('body');
  const span = document.querySelector('.span-mode');
  span.classList.toggle('span-mode--night');

  if (span.classList.contains('span-mode--night')) {
    span.innerHTML = 'day <br/> mode';
  } else {
    span.innerHTML = 'night <br/> mode';
  }
  body.classList.toggle('night');
};
