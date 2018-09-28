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
      <React.Fragment>
        <div>{this.props.playlist.title}</div>
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
              handleDelete='Add delete'
            />
        )}
      </React.Fragment>
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
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(PlaylistItemContainer);