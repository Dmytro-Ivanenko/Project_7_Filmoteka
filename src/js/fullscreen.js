export const fullscreenBtn = document.querySelector('.fullscreen-btn');

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
    document.documentElement.requestFullscreen();
  }

  if (getFullscreenEl()) {
    document.exitFullscreen();
  }
};

fullscreenBtn.addEventListener('click', fullscreenToggle);
