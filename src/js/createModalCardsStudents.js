const backdrop = document.querySelector('.students-backdrop');

export function toggleModal() {
  backdrop.classList.toggle('is-hidden');
}

export function onClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
  }
}
