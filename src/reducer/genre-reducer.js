export default (state = [], action = {}) => {
  switch(action.type) {
    case 'GENRE_CREATE':
      return [ ...state, action.payload ];
    default:
      return state;
  }
  
}