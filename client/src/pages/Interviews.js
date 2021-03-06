import React from 'react';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';
import { connect } from 'react-redux';

const Interviews = ({user, loading, errors}) => {
  return (
    <div className="page">
      <Navbar userData={user} />
      <div className="wrapper">
        <Calendar userData={user}/>
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