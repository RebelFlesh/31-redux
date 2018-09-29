import React, { Component } from 'react';


export default class SongItem extends Component{
  deleteObject = () => {
    this.props.handleDelete(this.props.song);
  }
  render(){
    return(
      <div>
        {this.props.song.title}
        <button onClick={this.deleteObject}>Delete</button>
      </div>
    )
  }
}