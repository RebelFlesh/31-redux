import React, { Component } from 'react';
import Form from './Form';

export default class GenreItem extends Component {
  render(){
    return(
      <React.Fragment>
        <div>{this.props.genre.title}</div>
        <Form/>
        <button>Delete</button>
      </React.Fragment>
    )
  }
}