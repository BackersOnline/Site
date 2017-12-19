import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {  
  render() {
    return (
      <div className="row" id="navbar">
        <div className="col-sm-12">
          <div className="pull-left">
            <Link to="/"><img id="backers-logo-small" src="/images/backers-logo-small.png"/></Link>
          </div>
          <div className="pull-right" id="navbar-items">
            <ul id="navbar-ul">
              <li className="navbar-li" id="nav-dropdown">
                Products
                <div className="nav-dropdown-content">
                  <a href="#">Games</a>
                </div>
              </li>
              <li className="navbar-li">
                <Link to='/company'>Company</Link>
              </li>
              <li className="navbar-li">
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar