export default (state = [], action = {}) => {
  switch(action.type) {
    case 'SONG_CREATE':
      return [...state, action.payload];
    default:
      return state;
  }
}