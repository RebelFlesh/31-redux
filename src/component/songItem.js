import React, { Component } from 'react';


export default class SongItem extends Component{
  render(){
    return(
      <div>
        {this.props.song.title}
      </div>
    )
  }
}