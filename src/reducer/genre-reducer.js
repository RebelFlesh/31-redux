export default (state = [], action = {}) => {
  switch(action.type) {
    case 'GENRE_CREATE':
      return [ ...state, action.payload ];
    case 'GENRE_DELETE':
      return state.filter(genre => genre._id !== action.payload._id)
    default:
      return state;
  }
  
}