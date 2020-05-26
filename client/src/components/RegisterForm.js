import React from 'react';

const RegisterForm = ({handleNameChange, handleEmailChange, handleUsernameChange, handlePasswordChange, handlePassConfirmChange, handleFormSubmit}) => {
  return (
    <form acceptCharset="UTF-8" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="user_name">Name</label>
        <input 
          className="form-control"
          type="text"
          id="user_name"
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_email">Email</label>
        <input 
          className="form-control" 
          type="text"
          id="user_email"
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_username">Username</label>
        <input 
          className="form-control" 
          type="text"
          id="user_username"
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_password">Password</label>
        <input 
          className="form-control" 
          type="password"
          id="user_password"
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_password_confirmation">Password confirmation</label>
        <input 
          className="form-control" 
          type="password" 
          id="user_password_confirmation"
          onChange={handlePassConfirmChange}
          required
        />
      </div>
      <div className="actions">
        <input type="submit" value="Signup" className="btn btn-primary btn-block"/>
      </div>
    </form>
  )
}

export default RegisterForm;