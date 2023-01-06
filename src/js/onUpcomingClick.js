import { onUpcomingClick } from './onCardClick';

export const slides = document.querySelector('.glide__slides');

slides.addEventListener('click', onUpcomingClick);

// ============================== onUpcomingClick ==================================
// Переїхала в модуль onCardClick бо там простіше працювати з
// currentMovie і не треба робити купу експортів
// =================================================================================
