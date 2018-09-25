import reducer from './genre-reducer';

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
});