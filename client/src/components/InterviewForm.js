import React from 'react';
import Autocomplete from './Autocomplete';

const InterviewForm = ({userData, handleTitleChange, handleAgendaChange, handleMembersChange, handleStartChange, handleEndChange, handleCommentChange, handleSubmit}) => {
  return (
    <form id="edit_interview" acceptCharset="UTF-8" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="edit_interview_title">Title</label>
        <input 
          className="form-control" 
          type="text"
          id="edit_interview_title"
          onChange={handleTitleChange}
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="edit_interview_agenda">Agenda</label>
        <input 
          className="form-control" 
          type="text" 
          id="edit_interview_agenda"
          onChange={handleAgendaChange}
        />
      </div>
    
      <Autocomplete 
        id={'edit-find-users'} 
        label={'Members'} 
        userData={userData}
        handleMembersChange={handleMembersChange}
        defaultValue={[]}
      />
    
      <div className="form-group">
        <label htmlFor="edit_dtp_beg">Start</label>
        <input 
          className="form-control" 
          id="edit_dtp_beg" 
          type="datetime-local"
          onChange={handleStartChange}
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="edit_dtp_end">End</label>
        <input 
          className="form-control" 
          id="edit_dtp_end" 
          type="datetime-local" 
          onChange={handleEndChange}
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="edit_interview_comments">Comments</label>
        <textarea 
          className="form-control"
          id="edit_interview_comments"
          onChange={handleCommentChange}
        />
      </div>
    
      <div className="actions">
        <input type="submit" value="Create" className="btn btn-danger btn-block"/>
      </div>
    
    </form>
  )
}

export default InterviewForm;