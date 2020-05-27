import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InterviewForm from '../components/InterviewForm';
import { useLocation } from 'react-router';
import formatMembers from '../utils/formatMembers';
import { connect } from 'react-redux';
import { updateInterview } from '../actions/interview';

const EditInterview = ({user, loading, errors}) => {
  const location = useLocation();
  const interviewid = location.state.interview.id;

  let [title, setTitle] = useState(location.state.interview.title);
  let [agenda, setAgenda] = useState(location.state.interview.agenda);
  let [members, setMembers] = useState(location.state.interview.members);
  let [start, setStart] = useState(location.state.interview.start.split('+')[0]);
  let [end, setEnd] = useState(location.state.interview.end.split('+')[0]);
  let [comments, setComments] = useState(location.state.interview.comments);

  const defaults = { title, agenda, members, start, end, comments };

  const handleTitleChange = event => setTitle(event.target.value);
  const handleAgendaChange = event => setAgenda(event.target.value);
  const handleMembersChange = members => setMembers(members);
  const handleStartChange = event => setStart(event.target.value);
  const handleEndChange = event => setEnd(event.target.value);
  const handleCommentChange = event => setComments(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const payload = { interview: {
      members: formatMembers(members), title, agenda, start, end, comments }
    };
    updateInterview(payload, user, interviewid);
  }
  return (
    <div className="page">
      <Navbar userData={user} />
      <div className="wrapper header">
        <Header name={'Reschedule Interview'}/>
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
          defaults={defaults}
          submitValue="Reschedule"
          disableMembers={true}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(EditInterview);