import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const NavBar = ({user}) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>

        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/movies">
                Movies <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rental">
                Rental
              </NavLink>
            </li>
            {!user && (
              <React.Fragment>
               
                  <NavLink className="nav-link" to="/login">
                    LogIn
                  </NavLink>
               
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
              {" "}
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                  <NavLink className="nav-link" to="/login">
                    {user.name}
                  </NavLink>
                
                  <NavLink className="nav-link" to="/logout">
                    LogOut
                  </NavLink>
                    
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
}

export default NavBar
