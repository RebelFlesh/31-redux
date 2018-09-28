import { createStore } from 'redux';
import reducer from '../reducer/playlist-reducer';

export default () => {
  return createStore(reducer);
}