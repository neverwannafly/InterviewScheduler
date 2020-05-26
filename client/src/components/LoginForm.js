import React from 'react';

const LoginForm = ({handleEmailChange, handlePasswordChange, handleSubmit}) => {
  return (
    <form acceptCharset="UTF-8" onSubmit={(event) => handleSubmit(event)}>
      <div className="form-group">
        <label htmlFor="login_email">Email</label>
        <input 
          className="form-control" 
          type="text" 
          id="login_email" 
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="login_password">Password</label>
        <input 
          className="form-control" 
          type="password"
          id="login_password" 
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="actions">
        <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </div>
    </form>
  );
}

export default LoginForm;