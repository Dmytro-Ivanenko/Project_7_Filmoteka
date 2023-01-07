import { body } from '../index';

export const switchMode = () => {
  body.classList.toggle('night');
};
