// import { galleryStudents } from './galleryStudents.js';

// console.log(galleryStudents);

// export function createModalCardsStudents(galleryStudents) {
//     return galleryStudents
//            .map(({ photo, name, profession, email, GitHub }) => {
//             return `<div class="modalcard">
  
//     <img class="modalcard__image"
//       src="${photo}"
//       alt="${name}"
//     />
//     <div class="modalcard__description">
// <p class="modalcard__name">${name}</p>
// <p class="modalcard__name">${profession}</p>
// <p class="modalcard__email">${email}</p>
// <p class="modalcard__github">${GitHub}</p>
//     </div>
  
// </div>`;
//         })
//         .join('');
   
// }

// export function createModalCardsStudents(galleryStudents) {
//     const {
//         photo,
//         name,
//         profession,
//         email,
//         GitHub
//     } = galleryStudents;

//     return `<div class="modalcard">
  
//     <img class="modalcard__image"
//       src="${photo}"
//       alt="${name}"
//     />
//     <div class="modalcard__description">
// <p class="modalcard__name">${name}</p>
// <p class="modalcard__name">${profession}</p>
// <p class="modalcard__email">${email}</p>
// <p class="modalcard__github">${GitHub}</p>
//     </div>
  
// </div>`;
// }

// const modal = document.querySelector('#myModal');
// const btn = document.querySelector('#myBtn');
// const span = document.querySelector('.close');

// btn.addEventListener('click', openModal)

export function openModal() {
   modal.style.display = "block";
}
// span.addEventListener('click', closeModal)

export function closeModal() {
   modal.style.display = "none";
}
// window.addEventListener('click', onClick)

export function onClick(event) {
   if (event.target === modal) {
    modal.style.display = "none";
  }
}