import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users'
import Posts from './components/Posts'
import Error from './components/Error'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetails from './components/PostDetails';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Users} exact />
              <Route path="/posts" component={Posts} exact />
              <Route path="/posts/:id" component={PostDetails} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
