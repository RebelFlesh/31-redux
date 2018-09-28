import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Item from './Item';

import * as actions from '../actions/genre-actions';

class DashboardContainer extends Component {
  handleAdd = (genre) => {
    this.props.createGenre(genre);
  }
  handleUpdate = (genre) => {
    this.props.updateGenre(genre);
  }

  render(){
    return(
      <React.Fragment>
        <h2>Dashboard</h2>
        <Form handleComplete={this.handleAdd}/>
        {this.props.genres.map(genre => (
          <Item 
            key={genre._id} 
            genre={genre} 
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
    genres: state, //.genres,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createGenre: (genre) => dispatch(actions.createGenre(genre)),
  deleteGenre: (genre) => dispatch(actions.deleteGenre(genre)),
  updateGenre: (genre) => dispatch(actions.updateGenre(genre)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);