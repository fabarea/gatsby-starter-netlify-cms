import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <div className="navbar-brand" style={{float: 'left'}}>
          <Link to="/" className="navbar-item2">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '100px', height: '100px' }} />
            </figure>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/tags">
          Tags
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <a
          className="navbar-item"
          href="https://github.com/fabarea/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
