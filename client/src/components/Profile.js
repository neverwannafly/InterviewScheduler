import React from 'react';
import Header from './Header';

const Profile = ({success, profile}) => {

  if (!success) {
    return (
      <div className="center">
        <Header name="Resume not found!"/>
      </div>
    );
  } else {
    return (
      <div className="center">
        <iframe title="user_resume" className="frame" src={profile.resume} frameBorder="0"></iframe>
      </div>
    );
  }

}
export default Profile;