import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';

const Navbar = ({userData, destroySession}) => {
  const handleLogout = event => {
    event.preventDefault();
    destroySession(userData);
  }
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
          <Link className="nav-item nav-link" to={"/create"}>
            Create Interview
          </Link>
          <Link className="nav-item nav-link" to={"/user/" + userData.userId}> My Profile </Link>
          <Link className="nav-item nav-link" to={"/" + userData.userId}> My Interviews </Link>
          <a className="nav-item nav-link" href="/#" id="user-logout" onClick={handleLogout}> Logout </a>
        </div>
      </div>
    </nav>
  )
}

const mapDispatchToState = dispatch => ({
  destroySession: payload => {
    dispatch(logoutUser(payload));
  }
});

export default connect(null, mapDispatchToState)(Navbar);