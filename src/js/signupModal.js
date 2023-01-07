const forms = document.querySelector('.forms');
const pswShowHide = document.querySelectorAll('.eye-icon');
const links = document.querySelectorAll('.link');
const loginLink = document.querySelector('.site-nav__link[data-auth-open]');
const loginContainer = document.querySelector('[data-action]');
const modalCloseBtn = document.querySelector('.modal-close-btn');

// *======= Show password =======*

pswShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll('.password');

    pwFields.forEach(password => {
      if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.classList.replace('bx-hide', 'bx-show');
        return;
      }
      password.type = 'password';
      eyeIcon.classList.replace('bx-show', 'bx-hide');
    });
  });
});

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    forms.classList.toggle('show-signup');
  });
});

// *======= Modal open =======*

loginLink.addEventListener('click', openLoginModal);
document.addEventListener('keydown', closeModal);
modalCloseBtn.addEventListener('click', openLoginModal);

function openLoginModal() {
  loginContainer.classList.toggle('visually-hidden');
}

// *======= Close modal with escape =======*

function closeModal(e) {
  if (e.key === 'Escape') {
    loginContainer.classList.add('visually-hidden');
    // document.removeEventListener('keydown', closeModal);
  }
}
