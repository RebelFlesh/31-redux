import React, { Component } from 'react';

export default class SongForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let song = {}
    song.title = event.target.title.value;
    song.artist = event.target.artist.value;
    song.playlist = this.props.playlist_id;
    
    this.props.handleComplete(song);
  }
  render(){
    return(
      <div>
        <h3>Add a song!</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="song title"/>
          <input type="text" name="artist" placeholder="artist"/>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}