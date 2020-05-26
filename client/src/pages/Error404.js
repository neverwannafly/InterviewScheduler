import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import Header from '../components/Header';

const Error404 = ({user, loading, errors}) => {
  return (
    <div className="page">
      <Navbar userData={user} />
      <div className="wrapper">
        <Header name="ERROR - 404"/>
        <div className="center">
          <h2>The page you're looking for doesnt exist!</h2>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(Error404);