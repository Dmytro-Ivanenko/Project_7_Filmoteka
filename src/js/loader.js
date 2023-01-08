import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const loader = () => {
  return Loading.standard('Loading...', {
    svgColor: '#ff6b08',
  });
};

export const loaderRemove = () => {
  Loading.remove();
};
