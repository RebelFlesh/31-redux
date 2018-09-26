import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';

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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.genres,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createGenre: (genre) => dispatch(actions.createGenre(genre)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);