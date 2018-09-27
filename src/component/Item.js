import React, { Component } from 'react';
import Form from './Form';

export default class GenreItem extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.genre)
  }

  render(){
    return(
      <React.Fragment>
        <div>{this.props.genre.title}</div>
        <Form/>
        <button onClick={this.deleteObject}>Delete</button>
      </React.Fragment>
    )
  }
}