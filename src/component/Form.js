import React, { Component } from 'react';

export default class Form extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let playlist={};
    if(this.props.currentPlaylist){
      playlist._id = this.props.currentPlaylist._id;
    }
    playlist.title=event.target.title.value;
    playlist.author=event.target.author.value;
    this.props.handleComplete(playlist);
  }

  render(){
    let buttonText = this.props.currentPlaylist ? 'update' : 'submit';

    //TODO: remake form for playlists
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="title"></input>
          <input type="text" name="author" placeholder="author"></input>
          <input type="submit" value={buttonText}></input>
        </form>
      </React.Fragment>
    )
  }
}