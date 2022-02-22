import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
