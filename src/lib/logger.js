const logger = store => next => action => {
  console.log('__DISPATCHING_ACTION__', action);

  try {
    let result = next(action);
    console.log('__NEW_STATE__', store.getState());
    return result;
  } catch (error) {
    error.action = action;
    console.error('__ERROR__', error);
    return error;
  }
}

export default logger;