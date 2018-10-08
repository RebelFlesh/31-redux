import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import logger from './logger';
import validation from './validation';

let middleware =[
  logger,
  validation,
]

export default () => {
  return createStore(reducer,
    applyMiddleware(...middleware)
  );
}