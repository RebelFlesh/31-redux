const validation = store => next => action => {
  const playlistValidation = action.type && action.type.startsWith('PLAYLIST');
  if (playlistValidation) {
    try {
      const playlist = action.payload;
      const notValid = !playlist.title || !playlist.discription;
      if (notValid) {
        throw new Error('VALIDATION ERROR: must include title and discription');
      }

      return next(action);
    } catch (err) {
      console.error(err);

      return next({
        type: action.type,
        payload: err,
        error: true,
      });
    }
  } else {
    return next(action);
  }
}

export default validation;