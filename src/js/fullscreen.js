import { fullscreenBtn } from '../index';

const getFullscreenEl = () => {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullscreenElement
  );
};

document.addEventListener('fullscreenchange', () => {
  fullscreenBtn.classList.toggle('fullscreen-exit-btn');
});

export const fullscreenToggle = () => {
  if (!getFullscreenEl()) {
    document.documentElement.requestFullscreen().catch(e => {
      console.log(e);
    });
  }

  if (getFullscreenEl()) {
    document.exitFullscreen().catch(e => {
      console.log(e);
    });
  }
};
