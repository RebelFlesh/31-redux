import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/App.css';

import createAppStore from '../lib/store';
import Dashboard from './Dashboard';

const store = createAppStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">KiloVolt-React</h1>
            <h2>A Shocking way to display static objects</h2>
            <nav>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <Route exact path="/" component={Dashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
