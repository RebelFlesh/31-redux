export default (state = [], action = {}) => {
  switch(action.type) {
    case 'SONG_CREATE':
      return [...state, action.payload];
    case 'SONG_DELETE':
      return state.filter(song => song._id !== action.payload._id);
    default:
      return state;
  }
}