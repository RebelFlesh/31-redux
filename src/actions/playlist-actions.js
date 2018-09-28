import uuid from 'uuid';

export const createPlaylist = (playlist) => {
  playlist._id = uuid();
  return { 
    type: 'PLAYLIST_CREATE',
    payload: playlist,
  }
}

export const deletePlaylist = (playlist) => {
  return{
    type: 'PLAYLIST_DELETE',
    payload: playlist,
  }
}

export const updatePlaylist = (playlist) => {
  return{
    type: 'PLAYLIST_UPDATE',
    payload: playlist,
  }
}