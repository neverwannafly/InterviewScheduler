import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import UserInterviewRow from '../components/UserInterviewRow';

const UserInterview = ({user, loading, errors}) => {
  return (
    <div className="page">
      <Navbar userData={user} />
      <div className="wrapper">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <UserInterviewRow isHeading={true} />
            </thead>
            <tbody id="table-content-root">
            </tbody>
          </table>
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

export default connect(mapStateToProps)(UserInterview);