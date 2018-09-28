import uuid from 'uuid';

export const createSong = (song) => {
  song._id = uuid();
  return{
    type:'SONG_CREATE',
    payload: song,
  }
}

export const deleteSong = (song) => {
  return{
    type:'SONG_DELETE',
    payload: song,
  }
}