export default (state = [], action = {}) => {
  switch(action.type) {
    case 'GENRE_CREATE':
      return [ ...state, action.payload ];
    case 'GENRE_DELETE':
      return state.filter(genre => genre._id !== action.payload._id);
    case 'GENRE_UPDATE':
      return state.map(genre=> genre._id === action.payload._id ? action.payload : genre);
    default:
      return state;
  }
  
}