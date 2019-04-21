import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return(
          <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">Web-Store</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="signup">Login/Signup <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="*" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/phones">Phones</Link>
                  <Link className="dropdown-item" to="/tablets">Tablets</Link>
                  <Link className="dropdown-item" to="/laptops">Laptops</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"/>Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}