import reducer from './genre-reducer';
import { createGenre } from '../actions/genre-actions';

describe('genre-reducer', ()=> {
  it('returns inital state', ()=> {
    let result = reducer();
    expect(result).toEqual([]);
  });

  it('returns the state when unknown action is given', () => {
    let state = [{name:'Ethan'}];
    let result = reducer(state);
    expect(result).toBe(state);
  });

  it('returns new state with payload added when it recieves GENRE_CREATE action', () => {
    let state = [{ _id:1, name:'Ethan'}];
    let action = createGenre({name:'David'});
    let result = reducer(state,action);
    expect(result[0]).toBe(state[0]);
    expect(result[1].name).toBe('David');
    expect(result[1]._id).toBeDefined();
  });
});