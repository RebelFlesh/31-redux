import uuid from 'uuid';

export const createGenre = (genre) => {
  genre._id = uuid();
  return { 
    type: 'GENRE_CREATE',
    payload: genre,
  }
}

export const deleteGenre = (genre) => {
  return{
    type: 'GENRE_DELETE',
    payload: genre,
  }
}