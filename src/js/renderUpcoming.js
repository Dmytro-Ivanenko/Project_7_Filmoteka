// import { createElementsUpcoming } from './createElementsUpcoming';
// import { refs } from './refs';
// import Glide from '@glidejs/glide';

// export async function renderUpcoming() {
//   refs.upcomingList.innerHTML = '';
//   const { data } = await refs.fetchApi.fetchUpcoming();

//   const upcomingEl = data.results;

//   const upcomingElements = upcomingEl.map(elem =>
//     createElementsUpcoming(elem, refs.fetchApi)
//   );
//   refs.upcomingList.innerHTML = upcomingElements.join('');

//   var glide = new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 7,
//     autoplay: 2500,
//   });
//   glide.mount();
// }
