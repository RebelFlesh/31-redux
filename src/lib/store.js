import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import logger from './logger';

let middleware =[
  logger,
]

export default () => {
  return createStore(reducer,
    applyMiddleware(...middleware)
  );
}