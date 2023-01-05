import { fullscreenBtn } from '../index';
const fullscreenUseTag = document.querySelector('[iconChange]');
const fullscreenSvgTag = document.querySelector('.fullscreen-icon');

const getFullscreenEl = () => {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullscreenElement
  );
};

export const fullscreenToggle = () => {
  if (!getFullscreenEl()) {
    document.documentElement
      .requestFullscreen()
      .then(() => {
        fullscreenBtn.classList.add('fullscreen-exit-btn');
      })
      .catch(e => {
        console.log(e);
      });
  }

  if (getFullscreenEl()) {
    document
      .exitFullscreen()
      .then(() => {
        fullscreenBtn.classList.remove('fullscreen-exit-btn');
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export const fullscreenEscExit = e => {
  console.log(e.key);

  console.log(e.code);
  if (e.code === 'Escape') {
    console.log(document.fullscreenElement);
  }
  //   console.log(getFullscreenEl());
  //   console.log(e.key);
  //   if (e.key === 'F12') {
  //     console.log(e.key);
  //     fullscreenBtn.classList.remove('fullscreen-exit-btn');
  //   }
};
