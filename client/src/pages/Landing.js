import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="wrapper">
        <div id="notice-root"></div>
      </div>
      <div className="container form-wrapper">
        <h1 className="center">Hello there!</h1>
        <div className="link-switch">
          <Link className="btn btn-outline-primary btn-block" to="/register"> Make an Account </Link>
          <Link className="btn btn-outline-success btn-block" to="/login"> Login </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;