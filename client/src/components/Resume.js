import React from 'react';
import Header from './Header';

const Resume = () => {
  let data;
  if (data === undefined) {
    return (
      <div className="center">
        <Header name="Resume not found!"/>
      </div>
    );
  } else {
    return (
      <div className="center">
        <iframe title="user_resume" className="frame" src={data.resume || ''} frameBorder="0"></iframe>
      </div>
    );
  }
}

export default Resume;