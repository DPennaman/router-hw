import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="links">
      <Link to="/home">Home</Link>
      <Link to="/happy">Happy</Link>
      <Link to="/sleepy">Sleepy</Link>
      <Link to="/guilty">Gulity</Link>
    </div>
  )
}

export default NavBar;
