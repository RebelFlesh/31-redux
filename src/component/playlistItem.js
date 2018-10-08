import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './playlistForm';
import SongForm from './songForm';
import SongItem from './songItem';

import * as songActions from '../actions/song-actions';

class PlaylistItemContainer extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.playlist)
  }

  render(){
    return(
      <div className='bordered playlist'>
        <h2>{this.props.playlist.title}</h2>
        <Form handleComplete={this.props.handleComplete} currentPlaylist={this.props.playlist}/>
        <button onClick={this.deleteObject}>Delete</button>
        <SongForm 
          handleComplete={this.props.createSong} 
          playlist_id={this.props.playlist._id}
        />
        {this.props.songs
          .filter(song => song.playlist === this.props.playlist._id)
          .map(song => 
            <SongItem
              key={song._id}
              song={song}
              handleDelete={this.props.deleteSong}
              handleComplete={this.props.updateSong}
            />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createSong: (song) => dispatch(songActions.createSong(song)),
  deleteSong: (song) => dispatch(songActions.deleteSong(song)),
  updateSong: (song) => dispatch(songActions.updateSong(song)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(PlaylistItemContainer);