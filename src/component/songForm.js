import React, { Component } from 'react';

export default class SongForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let song = {}
    if(this.props.song){
      console.log(this.props.song._id);
      song._id = this.props.song._id;
      song.playlist = this.props.song.playlist;
    }
    else{
      song.playlist = this.props.playlist_id;
    }
    song.title = event.target.title.value;
    song.artist = event.target.artist.value;
   
    this.props.handleComplete(song);
  }
  render(){
    return(
      this.props.song?
      <div>
        <div>{this.props.song.playlist}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" defaultValue={this.props.song.title}/>
          <input type="text" name="artist" defaultValue={this.props.song.artist}/>
          <input type="submit"></input>
        </form>
      </div>:
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