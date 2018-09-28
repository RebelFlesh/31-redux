import { combineReducers } from 'redux';

import playlistReducer from './playlist-reducer';
import songReducer from './song-reducer';

export default combineReducers({
  playlists : playlistReducer,
  songs : songReducer,
})