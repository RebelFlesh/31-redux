import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './playlistForm';
import Item from './playlistItem';

import * as actions from '../actions/playlist-actions';

class DashboardContainer extends Component {
  handleAdd = (playlist) => {
    this.props.createPlaylist(playlist);
  }
  handleUpdate = (playlist) => {
    this.props.updatePlaylist(playlist);
  }

  render(){
    return(
      <React.Fragment>
        <h2>Dashboard</h2>
        <Form handleComplete={this.handleAdd}/>
        {this.props.playlists.map(playlist => (
          <Item 
            key={playlist._id} 
            playlist={playlist} 
            handleDelete={this.props.deletePlaylist}
            handleComplete={this.handleUpdate}
            />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(actions.createPlaylist(playlist)),
  deletePlaylist: (playlist) => dispatch(actions.deletePlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(actions.updatePlaylist(playlist)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);