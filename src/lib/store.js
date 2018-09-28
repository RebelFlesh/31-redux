import { createStore } from 'redux';
import reducer from '../reducer/index';

export default () => {
  return createStore(reducer);
}