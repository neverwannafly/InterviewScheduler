import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({userData}) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <strong>
        <Link className="navbar-brand" to="/">Welcome {userData.username}</Link>
      </strong>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" data-toggle="modal" data-target="#createModal" href="/#">
            Create Interview
          </a>
          <Link className="nav-item nav-link" to={"/user/" + userData.userId}> My Profile </Link>
          <Link className="nav-item nav-link" to={"/" + userData.userId}> My Interviews </Link>
          <Link className="nav-item nav-link" to="/landing" id="user-logout"> Logout </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;