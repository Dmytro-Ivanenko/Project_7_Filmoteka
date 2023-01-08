const body = document.querySelector('body');
export const modeCheckbox = document.querySelector('.mode-checkbox');

export const switchMode = () => {
  body.classList.toggle('night');
};

modeCheckbox.addEventListener('click', switchMode);
