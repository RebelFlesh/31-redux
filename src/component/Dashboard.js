import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Item from './Item';

import * as actions from '../actions/genre-actions';

class DashboardContainer extends Component {
  handleAdd = (genre) => {
    this.props.createGenre(genre);
  }

  render(){
    return(
      <React.Fragment>
        <h2>Dashboard</h2>
        <Form handleComplete={this.handleAdd}/>
        {this.props.genres.map(genre => (
          <Item key={genre._id} genre={genre}/>
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
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);