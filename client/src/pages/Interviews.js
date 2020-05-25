import React from 'react';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';
import { connect } from 'react-redux';

const Interviews = ({user, loading, error}) => {
  return (
    <div className="page">
      <Navbar userData={{username: user.username, userId: user.id, token: user.token}} />
      <div className="wrapper">
        <Calendar/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(Interviews);