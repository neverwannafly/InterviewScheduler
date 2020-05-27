import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import ResumeUpload from '../components/ResumeUpload';
import Profile from '../components/Profile';
import { retrieveProfile, uploadUserResume } from '../actions/profile';

const UserProfile = ({loading, user, success, profile, errors, retrieveProfileData, uploadResume}) => {
  let [file, setFile] = useState(null);
  const handleFileUpload = event => {
    setFile(event.target.files);
  }
  const handleSubmit = event => {
    event.preventDefault();
    const files = {resume: file[0]}
    uploadResume(user, files);
  }
  useEffect(() => {
    retrieveProfileData(user);
  }, [retrieveProfileData, user]);

  return (
    <div className="page">
      <Navbar
        userData={user}
      />
      <div className="container">
        <Profile success={success} profile={profile} />
        <div className="center">
          <ResumeUpload 
            handleFileUpload={handleFileUpload}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  success: state.profile.success,
  loading: state.profile.loading,
  errors: state.profile.errors,
});

const mapDispatchToProps = dispatch => ({
  retrieveProfileData: (user) => {
    dispatch(retrieveProfile(user));
  },
  uploadResume: (user, file) => {
    dispatch(uploadUserResume(user, file));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);