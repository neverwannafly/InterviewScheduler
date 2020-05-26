import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import ResumeUpload from '../components/ResumeUpload';
import Resume from '../components/Resume';

const UserProfile = ({loading, user, errors}) => {
  return (
    <div className="page">
      <Navbar
        userData={user}
      />
      <div className="container">
        <Resume />
        <div className="center">
          <ResumeUpload />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(UserProfile);