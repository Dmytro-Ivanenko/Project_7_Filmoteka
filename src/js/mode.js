const body = document.querySelector('body');
export const modeCheckbox = document.querySelector('.mode-checkbox');

export const switchMode = () => {
  if (localStorage.getItem('mode') === 'dark') {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
  loadMode();
};

export const loadMode = () => {
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('night');
    modeCheckbox.classList.add('mode-checkbox_sun');
  } else {
    body.classList.remove('night');
    modeCheckbox.classList.remove('mode-checkbox_sun');
  }
};

modeCheckbox.addEventListener('click', switchMode);

loadMode();
