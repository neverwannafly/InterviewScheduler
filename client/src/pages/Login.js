import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { connect } from 'react-redux'
import { loginUser } from '../actions/auth';

const Login = ({authenticateUser, loading, user, errors}) => {

  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    const payload = {email, password};
    authenticateUser(payload);
  }

  return (
    <div className="wrapper">
      <div className="wrapper">
        <Header name={"Interview Scheduler"} />
        <div id="notice-root"></div>
      </div>
      <div className="container form-wrapper">
        <LoginForm 
          handleEmailChange={handleEmailChange} 
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />
        <div className="link-switch">
          <Link className="btn btn-outline-dark btn-block" to="/register">New User? Create an account to continue!</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  errors: state.auth.errors,
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: (payload) => {
    dispatch(loginUser(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);