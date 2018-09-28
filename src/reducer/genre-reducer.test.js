import reducer from './genre-reducer';
import { createPlaylist, deletePlaylist, updatePlaylist } from '../actions/genre-actions';

describe('playlist-reducer', ()=> {
  describe('PLAYLIST_CREATE', ()=>{
    it('returns inital state', ()=> {
      let result = reducer();
      expect(result).toEqual([]);
    });
  
    it('returns the state when unknown action is given', () => {
      let state = [{name:'Ethan'}];
      let result = reducer(state);
      expect(result).toBe(state);
    });
  
    it('returns new state with payload added when it recieves PLAYLIST_CREATE action', () => {
      let state = [{ _id:1, name:'Ethan'}];
      let action = createPlaylist({name:'David'});
      let result = reducer(state,action);
      expect(result[0]).toBe(state[0]);
      expect(result[1].name).toBe('David');
      expect(result[1]._id).toBeDefined();
    });
  });
  describe('PLAYLIST_DELETE', () => {
    it('removes a playlist with matching id, leaving an empty state', () => {
      let state = [{ _id:1, name:'Ethan'}];
      let action = deletePlaylist({ _id:1, name:'Ethan'});
      let result = reducer(state,action);
      expect(state).toBe(state);
      expect(result).toEqual([]);
    });
    it('removes a playlist from a list of playlists', () => {
      let state = [{ _id:1, name:'Ethan'},{ _id:2, name:'David'}];
      let action = deletePlaylist({ _id:1, name: 'Ethan'});
      let result = reducer(state,action);
      expect(result.length).toBe(1);
      expect(result[0]._id).toBe(2);
    });
  });
  describe('PLAYLIST_UPDATE', () => {
    it('updates the state for a single premade object', () => {
      let state = [{ _id:1, name:'Ethan'},{ _id:2, name:'David'}];
      let action = updatePlaylist({_id:1, name:'Jay'});
      let result = reducer(state,action);

      expect(result.length).toBe(2);
      expect(result[0]).toEqual({_id:1, name:'Jay'});
    });
  });
});