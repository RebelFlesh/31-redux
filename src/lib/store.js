import { createStore } from 'redux';
import reducer from '../reducer/genre-reducer';

export default () => {
  return createStore(reducer);
}