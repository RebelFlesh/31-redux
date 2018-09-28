import React, { Component } from 'react';

export default class SongForm extends Component {
  handleComplete = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
  }
  render(){
    return(
      <div>
        <h3>Add song!</h3>
        <form onSubmit={this.handleComplete}>
          <input type="text" name="title" placeholder="song title"/>
          <input type="text" name="author" placeholder="author/authors"/>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}