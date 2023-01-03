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
// const modalCardStudents = document.querySelector('#myBtnCardStudents');

export function openModalCardStudents() {
   modalCardStudents.style.display = "block";
}
// span.addEventListener('click', closeModal)

export function closeModalCardStudents() {
  modalCardStudents.style.display = "none";
}
// window.addEventListener('click', onClick)

export function onClickStudents(event) {
  
   if (event.target === 'modal-students') {
   modalCardStudents.style.display = "none";
  }
}