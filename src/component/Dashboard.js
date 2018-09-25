import React, { Component } from 'react';
import Form from './Form';

export default class DashboardContainer extends Component {

  handleAdd = (book) => {
    console.log(book);
  }

  render(){
    return(
      <React.Fragment>
        <h2>Dashboard</h2>
        <Form handleComplete={this.handleAdd}/>
      </React.Fragment>
    );
  }
}