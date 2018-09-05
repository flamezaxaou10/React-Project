import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="Header mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="/#">Work</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collaspe navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                <Link to="/ChartDB" className="nav-link">Chart of DB</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header