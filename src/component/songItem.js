import React, { Component } from 'react';
import SongForm from './songForm';


export default class SongItem extends Component{
  deleteObject = () => {
    this.props.handleDelete(this.props.song);
  }
  render(){
    return(
      <div>
        {this.props.song.title}
        <SongForm handleComplete={this.props.handleComplete} song={this.props.song}/>
        <button onClick={this.deleteObject}>Delete</button>
      </div>
    )
  }
}