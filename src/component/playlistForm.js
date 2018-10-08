import React, { Component } from 'react';

export default class playlistForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let playlist={};
    if(this.props.currentPlaylist){
      playlist._id = this.props.currentPlaylist._id;
    }
    playlist.title=event.target.title.value;
    playlist.description=event.target.description.value;
    this.props.handleComplete(playlist);
  }

  render(){
    return(
      this.props.currentPlaylist? 
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="title" defaultValue={this.props.currentPlaylist.title}></input>
          <input type="text" name="description" placeholder="description" defaultValue={this.props.currentPlaylist.description}></input>
          <input type="submit" value='update'></input>
        </form>
      </React.Fragment>:
      <div className='createForm'>
        <form className='bordered' onSubmit={this.handleSubmit}>
          <h3>Create a playlist</h3>
          <input type="text" name="title" placeholder="title"></input>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit" value='submit'></input>
        </form>
      </div>
    )
  }
}