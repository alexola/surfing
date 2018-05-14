import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
  // Switch,
  // Redirect
} from 'react-router-dom';
class Navbar extends Component {


  componentDidMount(){

  //   ClassToggle()
  //     const navs = document.querySelectorAll('.navBar-items')
  //     navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow') );
  //
  // document.querySelector('.navLink-toggle')
  //   .addEventListener('click', ClassToggle);
  }


  render() {
    return (
      <Route>
      <div className="navBar">
          <div className="nav-Container">
            <div className="Nav-title"> <Link to="/">L-Ondulation</Link> </div>
          </div>
          <div className="navLink navLink-toggle">
            <i className="mediaIcons" class="fa fa-bars"></i>
          </div>
          <nav className="navBar-items">
          <div className="navLink"  >
          <Link to="/about"> About us</Link>
          </div>
          <div className="navLink">
          <Link to="/news"> News</Link>
          </div>
          <div  className="navLink" >
            <Link to="/gallery"> Wave</Link>
          </div>
        </nav>
        <nav className="navBar-items navBar-itemsRight">
        <div  className="navLink" >
          <i class="fa fa-twitter"></i>
        </div>
        <div  className="navLink" >
          <i class="fa fa-facebook-f"></i>
        </div>
        <div  className="navLink" >
          <i class="fa fa-instagram"></i>
        </div>
        <div  className="navLink" >
          <i class="fa fa-youtube"></i>
        </div>
        </nav>
      </div>
    </Route>
    );
  }
}

export default Navbar;
