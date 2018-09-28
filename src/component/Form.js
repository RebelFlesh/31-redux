import React, { Component } from 'react';

export default class Form extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let book={};
    if(this.props.currentGenre){
      book._id = this.props.currentGenre._id;
    }
    book.title=event.target.title.value;
    book.author=event.target.author.value;
    this.props.handleComplete(book);
  }

  render(){
    let buttonText = this.props.currentGenre ? 'update' : 'submit';

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