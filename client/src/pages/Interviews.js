import React from 'react';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';

const Interviews = () => {
  return (
    <div className="page">
      <Navbar userData={{username: 'shubham', userId: '1'}} />
      <div className="wrapper">
        <Calendar/>
      </div>
    </div>
  )
}

export default Interviews;