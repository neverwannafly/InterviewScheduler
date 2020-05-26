import React, { useState } from 'react';
import Header from '../components/Header';
import InterviewForm from '../components/InterviewForm';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const CreateInterview = ({loading, user, errors}) => {

  let [title, setTitle] = useState('');
  let [agenda, setAgenda] = useState('');
  let [members, setMembers] = useState('');
  let [start, setStart] = useState('');
  let [end, setEnd] = useState('');
  let [comments, setComments] = useState('');

  const handleTitleChange = event => setTitle(event.target.value);
  const handleAgendaChange = event => setAgenda(event.target.value);
  const handleMembersChange = members => setMembers(members);
  const handleStartChange = event => setStart(event.target.value);
  const handleEndChange = event => setEnd(event.target.value);
  const handleCommentChange = event => setComments(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(members, title, agenda, start, end, comments);
  }

  return (
    <div className="page">
      <Navbar userData={user} />
      <div className="wrapper header">
        <Header name={'Schedule Interview'}/>
      </div>
      <div className="wrapper">
        <InterviewForm
          userData={user}
          handleTitleChange={handleTitleChange}
          handleAgendaChange={handleAgendaChange}
          handleMembersChange={handleMembersChange}
          handleStartChange={handleStartChange}
          handleEndChange={handleEndChange}
          handleCommentChange={handleCommentChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(CreateInterview);