import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import UserInterviewRow from '../components/UserInterviewRow';
import { SERVER_PREFIX } from '../config';
import attachHeaders from '../utils/attachHeaders';

const UserInterview = ({user, loading, errors}) => {
  let [interviews, setInterviews] = useState([]);

  useEffect(() => {
    let didCancel = false;
    const url = `${SERVER_PREFIX}/interviews/${user.id}`;
    fetch(attachHeaders(url, user)).then(response => 
      (response.json())
    ).then(data => {
      if (!didCancel) setInterviews(data.interviews);
    });
    return () => {didCancel = true;}
  }, [user]);

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
              { interviews.map(interview => UserInterviewRow({
                isHeading: false,
                content: interview,
              })) }
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