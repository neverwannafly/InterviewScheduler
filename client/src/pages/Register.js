import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/auth';
import { connect } from 'react-redux'
import { ROLE_ID, ROLE_TOKEN } from '../config';
import Notice from '../components/Notice';

const Register = ({authenticateUser}) => {

  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [username, setUsername] = useState(null);
  let [password, setPassword] = useState(null);
  let [passConfirm, setPassConfirm] = useState(null);
  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handlePassConfirmChange = event => setPassConfirm(event.target.value);
  const handleFormSubmit = event => {
    event.preventDefault();
    const payload = {
      user: { name, email, username, password, password_confirmation: passConfirm, role_token: ROLE_TOKEN, role_id: ROLE_ID}
    };
    authenticateUser(payload);
  }

  return (
    <div className="wrapper">
      <div className="wrapper">
        <div id="notice-root"></div>
      </div>
      <Header name={"Interview Scheduler"} />
      <Notice />
      <div className="container form-wrapper">
        <RegisterForm 
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handlePassConfirmChange={handlePassConfirmChange}
          handleFormSubmit={handleFormSubmit}
        />
        <div className="link-switch">
          <Link className="btn btn-outline-dark btn-block" to="/login">Already have an account? Click here to login!</Link>
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
    dispatch(registerUser(payload));
  }
});

export default  connect(mapStateToProps, mapDispatchToProps)(Register);