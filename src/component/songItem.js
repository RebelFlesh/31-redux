import React, { Component } from 'react';
import SongForm from './songForm';

export default class SongItem extends Component{
  render(){
    return(
      <div>
        {this.props.song.title}
      </div>
    )
  }
}