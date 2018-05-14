import React, { Component } from 'react';
import Navbar from'./Components/Navbar.js';
import About from'./Components/About.js';
import News, {getNews} from'./Components/News.js';
import Home from'./Components/Home.js';
import Gallery from'./Components/Gallery.js';
import {BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';




class App extends Component {
  render() {
    return (
    <Router>
    <div className="App">
      <div className="container">
        <div><Navbar /></div>

      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/gallery" exact component={Gallery}/>
      <Route path="/news" exact component={News}/>
      </div>
    </div>
  </Router>
    );
  }
}

export default App;
