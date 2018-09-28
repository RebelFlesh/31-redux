import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Item from './Item';

import * as actions from '../actions/genre-actions';

class DashboardContainer extends Component {
  handleAdd = (playlist) => {
    this.props.createGenre(playlist);
  }
  handleUpdate = (playlist) => {
    this.props.updateGenre(playlist);
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
            handleDelete={this.props.deleteGenre}
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
  createGenre: (playlist) => dispatch(actions.createGenre(playlist)),
  deleteGenre: (playlist) => dispatch(actions.deleteGenre(playlist)),
  updateGenre: (playlist) => dispatch(actions.updateGenre(playlist)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);