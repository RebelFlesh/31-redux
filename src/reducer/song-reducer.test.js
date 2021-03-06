import reducer from './song-reducer';
import { createSong, deleteSong, deletePlaylistSongs, updateSong  } from '../actions/song-actions'

describe('song-reducer', () => {
  it('returns the intial state without valid aciton given', () => {
    //No aciton
    let state = [{title:'Yellow Submarine', artist:'The Beatles'}];
    
    let result = reducer(state);

    expect(result).toBe(state);

    //Bad action given
    let action = {type:'SOMETHING', payload:'NOTHING'};
  
    let testTwoResult = reducer(state,action);

    expect(testTwoResult).toBe(state);
  });
  describe('SONG_CREATE', () => {
    it('creates a new song in an empty list', ()=> {
      let state = [];
      let action = createSong({title:'Help', artist:'The Beatles'});
      
      let result = reducer(state,action);

      expect(result[0].title).toBe('Help');
      expect(result[0].artist).toBe('The Beatles');
      expect(result[0]._id).toBeDefined();
    });
    it('adds a new song to a list', () => {
      let state = [{title:'Let Her Be', artist:'The Beatles'}];
      let action = createSong({title:'Hey Jude', artist:'The Beatles'});

      let result = reducer(state,action);

      expect(result[0].title).toBe('Let Her Be');
      expect(result[1].title).toBe('Hey Jude');
      expect(result.length).toBe(2);
    });
  });
  describe('SONG_DELETE', () => {
    it('removes a song with a matching object', () => {
      let state = [{ _id:1, title:'Norwigean Wood', artist:'The Beatles'},{ _id:2, title:'A Day in the Life', artist:'The Beatles'}];
      let action = deleteSong({ _id:1, title:'Norwigean Wood', artist:'The Beatles'});

      let result = reducer(state,action);

      expect(result.length).toBe(1);
      expect(result[0]._id).toBe(2);
    });
  });
  describe('SONGS_DELTE', () => {
    it('filters out songs with a given playlist id', () => {
      let state =[
        {_id:1, title:'Magical Mystry Tour', artist:'The Beatles', playlist:1},
        {_id:2, title:'I Wanna Hold Your Hand', artist:'The Beatles', playlist:2},
        {_id:3, title:'While my guitar gently sleeps', artist:'The Beatles', playlist:1},
      ];
      let action = deletePlaylistSongs({_id:1, title:'Playlist 1', discription:'A list of songs'});

      let result = reducer(state, action);

      expect(result.length).toBe(1);
      expect(result).toEqual([{_id:2, title:'I Wanna Hold Your Hand', artist:'The Beatles', playlist:2},])
    });
  });
  describe('SONG_UPDATE', () => {
    it('updates a song with a matching _id', () => {
      let state = [{_id:1, title:'Rocket Raccoon', artist:'The Beatles'}];
      let action = updateSong({_id:1, title:'Rocky Raccoon', artist:'The Beatles'})
    
      let result = reducer( state, action );

      expect(result[0].title).toBe('Rocky Raccoon');
      expect(result[0].artist).toBe('The Beatles');
    });
  });
});