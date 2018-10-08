import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './playlistForm';
import Item from './playlistItem';

import * as actions from '../actions/playlist-actions';
import { deletePlaylistSongs } from '../actions/song-actions';

class DashboardContainer extends Component {
  handleAdd = (playlist) => {
    this.props.createPlaylist(playlist);
  }
  handleUpdate = (playlist) => {
    this.props.updatePlaylist(playlist);
  }
  handleDelete = (playlist) => {
    this.props.deletePlaylist(playlist);
    this.props.deletePlaylistSongs(playlist);
  }

  render(){
    return(
      <React.Fragment>
        <Form handleComplete={this.handleAdd}/>
        {this.props.playlists.map(playlist => (
          <Item 
            key={playlist._id} 
            playlist={playlist} 
            handleDelete={this.handleDelete}
            handleComplete={this.handleUpdate}
            />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
    songs: state.songs
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(actions.createPlaylist(playlist)),
  deletePlaylist: (playlist) => dispatch(actions.deletePlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(actions.updatePlaylist(playlist)),
  deletePlaylistSongs: (song) => dispatch(deletePlaylistSongs(song)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);